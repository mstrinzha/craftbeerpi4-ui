# CraftBeerPi4 User Interface

After installation the plugin UI is available under to following url
http://localhost:8000#

## Build Web App

```npm start``` for testing the web app

- Server needs to be started on the same host and UI is accessible via http://localhost:3000

```npm run build``` to build the webapp

## Install Plugin for Development

```python3 setup.py develop```

## Package Plugin 

```python3 setup.py sdist```

### Changelog

- 10.03.23: (0.3.10) Added datatype to sensor values -> Allows datetime and string (e.g. time of last received data from ispindle plugin or alarmtimer)
- 07.03.23: (0.3.7) Added Power Slider for Actors
- 17.02.23: (0.3.6) Fix Bug in Grafana Widget | Add text property timeframe to Grafana widget (e.g. now-2h or now-7d 2023-02-17 12:00 can be entered)
- 01.02.23: (0.3.2) Bump Version to release
- 29.01.23: (0.3.2.rc6) Axis styling on analytics page adapted to allow for better reading
- 28.01.23: (0.3.2.rc5) Togglebutton import changed to new requirements on analytics page
- 27.01.23: (0.3.2.rc4) Fixed bug for sensor action, added hover effect on steps and fermentersteps, added gui version info on about page
- 26.01.23: (0.3.2.rc2) Replaced some deprecated functions and adapted style for step/fermenterstep widget
- 23.01.23: (0.3.2.b5) Fixed sensor digits of harware table to 1
- 22.01.23: (0.3.2.b4) Merged pull request [#30](https://github.com/avollkopf/craftbeerpi4-ui/pull/30) and removed unused imports
- 20.01.23: (0.3.2.b1) Some bugs fixed where reload page via browser caused an issue (e.g. settings page)
- 08.01.23: (0.3.2.a5) Some style updates
- 06.01.23: (0.3.2.a2) UI migrated to @mui V5 and react 18.2.0 (Alpha version not officially released)
- 05.01.23: (0.3.0.a1) UI migrated to React Router V6 (Alpha version not officially released)
- 10.12.22: (0.2.3) Some updates, fixes and additional features
- 12.05.22: (0.2.2) First working release
