var greetings = [
    {
      lang: "Chinese",
      greeting: "早上好 (Zǎoshang hǎo)",
    },
    { 
    lang: "Spanish",
    greeting: "Buenos dias",
    },
    {
     lang: "English",
      greeting: "Good Morning"
    },
    {
      lang: "Hindi",
      greeting: "शुभ प्रभात(shubh prabhaat)"
    },
    {
      lang: "Arabic",
      greeting: "صباح الخير(sabah al - khair)"
    },
    {
      lang: "Portuguese",
      greeting:"Bom Dia"
    },
    {
      lang: "Bengali",
      greeting:"সুপ্রভাত(Suprabhāta)"
    },
    {
      lang: "Russian",
      greeting: "Доброе утро(Dobroye utro)"
    },
    {
      lang: "Japanese",
      greeting: "おはようございます(Ohayōgozaimasu)"
    },
    {
      lang: "Dutch",
      greeting: "Goedemorgen"
    },
    {
      lang: "Xhosa",
      greeting: "Molweni ekuseni"
    },
    {
      lang: "German",
      greeting: "Guten Morgen"
    },
    {
      lang: "Korean",
      greeting: "좋은 아침이에요 (joh-eun achim e-ae-yo)"
    },
    {
      lang: "French",
      greeting: "Bonjour"
    },
    {
      lang: "Telugu",
      greeting: "శుభోదయం (Śubhōdayaṁ)"
    },
    {
      lang: "Turkish",
      greeting: "Günaydın"
    },
    {
      lang: "Tamil",
      greeting: "காலை வணக்கம் (Kālai vaṇakkam)"
    },
    {
      lang: "Vietnamese",
      greeting: "Chào buổi sáng"
    },
    {
      lang: "Polish",
      greeting: "Dzień dobry"
    },
  
  ];   
  
  
  $("h1").append(greetings[Math.floor(Math.random() * greetings.length)].greeting)
  
  
  var fontArray = ["'Single Day', cursive", "'Tangerine', cursive", "'Love Ya Like A Sister', cursive", "'Fredericka the Great', cursive","'Marcellus SC', serif","'Mountains of Christmas', cursive","'Rye', cursive","'Sacramento', cursive","'Monoton', cursive","'Playball', cursive","'Italianno', cursive","'Rancho', cursive","'Cinzel Decorative', cursive","'Emilys Candy', cursive","'Londrina Shadow', cursive","'Jacques Francois Shadow', cursive"],
      selectFont = fontArray[Math.floor(Math.random() * fontArray.length)];
  var fontColor = ["#F082B5", "#0DA9FF","#FF620D","black","#0B1380"];
      selectColor = fontColor[Math.floor(Math.random() * fontColor.length)];
  $("h1").css('font-family', selectFont)
  $("h1").css('color', selectColor)