import Item from '../models/Item';

function runScriptOnWindow() {
    const MONEY = /(\d+(,\d+)?(.\d+)?)/;
    const hostName = location.host;
    const SUPPORTED_SITES = {
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
        },
    };

    let currentSite;

    for (let site in SUPPORTED_SITES) {
        if (hostName.includes(site)) {
            currentSite = SUPPORTED_SITES[site];
        }
    }

    if (currentSite) {
        try {
            return currentSite.getData();
        } catch (err) {
            // console.log('not supported...');
            return null;
        }

    } else {
        // console.log('not supported...');
        return null;
    }

    function getAliExpressData(): Item {
        // console.log('ali express');
        return {
            price: getInnerHtml(document.querySelector('[itemprop="price"]')) ||
                getInnerHtml(document.querySelector('[itemprop="lowPrice"]')),
            currency: getInnerHtml(document.querySelector('[itemprop="priceCurrency"]')),
            name: document.title,
            imageUrl: getImgUrl(document.querySelector('[data-role="thumb"')),
            url: location.href
        } as Item;
    }

    function getAmazonData(): Item {
        // console.log('amazon');
        const priceData = getPrice(getInnerHtml(document.querySelector('.p13n-sc-price')));
        return {
            price: priceData.price,
            currency: priceData.currency,
            name: document.title,
            imageUrl: getImgUrl(document.querySelector('#imgTagWrapperId img')),
            url: location.href
        } as Item;
    }

    function getEbayData(): Item {
        // console.log('ebay');
        const priceData = getPrice(getInnerHtml(document.querySelector('.display-price') ||
            document.querySelector('[itemprop="price"]')));
        return {
            price: priceData.price,
            currency: priceData.currency,
            name: document.title,
            imageUrl: getImgUrl(document.querySelector('#primary-gallery img') ||
                document.querySelector('[itemprop="image"]')),
            url: location.href
        } as Item;
    }

    function getImgUrl(element: HTMLImageElement | null) {
        if (!element) {
            return '';
        }
        if (Array.isArray(element)) {
            return element[0].src || '';
        }
        return element.src || '';
    }

    function getInnerHtml(elm: Element | null): string {
        if (!elm) {
            return '';
        }
        if (Array.isArray(elm)) {
            return elm[0].innerHTML || '';
        }
        return elm.innerHTML;
    }

    function getPrice(combinedPrice: string, defaultCurrency: string = '$') {
        const regexRes = MONEY.exec(combinedPrice);
        const price = regexRes && Array.isArray(regexRes) ? regexRes[0] : '???';
        const currency = combinedPrice.replace(price, '').replace(/ /g, '') || defaultCurrency;

        return {
            price,
            currency
        };
    }
}

function getItemFromPage(): Promise<Item> {
    return new Promise((resolve, reject) => {
        chrome.tabs.executeScript(
            {
                code: '(' + runScriptOnWindow + ')();'
            },
            (results: Item[]) => {
                // console.log('page results:', results[0]);
                if (results[0]) {
                    resolve(results[0]);
                    return;
                }
                reject('something went wrong here...');
            }
        );
    });
}

export { getItemFromPage };