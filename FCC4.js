var quotes=[
		{quote:"不行！说的是一辈子，少一年，一个月，一天，一个时辰都不算一辈子……",movie:"霸王别姬"},
		{quote:"生活就像一盒巧克力，你永远不知道你会得到什么。",movie:"阿甘正传"},
		{quote:"有人就有恩怨，有恩怨就有江湖。人就是江湖，你怎么退出？",movie:"笑傲江湖之东方不败"},
		{quote:"爱情这东西，时间很关键，认识得太早或太晚，都不行。",movie:"2046"},
		{quote:"其实了解一个人并不代表什么，人是会变的，今天他喜欢凤梨，明天他可以喜欢别的。",movie:"重庆森林"},
		{quote:"如果你不出去走走，你就会以为这就是世界。",movie:"天堂电影院"},
		{quote:"如果你爱上了某个星球的一朵花。那么，只要在夜晚仰望星空，就会觉得漫天的繁星就像一朵朵盛开的花。",movie:"小王子"},
		{quote:"我听别人说这世界上有一种鸟是没有脚的，它只能够一直的飞呀飞呀，飞累了就在风里面睡觉，这种鸟一辈子只能下地一次，那一次就是它死亡的时候。",movie:"阿飞正传"},
		{quote:"世人笑我太疯癫，我笑他人看不穿。不见五陵豪杰墓，无花无酒锄做田。",movie:"唐伯虎点秋香"},
		{quote:"出来混，迟早是要还的",movie:"无间道"},
		{quote:"21世纪什么最珍贵?人才!",movie:"天下无贼"},
		{quote:"年轻的时候有贼心没贼胆，等到了老了吧，贼心贼胆都有了，可贼又没了。",movie:"不见不散"},
		];	
		function getRandomQuote(){
			var randomIndex=Math.floor(Math.random()*quotes.length);
			return quotes[randomIndex];
		}
			document.getElementById("quoteBox").onclick=function(){
			var e=getRandomQuote();
			document.getElementById("quoteText").innerHTML=e.quote;
			document.getElementById("quoteMovie").innerHTML=e.movie;
		}