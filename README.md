# penthouse-dashboard

![](https://media.giphy.com/media/oGkyQ8R8Nqiy1SfaWS/giphy.gif)

A dashboard project i started to learn about fetching data using React and SWR. It displays non interactive elements and charts for various APIs such as weather and news. A list can be found below. It was inspired by user interfaces from movies like Tron: Legacy and Oblivion among others.

I add on to this project every few weeks and it will not be finished for a while. I have not decided what to put in the last spot on the grid so any ideas are welcome.


## Try it yourself
This may not work perfectly and i will not provide any support.

You will need API keys from:
- Open weather map
- Alpha vantage
- News API
- Dropbox
- Twitter

And a netlify account to run the cloud functions.

Note that some of the APIs need a paid subscription to work outside of localhost.

Clone the repo and create your own `.env` file in the root directory with these key values:

- `REACT_APP_WEATHER_API_KEY="<your_key>"`
- `REACT_APP_STOCK_API_KEY="<your_key>"`
- `REACT_APP_NEWS_API_KEY="<your_key>"`
- `DROPBOX_API_KEY="<your_key>"`
- `TWITTER_TOKEN="<your_key>"`


Log in to Netlify CLI and link the directory to a Netlify site. The directory contains the default cloud functions directory and should appear on your Netlify site's dashboard.
