# Needlessly Large Theater:


# Demo site: http://www.gloriousgale.com/ApiChallenge/TheaterHall.html#/

This site was created for Riot Games Api Challenge 2.0. This project compares the item purchase data from the patch before the ap item change (patch 5.11) to data of the newly altered ap (patch 5.14) for both ranked and normal games. I used the tools Php and mysql to gather the data from riots servers, along with using the toolsets of angular, js/css/html in order to create the front-end(visual side) of the site. 


Needlessly Large Theater not only presents data of purchased items before and after the item update focusing on ap items that had raw stat changes (ap increase or decrease), I took the most purchased items from 120,000 games throughout the regions KR/NA/EUW and patches, Needlessly large rod, and provided an area where the user can get a more accurate visual representation of how much damage their champion will be doing after one spell rotation now that NLR has lost 20 ap. Knowing how much damage your champion can output is an important tool in league, not only does it let you go aggressive to try and kill your opponent but it also helps you not take unnecessary risks that could result in the enemy getting away a sliver of health while the enemy jungler comes into lane to take advantage of your aggression. I think this is a helpful tool to many of those who may have taken a break from league and are coming back to find that they are doing a fair amount less to their enemies, unfortunately I was only able to start off with a small selection of ap champions, so I choose a few of my favorites for examples.
 I choose to model Needlessly Large Theater after a movie theater as a way to keep things interesting for myself and the user as I didn’t want to copy the standard formula for many other league stat sites out there but rather try a new fun approach to it.  

(There’ll be sections throughout that are listed as “FOR THE UNRANKED:” these are just explanations aimed at those who may not be as familiar with coding, but are still interested in the process of how the site was build)


# Tech Stack (front end)
Jquery,
Twitter Bootstrap,
Animate.css,
Chart.js,
Scrolling js,

(back end)
Php with mySql

# Basic php template
(The php files were each matched with a specific json file from the regions listed above. After being created and matched, the php file would then decode the json file and plug in the match Id to riot api url. After the matchId and data are found I stored all the items purchased by each member in the game in an array that would then check and store every item in one table, and if the item code matched a specified ap then it would mark that change in another table in mysql. Each time the php file was called it checked and stored the data of 300 games. In order to increase the amount of games one could simply change the $scv for loop to whatever number they find appropriate. (another table was used to keep track of which game the php file last read, and will plug the next game in line in after the next to the code runs) 

# FOR THE UNRANKED:
I basically created automated jobs that run search the match history for games riot gave me and tally up each time specific ap items (decided by myself) are purchased, this isn’t always as easy as looking for the name of the item to pop up but rather codes that correspond to specific items, by going to riot api and checking static data you can see the corresponding code for each item in the game. 

Example: Rabadon’s Death cap = 3089
Example: Luden’s Echo = 3285 
so my code will take all the item numbers for a player, then check if it matches any of the specified ap items, then if an item does, essentially add a Tally mark on a table, on a separate data basing tool called mySql.



# Front End
I used angular views for each framed picture loaded in the lobby, and scrolling nav.js as a way to let the user navigate, throughout the different regions/pages of the site. The majority of the scripts run across both pages are functions stored in the “changeController” scope, using the ng-click tool I called the functions from the scope of said controller. Animate.css was used to create the animations for each time the pictures changed. All the views used can be found within the partials folder, whenever I wanted to add another navigation poster I would add another html file to the partials folder and add js code to the “updatedAng” file, a simple counter is used to keep track of which view is currently selected and loops when it reaches the highest number with a corresponding view, (for this project 3). The same concept is used for the graphs only with graphSelector and gameType Vars tracking which region the data is from and whether it is from normal or ranked games.

Using scrollnav I wanted to let the users navigate around the page as though they were in an actual movie theater lobby, and when they are ready to view footage of champions they can move into the main theater where they can find footage of the comparisons of the old NLR (with a bonus 20 ap) to the new one (with 20 less ap). Originally I was going to do it for every item that had altered ap, but I realized that wouldn’t be possible with the current timeframe and decided to just do some core mid champions and needlessly large rod as a proof of concept. 
 
 
# FOR THE UNRANKED:
For those reading who aren’t as familiar with coding: To make the scroll effect that happens each time you click on a link on the page I used a library that lets me dictate the location I want the browser to scroll too, as well as the specifications of the location, like how tall or short I want it. It then talks about how I used the angular framework (think of it as an extra tool box) as a way to load in completely separate html files within the page without leaving/refreshing using a tool called the angular view. This Is not the only way to achieve the effect of the champion posters changing, but I wanted to practice a bit with this as I wasn’t as familiar with it beforehand. 
angular also let me store commands, that would activate when a specific event occurred, in the case of the first page, I have a list of commands that activate if the button beneath the posters are clicked, then the commands go off which boil down to move the first poster/view one way, once that action is complete proceed to load next poster/view, then move that poster up from the bottom of the page. I did this to attempt to create the effect of actually moving around the theater from poster to poster.)

I learned a lot and got a lot of practice so I Hope everyone enjoys! 
