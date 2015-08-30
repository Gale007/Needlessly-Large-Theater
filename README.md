# Needlessly-Large-Theater
This is my entry for riots August 2015 api challenge, it goes over the change in ap item usage after the 5.11 patch and shows video comparisons of the old needlessly large stats to the new NLR.

Demo site: http://www.gloriousgale.com/ApiChallenge/TheaterHall.html#/

Needlessly Large Theater:

This site was created for Riot Games Api Challenge 2.0. This project compares the item purchase data from the patch before the ap item change with the ap items that were altered after patch 5.14. Php and mysql were used to gather and the data, while the front end uses angular, basic js/css/html. 

Needlessly Large Theater not only presents data of purchased items before and after the item update, I took the most purchased item throughout all regions and patches (Needlessly large rod) and provided an area where the user can get a more accurate visual representation of how much damage their champion will be doing after one spell rotation now as opposed to the older more powerful NLR. In a game where knowing just how much damage you’ll be able to output is extremely important to success I believe this aspect of the site will be useful to many. Unfortunately I was only able to start off with a small selection of ap champions.
 I choose to model Needlessly Large Theater after a movie theater as a way to keep things interesting for myself as well users since there seems to be a lot of basic sites that present LoL statistics.

# Tech Stack (front end)
Jquery
Twitter Bootstrap
Animate.css
Chart.js
Scrolling js

(back end)
Php with mySql

# Basic php template:
	The php files were matched with a specific json file from one of the many riot passed out for the api challenge. After being created and matched the php file would use decode the json file and move plug in the match Id to riot api url, and store all items purchased in the match in one table as well as update a second table each time one of the altered ap items were purchased. Each time the php file was called I set code to read through 300 games and get the item data from each ( using a simple table on msql  to keep track of which json file the php file last read).  
This was done for ranked and unranked for the regions European West, North America, and South Korea.



# Front End.
I used angular views for each framed picture loaded in the lobby, and scrolling nav.js as a way to let the user navigate, throughout the different regions/pages of the site. The majority of the scripts run across both pages are functions stored in the “changeController” scope, using the ng-click tool I called the functions from the scope of said controller. 
 
Using scrollnav I wanted to let the users navigate around the page as though they were in an actual movie theater lobby, and when they are ready to view footage of champions they can move into the main theater where they can find footage of the comparisons of the old NLR (with a bonus 20 ap) to the new one (with 20 less ap). Originally I was going to do it for every item with an ap change, but I realized that wouldn’t be possible with the current timeframe and decided to just do some core mid champions as a proof of concept. 
 
