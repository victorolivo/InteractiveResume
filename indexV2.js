function itemClicked() {
    document.getElementById('name').style.cssText = 
    ' transition: all 600ms; transform: translateX(-430px) translateY(-35px) scale(0.5) scaleY(1.3); position: relative;';
    document.getElementById('title').style.cssText = 
    ' transition: all 700ms; transform: translateX(-520px) translateY(-35px) scale(0.5) scaleY(1.3); margin-top:0%; position: relative;';
    document.getElementById('basic-grid').style.cssText =
    'transition-duration: 800ms; transition-delay: 100ms; transform: translateX(310px) translateY(-240px) scale(0.5);';
    document.getElementById('sBox').style.cssText = 
    'transition: all 1400ms; transform: translateY(-40px); opacity: 0.4;';
    document.getElementById('up').style.cssText = 
    'transition-duration: 1900ms; transition-delay: 2s; transition-timing-function: ease-in; transform: translateY(-600px); opacity: 0.3;';

}

function about(){
    
    document.getElementById('content').style.cssText =
    'transition: all 4500ms; width: 85vw; height: 35vw; background-color: azure;';
    document.getElementById('frame').style.cssText =
    'width: 30vw; height: 33vw;';
    document.getElementById('frame').innerHTML = '<img src="Media/portraitPic.jpg">';
    document.getElementById('frame').style.cssText = 
    'transition: all 3s; opacity: 1;';
    document.getElementById('text').innerHTML = '<p>Born in a big city of a small island, located in the Caribbean, called Puerto Rico, I feel lucky to have been able to grow by the ocean. Currently twenty-four years old and with a passion for science and technology, specifically the computer science field. Since I was little, I have always shown interest, and a lot of curiosity, on how things works. When the modern computer world started to take over, it blew my mind and spiked my desire to know how those incredibly useful and efficient machines worked. From that point forward it has been a never ending desire for more and more knowledge on the subject, I took apart computers, numerous trips to electronics stores and loved those “build your own robot” bundles. When I graduated high school there was no doubt in my mind I wanted to expand my knowledge and pursue a degree related to electronics, computers and modern technology.</p>';
    document.getElementById('text').style.cssText =
    'transition-delay: 2s; transition-duration: 300ms; width: 53vw; height: 30vw; opacity: 1; text-shadow: 2px 2px black; font-size: 130%;';

}

function experience(){

    document.getElementById('content').style.cssText =
    'transition: all 4500ms; width: 85vw; height: 35vw; background-color: azure;';
    document.getElementById('frame').style.cssText =
    'width: 30vw; height: 33vw;';
    document.getElementById('frame').innerHTML = '<img src="Media/home-background2.jpg">';
    document.getElementById('frame').style.cssText = 
    'transition: all 3s; opacity: 1;';
    document.getElementById('text').innerHTML = '<p>US Army – Signal Corps	2018 - present   oAs an 25Q (Multichannel Transmission Systems Operator and Maintainer), communications and IT is my specialty, proficient in providing and configuring secret and unclassified communications such as phones lines and/or internet connection to the Command Post. Burlington Coat Factory	2013 – 2017   oCustomer service supervisor with three years’ experience interacting with the public. Strong team player and leader. A proven and verifiable record for utilizing strong technical and interpersonal skills to enhance organizational efficiency and profitability. Committed to quality performance with an ability to learn new procedures quickly.</p>';
    document.getElementById('text').style.cssText =
    'transition-delay: 2s; transition-duration: 300ms; width: 53vw; height: 30vw; opacity: 1; text-shadow: 2px 2px black; font-size: 130%;';

}
