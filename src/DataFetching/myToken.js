// var axios = require('axios');
// var qs = require('qs');
// require('dotenv').config();

// const apiKey = process.env.REACT_APP_API_KEY
// console.log(apiKey);
// const apiSecret = process.env.REACT_APP_API_SECRET
// console.log(apiSecret);

// const token = async () => {

//     var data = qs.stringify({
//         'grant_type': 'client_credentials',
//         'client_id': `${apiKey}`,
//         'client_secret': `${apiSecret}`
//     });
//     var config = {
//         method: 'post',
//         url: 'https://test.api.amadeus.com/v1/security/oauth2/token',
//         headers: {
//             'Content-Type': 'application/x-www-form-urlencoded',
//             // 'Cookie': 'visid_incap_2137601=293/kLe1SMCrQn9j66hxD3joUl8AAAAAQUIPAAAAAADkfLboxFe8MtlaoOB4MF6T'
//         },
//         data: data
//     };

//     let myToken = ''

//     await axios(config)
//         .then(function (response) {
//             // console.log(JSON.stringify(response.data));
//             myToken += response.data.access_token
//         })
//         .catch(function (error) {
//             console.log(error);
//         });

//     console.log(myToken);

//     return myToken
// }

// token()

// export default token;

