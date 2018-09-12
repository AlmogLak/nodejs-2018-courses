import * as request from 'request';
import { User } from './user.model';
//import * as models from './user.model';

class App {
    init() {
        
        request('http://www.google.com', function (error, response, body) {
            console.log('error:', error); // Print the error if one occurred
            console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
            console.log('body:', body); // Print the HTML for the Google homepage.
        });
    }
}

const app = new App();
app.init();