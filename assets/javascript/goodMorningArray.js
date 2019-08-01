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
  
  console.log(greetings[Math.floor(Math.random() * greetings.length)].greeting)
  $("#para").append(greetings[Math.floor(Math.random() * greetings.length)].greeting)