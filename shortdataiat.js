define(['pipAPI', 'https://cdn.jsdelivr.net/gh/baranan/minno-tasks@0.*/IAT/qualtrics/quiat10.js'], function(APIConstructor, iatExtension){
    var API = new APIConstructor();

	return iatExtension({
		category1 : {
			name : 'Chinese', //Will appear in the data and in the default feedback message.
			title : {
				media : {word : 'Chinese'}, //Name of the category presented in the task.
				css : {color:'#336600','font-size':'1.8em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			},
			stimulusMedia : [ //Stimuli content as PIP's media objects
		{word: 'Shi Ting'},
			{word: 'Jia Ying'},
			{word: 'Hui Min'},
			{word: 'Kai Li'},
			{word: 'Li Ying'},
			{word: 'Mei Xin'},
			{word: 'Li Xuan'},
			{word: 'Wan Qi'},
			{word: 'Xin Hui'},
			{word: 'En Ci'}
			],
			//Stimulus css (style)
			stimulusCss : {color:'#336600','font-size':'2.3em'}
		},	
		category2 : {
			name : 'Non-Chinese', //Will appear in the data and in the default feedback message.
			title : {
				media : {word : 'Non-Chinese'}, //Name of the category presented in the task.
				css : {color:'#336600','font-size':'1.8em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			},
			stimulusMedia : [ //Stimuli content as PIP's media objects
		{word: 'Siti'},
			{word: 'Syafiqah'},
			{word: 'Fatimah'},
			{word: 'Aisha'},
			{word: 'Sharifah'},
			{word: 'Shiva'},
			{word: 'Poojaa'},
			{word: 'Devi'},
			{word: 'Priya'},
			{word: 'Shantini'}
			],
			//Stimulus css (style)
			stimulusCss : {color:'#336600','font-size':'2.3em'}
		},
		attribute1 : {
			name : 'Foreign',
			title : {
				media : {word : 'Foreign'}, //Name of the category presented in the task.
				css : {color:'#0000FF','font-size':'1.8em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			},
			stimulusMedia : [ //Stimuli content as PIP's media objects
    	{image : 'Foreign1.jpg'}, 
    		{image : 'Foreign2.jpg'}, 
    		{image : 'Foreign3.jpg'},
    		{image : 'Foreign4.jpg'},
    		{image : 'Foreign5.jpg'},
    		{image : 'Foreign6.jpg'},
    		{image : 'Foreign7.jpg'},
    		{image : 'Foreign8.jpg'},
    		{image : 'Foreign9.jpg'},
    		{image : 'Foreign10.jpg'}
			], 
			//Stimulus css (style)
			stimulusCss : {color:'#0000FF','font-size':'2.3em'}
		},
		attribute2 :{
			name : 'Singaporean', //Will appear in the data.
			title : {
				media : {word : 'Singaporean'}, //Name of the category presented in the task.
				css : {color:'#0000FF','font-size':'1.8em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
    	{image : 'SG1.jpg'}, 
    		{image : 'SG2.jpg'},
    		{image : 'SG3.jpg'}, 
    		{image : 'SG4.jpg'}, 
    		{image : 'SG5.jpg'}, 
    		{image : 'SG6.jpg'}, 
    		{image : 'SG7.jpg'}, 
     		{image : 'SG8.jpg'}, 
    		{image : 'SG9.jpg'}, 
    		{image : 'SG10.jpg'}			
    		], 
			//Stimulus css
			stimulusCss : {color:'#0000FF','font-size':'2.3em'}
		},	
		shortData: true

		base_url : {//Where are your images at?
			image : 'https://asherlee119.github.io/asherlee119/'
		} 
	});
});