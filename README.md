# PeerTube AirTime Module plugin

AirTime Module plugin for PeerTube instances and users.

    This extension allows you to hook BitTube Airtime to your instance. 
    After install this plugin and link it with your Airtime account, you will be paid in TUBE coins based on the time that people spend in your platform. 
    Your users can link their accounts too, and they will be paid based on the time that other users spend watching his/her videos or profile.

# How to install in your PeerTube instance

    - Open a browser and go to your instance homepage. 
    - Login as root (or your administrator user).
    - Go to Administration panel from left menu.
    - On navigation bar (top), click on 'Plugins/Themes'.
    - A bit below, click on 'Search' button (next to 'Installed' button).
    - In the searchbox below, you can type the name of the Plugin to easy find it.
    - Choose your Plugin and click Install (cloud icon).
    - Before see the changes, you will need to hard reload your browser.

# After this, all your instance users will have 3 new things
![alt text](https://raw.githubusercontent.com/ipbc-dev/peertube-plugin-airtime-module/master/public/images/screenshot1.jpg)

    1. Airtime Module: This will hook your Airtime extension directly in the platform.
    2. Link Account: Only available in your Account settings, shows the status of Airtime linking. If you're not already linked, just click on it and it will do the job.
    3. Airtime Extension header: This header recommends you to install the Airtime extension and provides links to instalation files and tutorials.

    And 2 more ONLY FOR INSTANCE ADMINS inside plugin settings
![alt text](https://raw.githubusercontent.com/ipbc-dev/peertube-plugin-airtime-module/master/public/images/screenshot2.jpg)

    1. Debug Logs: (default: false) Leave this option unchecked unless you're a developer trying to extend the functionality of this plugin or you want to make a bug report with some usefull screenshots.
    2. Donate Airtime to PeerTube Federation: (default: true) If you prefer to donate the TUBEs generated by your instance to the main PeerTube developers, be sure to leave this option checked.
        If you prefer to keep this funds for you, be sure to link your root account to your extension user and un-check this option.

# How to link your PeerTube Airtime with your Airtime extension user
    1. At first, you need to install the Airtime extension, create a user and log in with it. For further assistance go to: 
        - https://bittubeapp.com/
        - https://kb.bittubeapp.com/article/152-what-is-the-benefit-of-the-bittube-browser-extension-on-bittubetv
    
    2. After being logged in the Airtime extension, you will need to log in your chosen instance. 
        Important: If you want to link your instance Airtime, you need to log in as 'root', otherwise you will only link the Airtime for that user (no-root).

    3. Go to Account settings, you can find it inside the submenu next to your avatar.

    4. Below the title 'AIRTIME ACCOUNT LINKING', click ont the Link Account button, a submenu will appear from the right side.

    5. Confirm the data by clicking on submenu button.

![alt text](https://raw.githubusercontent.com/ipbc-dev/peertube-plugin-airtime-module/master/public/images/screenshot5.jpg)

    6. Reload the page to see the changes. (Better with Ctrl + F5)

    7. Now, by hovering your Link Account button, it will show a message with you Link status.
![alt text](https://raw.githubusercontent.com/ipbc-dev/peertube-plugin-airtime-module/master/public/images/screenshot3.jpg)

    8. You can also check the linking opening the Airtime Extension and going to the links section.
![alt text](https://raw.githubusercontent.com/ipbc-dev/peertube-plugin-airtime-module/master/public/images/screenshot4.jpg)



