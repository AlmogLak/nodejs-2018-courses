"use strict";
exports.__esModule = true;
function runScriptOnWindow() {
    var MONEY = /(\d+(.\d+)?)/;
    var hostName = location.host;
    var SUPPORTED_SITES = {
        'aliexpress.com': {
            name: 'ALI',
            getData: getAliExpressData
        },
        'amazon.com': {
            name: 'AMZ',
            getData: getAmazonData
        },
        'ebay.com': {
            name: 'EBY',
            getData: getEbayData
        }
    };
    var currentSite;
    for (var site in SUPPORTED_SITES) {
        if (hostName.includes(site)) {
            currentSite = SUPPORTED_SITES[site];
        }
    }
    if (currentSite) {
        try {
            return currentSite.getData();
        }
        catch (err) {
            // console.log('not supported...');
            return null;
        }
    }
    else {
        // console.log('not supported...');
        return null;
    }
    function getAliExpressData() {
        // console.log('ali express');
        return {
            price: getInnerHtml(document.querySelector('[itemprop="price"]')) ||
                getInnerHtml(document.querySelector('[itemprop="lowPrice"]')),
            currency: getInnerHtml(document.querySelector('[itemprop="priceCurrency"]')),
            name: document.title,
            imageUrl: getImgUrl(document.querySelector('[data-role="thumb"')),
            url: location.href
        };
    }
    function getAmazonData() {
        // console.log('amazon');
        var priceData = getPrice(getInnerHtml(document.querySelector('.p13n-sc-price')));
        return {
            price: priceData.price,
            currency: priceData.currency,
            name: document.title,
            imageUrl: getImgUrl(document.querySelector('#imgTagWrapperId img')),
            url: location.href
        };
    }
    function getEbayData() {
        // console.log('ebay');
        var priceData = getPrice(getInnerHtml(document.querySelector('.display-price') ||
            document.querySelector('[itemprop="price"]')));
        return {
            price: priceData.price,
            currency: priceData.currency,
            name: document.title,
            imageUrl: getImgUrl(document.querySelector('#primary-gallery img') ||
                document.querySelector('[itemprop="image"]')),
            url: location.href
        };
    }
    function getImgUrl(element) {
        if (!element) {
            return '';
        }
        if (Array.isArray(element)) {
            return element[0].src || '';
        }
        return element.src || '';
    }
    function getInnerHtml(elm) {
        if (!elm) {
            return '';
        }
        if (Array.isArray(elm)) {
            return elm[0].innerHTML || '';
        }
        return elm.innerHTML;
    }
    function getPrice(combinedPrice, defaultCurrency) {
        if (defaultCurrency === void 0) { defaultCurrency = '$'; }
        var regexRes = MONEY.exec(combinedPrice);
        var price = regexRes && Array.isArray(regexRes) ? regexRes[0] : '???';
        var currency = combinedPrice.replace(price, '').replace(/ /g, '') || defaultCurrency;
        return {
            price: price,
            currency: currency
        };
    }
}
function getItemFromPage() {
    return new Promise(function (resolve, reject) {
        chrome.tabs.executeScript({
            code: '(' + runScriptOnWindow + ')();'
        }, function (results) {
            // console.log('page results:', results[0]);
            if (results[0]) {
                resolve(results[0]);
                return;
            }
            reject('something went wrong here...');
        });
    });
}
exports.getItemFromPage = getItemFromPage;
