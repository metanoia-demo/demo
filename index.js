$(function(){

    var dOut = $('#date'),
    $hOut = $('#hours'),
    $mOut = $('#minutes'),
    $sOut = $('#seconds'),
    $ampmOut = $('#ampm');
    var months = [
    'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 
    'October', 'November', 'December'
    ];

    var days = [
    'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
    ];

    function update(){
        var date = new Date();
        
        var ampm = date.getHours() < 12
                    ? 'AM'
                    : 'PM';
        
        var hours = date.getHours() == 0
                    ? 12
                    : date.getHours() > 12
                        ? date.getHours() - 12
                        : date.getHours();
        
        var minutes = date.getMinutes() < 10 
                        ? '0' + date.getMinutes() 
                        : date.getMinutes();
        
        var seconds = date.getSeconds() < 10 
                        ? '0' + date.getSeconds() 
                        : date.getSeconds();
        
        var dayOfWeek = days[date.getDay()];
        var month = months[date.getMonth()];
        var day = date.getDate();
        var year = date.getFullYear();
        
        var dateString = dayOfWeek + ', ' + month + ' ' + day + ', ' + year;
        
        dOut.text(dateString);
        $hOut.text(hours + " : ");
        $mOut.text(minutes + " : ");
        $sOut.text(seconds);
        $ampmOut.text(ampm);
    } 
update();
window.setInterval(update, 1000);



    $('#positivity').click(function(){
        var quote_list = [
        'I am the architect of my life. I am the creator of my reality. ', 
        'My body is relaxed. My mind is calm. My soul is at peace. ', 
        'Everything happens for a reason. Everything leads to something positive. ', 
        'My potential to succeed is infinite. ',
        'I am not a product of my circumstances.  I am a product of my decisions. ', 
        'Gratitude will open my mind to the unlimited potentials within me ', 
        'I am in charge of how I feel and today I am choosing happiness. ', 
        'I have the power to create change. ',
        'Today, I am brimming with energy and overflowing with joy. ',
        'My body is healthy; my mind is brilliant; my soul is tranquil. ',
        'Creative energy surges through me and leads me to new and brilliant ideas. ',
        'My thoughts are filled with positivity and my life is plentiful with prosperity. ',
        'Everything that is happening now is happening for my ultimate good. ',
        'My obstacles are moving out of my way; my path is carved towards greatness. ',
        'I wake up today with strength in my heart and clarity in my mind. ',
        'I am grounded in the experience of the present moment. ',
        'Calmness washes over me with every deep breath I take. ',
        'All negativity and stress are evaporating from my mind. ',
        'I breathe in relaxation; I breathe out stress. ',
        'All is well in my world. I am calm, happy and content. '];
        let quote_today = quote_list[Math.floor(Math.random() * quote_list.length)];
        chrome.tts.speak(
            quote_today, {'lang': 'en-US', 'rate': 0.5});   
        // chrome.app.window.onClosed.addListener(function(){
        //     chrome.tts.stop();
        // });    
    });

        $('#Om').click(function(){
            $('.main').fadeOut("slow");
            $('.dateandtime').fadeOut("slow");
            $('#positivity').fadeOut("slow");
            $('#meditate').fadeIn("slow");
            
            $('#meditate').html(''+
            "<p id='Omtext1'>OM IS THE UNIVERSAL SOUND OF CREATION.<br>"+
            "<p id='Omtext2'><i>Close your eyes and allow yourself <br>to feel the vibration of the Om sound <br>"+
            " resonating through every single cell in your body.</i></p>"+
            '<audio id="om_meditation" src="om_11_times.mp3" autoplay>' +
            '<p>If you are reading this, it is because your browser does not support the audio element.</p>'+
            '</audio>'+
            '<button type="button" id="Om_close_button" title="Return to home page">II</button>');
    
            $('#Om_close_button').click(function() {
                $('#om_meditation')[0].pause();
                $('#om_meditation')[0].currentTime = 0;
                $('#meditate').fadeOut("slow");
                $('.main').fadeIn("slow");
                $('.dateandtime').fadeIn("slow");
                $('#positivity').fadeIn("slow");
            });           
        });

    $('#pa').click(function(){
        $('.main').fadeOut("slow");
        $('.dateandtime').fadeOut("slow");
        $('#positivity').fadeOut("slow");
        $('#mindful').fadeIn("slow");

        $('#mindful').html(''+
        '<p id="mindful_quote"><i>"Do not dwell in the past, do not dream of the future,<br>concentrate the mind on the present moment."</i></p>'+
        '<p id="mindful_quote_byline">-Buddha</p>'+
        '<audio id="meditate_sound" src="Body-Sound-Meditation.mp3" autoplay>' +
        '<p>If you are reading this, it is because your browser does not support the audio element.</p>'+
        '</audio>'+
        '<button type="button" id="close-trigger-5" title="Return to home page">II</button>');

        $('#close-trigger-5').click(function() {
            $('#meditate_sound')[0].pause();
            $('#meditate_sound')[0].currentTime = 0;

            $('#mindful').fadeOut("slow");
            $('.main').fadeIn("slow");
            $('.dateandtime').fadeIn("slow");
            $('#positivity').fadeIn("slow");
        });
    });


    $('#qi').click(function(){
        $('.main').fadeOut("slow");
        $('.dateandtime').fadeOut("slow");
        $('#positivity').fadeOut("slow");
        $('#video-view').fadeIn("slow");
        
        // var video_list_source = ["https://embed.ted.com/talks/shawn_achor_the_happy_secret_to_better_work",
        // "https://embed.ted.com/talks/angela_lee_duckworth_grit_the_power_of_passion_and_perseverance",
        // "https://embed.ted.com/talks/simon_sinek_how_great_leaders_inspire_action",
        // "https://embed.ted.com/talks/dan_pink_on_motivation"];
        // let video_today = video_list_source[Math.floor(Math.random() * video_list_source.length)];

        $('#video-view').html(''+
        '<iframe id="myVideo" src="https://embed.ted.com/talks/shawn_achor_the_happy_secret_to_better_work" width="854" height="480" frameborder="0" scrolling="no" allowfullscreen></iframe>'+
        '<button type="button" id="close-trigger-1">X</button>');

        $('#close-trigger-1').click(function() {
            var url = $('#myVideo').attr('src');
            $('#myVideo').attr('src','');
            $('#myVideo').attr('src',url);
            $('#video-view').fadeOut("slow");
            $('.main').fadeIn("slow");
            $('.dateandtime').fadeIn("slow");
            $('#positivity').fadeIn("slow");
        });
    });

    $('#write').click(function(){
        $('.main').fadeOut("slow");
        $('.dateandtime').fadeOut("slow");
        $('#positivity').fadeOut("slow");
        $('#word-pad').fadeIn("slow");
        
        $('#word-pad').html(''+
        '<textarea id="wp" rows="32" cols="60" placeholder="List down three things you are grateful for.\nNote: None of the text you write here will be saved." style="font-size:12pt;"></textarea>'+
        '<button type="button" id="close-trigger-2">X</button>');

        $('#close-trigger-2').click(function() {
            $('#word-pad').fadeOut("slow");     
            $('.main').fadeIn("slow");
            $('.dateandtime').fadeIn("slow");
            $('#positivity').fadeIn("slow");
        });
    }); 
    
    $('#music').click(function(){
        $('.main').fadeOut("slow");
        $('.dateandtime').fadeOut("slow");
        $('#positivity').fadeOut("slow");
        $('#play-music').fadeIn("slow");
        
        $('#play-music').html(''+
        "<p id='musictext'>You're listening to Weightless</p>"+
        "<p id='musictextbyline'><i>By: Marconi Union</i></p>"+
        '<audio id="paradise" src="weightless.mp3" autoplay>' +
        '<p>If you are reading this, it is because your browser does not support the audio element.</p>'+
        '</audio>'+
        '<button type="button" id="close-trigger-3">X</button>');
        
        $('#close-trigger-3').click(function() {
            $('#paradise')[0].pause();
            $('#paradise')[0].currentTime = 0;
            $('#play-music').fadeOut("slow");
            $('.main').fadeIn("slow");
            $('.dateandtime').fadeIn("slow");
            $('#positivity').fadeIn("slow");
        });
    });
});
