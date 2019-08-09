# KUNGFULU PRODUCTION README
[Demo Here!](https://kungfulu.herokuapp.com/#/)

### DESCRIPTION
KUNGFULU is a hulu app clone that distills down the enormous offering of Hulu content into its one most important category: Kung Fu media. Built from the ground up, KUNGFULU offers visitors access to Kung Fu movies and TV shows, allowing viewing on the site itself. KUNGFULU also utilizes a search bar to help users quickly find the kung content they've been looking for. User authentication included as well to confirm that only logged-in users have access to KUNGFULU's immense database, with login/signup forms are included with the package for those wishing to get access to this incredible content.

### CREATION
This app uses the Javascript libraries React and Redux for the frontend, and Ruby on Rails and postgreSQL for the backend. It was created over the course of 10 days.

## FEATURES

USER AUTHENTICATION
* Users are able to create, log in, and log out of accounts
* Users are unable to access session forms if they already are logged in
* Users are unable to access the site content if they aren't logged in

DISPLAYING VIDEOS
* Users can view multiple movies and tv shows on index page
* Movies and shows have links to watching the video in a full screen movie player
* Movies and shows have links to detail pages where additional content can be viewed

VIDEO PLAYER
* Video player viewed full screen with pause, play, scrolling, and volume implementation
* Video player can be minimized to allow user to continue viewing index page while simultaneously watching video

SEARCH FEATURE
* Content can be searched on separate page
* Searched content's video and show page directly accessed in search result area

INCOMING FEATURES
* Categories for user to group content via type category
* User favorites section that allows users to select and store their favorite pieces of media
* Custom video player

## FEATURE DEEP DIVE

### VIDEO PLAYER
The video player is implemented using a modal that covers the main index page. This allows the index page to continue to be navigated by the user while a video continues to be played in a miniaturized state in the corner. The minimization is a simple class change to the video player that alters its css. Since a single modal component was used for multiple features: Video player, Log in, and Sign up; it was necessary to issue a separate action to the modal component whenever specific styling changes to the modal itself were necessary, for example: Remove the default darkened backdrop when the user was browsing the index page with the video player present.
    ![MiniPlayerScreenShot](/images/logo.png)


### SEARCH
The search component was achieved by creating a custom route in the api controllers in the rails back-end. The controllers would query the database for content matching the information it received from the front end. The controller would then send all matching data returned from the query to a json file that render the data in a useable form back to the front end. The query itself searched for any matching information meaning that incomplete or case-insensitive queries would still return matching information, for example: Searching for 'the matr' would successfully return the film, 'The Matrix' from the database.


