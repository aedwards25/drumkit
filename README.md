This is a mini project that makes a little drumkit that you can use with the keys on your keyboard!!!

HTML 
~ This section (lines 12-49) contains the classes and keys for the sounds that there are and underneath the classes are the actual sounds with audio tags connected to them 

CSS
~ The css aligns the keys horizantally, and makes sure that the user sees the key that is being selected by highlighting it 

JS
~ Removetransition - this function reomves the playing class which we re-add later using the same code on line 13
~Playsounds - this plays the sounds and connects them to their keys (using audio & div) 
~var keys - makes sure that when you you click one key and then another it seamlessly transitions and doesn't stick on one