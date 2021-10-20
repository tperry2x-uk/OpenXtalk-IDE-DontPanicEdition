{
			"id":"oxt_builder-1",
			"name":"elementsofarray",
			"display name":"ElementsOfArray",
			"library":"oxt_builder",
			"type":"operator",
			"syntax":[
				"the elements of <Target>"
			],
			"display syntax":[
				"the elements of <i>Target</i>"
			],
			"associations":["com.livecode.array"],
			"summary":"Returns the elements of an array.",
			"parameters":[{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to an array."
			}],
			"examples":[{
				"script":"variable tArray as Array\nput the empty array into tArray\nput 1 into tArray[\"key1\"]\nput 2 into tArray[\"key2\"]\nput 3 into tArray[\"key3\"]\n\nvariable tElements as List\nput the elements of tArray into tElements\nsort tElements in ascending numeric order\n\n// tElements is [1, 2, 3]"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"A list whose elements are the elements of <Target>."
			}],
			"description":">*Note:* The resulting list is not necessarily ordered in any way. Use the <com.livecode.sort> library to sort the elements.",
			"references":{
				"library":["com.livecode.sort"]
			},
			"tags":["arrays"]
		},{
			"id":"oxt_builder-2",
			"name":"emptyarray",
			"display name":"EmptyArray",
			"library":"oxt_builder",
			"type":"expression",
			"syntax":[
				"the empty array"
			],
			"display syntax":[
				"the empty array"
			],
			"associations":["com.livecode.array"],
			"summary":"Designates the array with no elements.",
			"examples":[{
				"script":"variable tVar as Array\nvariable tCount as Number\nput the empty array into tVar\nput the number of elements in tVar into tCount -- tCount is 0"
			}],
			"description":"Use ```the empty array``` to initialise an array variable.",
			"tags":["arrays"]
		},{
			"id":"oxt_builder-3",
			"name":"repeatforeachelementinarray",
			"display name":"RepeatForEachElementInArray",
			"library":"oxt_builder",
			"type":"iterator",
			"syntax":[
				"element <Iterand>"
			],
			"display syntax":[
				"element <i>Iterand</i>"
			],
			"associations":["com.livecode.array"],
			"summary":"Repeat over the elements of an array.",
			"parameters":[{
				"name":"Iterand",
				"type":"",
				"refparam":"false",
				"description":"Any variable of appropriate type."
			}],
			"examples":[{
				"script":"    variable tArray as Array\n    put the empty array into tArray\n    put 1 into tArray[\"key1\"]\n    put 2 into tArray[\"key2\"]\n    put 3 into tArray[\"key3\"]\n\n\tvariable tSum as Number\n\tput 0 into tSum\n\n    variable tElement\n    repeat for each element tElement in tArray\n        add tElement to tSum\n    end repeat\n\n    // tSum is 6"
			}],
			"description":"Use repeat for each element to iterate over the elements of an array in no particular order. On each iteration, the <Iterand> will contain the next element of the array being iterated over.\n\n>*Note:* If <Iterand> is typed, then an error will be thrown if the array being iterated over contains any elements of a different type.",
			"tags":["arrays"]
		},{
			"id":"oxt_builder-4",
			"name":"singletonelementofarray",
			"display name":"SingletonElementOfArray",
			"library":"oxt_builder",
			"type":"operator",
			"syntax":[
				"<Target> [ <Key> ]"
			],
			"display syntax":[
				"<i>Target</i> [ <i>Key</i> ]"
			],
			"associations":["com.livecode.array"],
			"summary":"Designates the element with key <Key> in <Target>.\nIndex:An expression which evaluates to a string.",
			"parameters":[{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to an array."
			}],
			"examples":[{
				"script":"variable tArray as Array\nput the empty array into tArray\nput \"value\" into tArray[\"key\"]\n\nvariable tVar as String\nput tArray[\"key\"] into tVar -- tVar contains \"value\""
			}],
			"description":"Either locates the element container with the given key for use as the target container of another operation, or evaluates the element with the given key as the source of another operation.",
			"tags":["arrays"]
		},{
			"id":"oxt_builder-5",
			"name":"deleteelementofarray",
			"display name":"DeleteElementOfArray",
			"library":"oxt_builder",
			"type":"statement",
			"syntax":[
				"delete <Target> [ <Key> ]"
			],
			"display syntax":[
				"delete <i>Target</i> [ <i>Key</i> ]"
			],
			"associations":["com.livecode.array"],
			"summary":"Deletes the element with key <Key> in <Target>.\nIndex:An expression which evaluates to a string.",
			"parameters":[{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to an array."
			}],
			"examples":[{
				"script":"variable tArray as Array\nput the empty array into tArray\nput \"value\" into tArray[\"key\"]\n\ndelete tArray[\"key\"] -- tArray is the empty array"
			}],
			"description":"Either locates the element container with the given key for use as the target container of another operation, or evaluates the element with the given key as the source of another operation.",
			"tags":["arrays"]
		},{
			"id":"oxt_builder-6",
			"name":"amongkeysofarray",
			"display name":"AmongKeysOfArray",
			"library":"oxt_builder",
			"type":"operator",
			"syntax":[
				"<Needle> ( is not | is ) among the keys of <Target>"
			],
			"display syntax":[
				"<i>Needle</i> ( is not | is ) among the keys of <i>Target</i>"
			],
			"associations":["com.livecode.array"],
			"summary":"Determines if an array has a given key",
			"parameters":[{
				"name":"Needle",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to an integer, string, or list of integers."
			},{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to an array."
			}],
			"examples":[{
				"script":"variable tArray as Array\nput \"value\" into tArray[\"key\"]\n\nvariable tIsAmong as Boolean\nput \"key\" is among the keys of tArray into tIsAmong -- tIsAmong is true"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"Returns true if <Needle> can be found among the keys of <Target>."
			}],
			"description":"The keys of an array are case insensitive. Thus\n``` tVar is among the keys of tArray``` \nis not equivalent to \n``` tVar is in (the keys of tArray) ```\nas the latter <IsInList> operation *is* case sensitive.",
			"references":{
				"operator":["IsInList"]
			},
			"tags":["arrays"]
		},{
			"id":"oxt_builder-7",
			"name":"keysofarray",
			"display name":"KeysOfArray",
			"library":"oxt_builder",
			"type":"operator",
			"syntax":[
				"the keys of <Target>"
			],
			"display syntax":[
				"the keys of <i>Target</i>"
			],
			"associations":["com.livecode.array"],
			"summary":"Returns the keys of an array.",
			"parameters":[{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to an array."
			}],
			"examples":[{
				"script":"variable tArray as Array\nput the empty array into tArray\nput \"value1\" into tArray[\"key1\"]\nput \"value2\" into tArray[\"key2\"]\nput \"value3\" into tArray[\"key3\"]\n\nvariable tKeys as List\nput the keys of tArray into tKeys\nsort tKeys in ascending order\n\nvariable tKeysString as String\ncombine tKeys with \",\" into tKeysString \n// tKeysString is \"key1,key2,key3\""
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"A list whose elements are the keys of <Target>."
			}],
			"description":">*Note:* The resulting list is not necessarily ordered in any way. Use the <com.livecode.sort> library to sort the keys.",
			"references":{
				"library":["com.livecode.sort"]
			},
			"tags":["arrays"]
		},{
			"id":"oxt_builder-8",
			"name":"countelementsofarray",
			"display name":"CountElementsOfArray",
			"library":"oxt_builder",
			"type":"operator",
			"syntax":[
				"the number of elements in <Target>"
			],
			"display syntax":[
				"the number of elements in <i>Target</i>"
			],
			"associations":["com.livecode.array"],
			"summary":"Returns the number of elements in <Target>",
			"parameters":[{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to an array."
			}],
			"examples":[{
				"script":"variable tArray as Array\nput the empty array into tArray\nput 1 into tArray[\"key1\"]\nput 2 into tArray[\"key2\"]\nput 3 into tArray[\"key3\"]\n\nvariable tVar as Number\nput the number of elements in tArray into tVar -- tVar contains 3"
			}],
			"description":"The number of elements in tArray returns the number of key-value pairs stored in the array.",
			"tags":["arrays"]
		},{
			"id":"oxt_builder-9",
			"name":"amongelementsofarray",
			"display name":"AmongElementsOfArray",
			"library":"oxt_builder",
			"type":"operator",
			"syntax":[
				"<Needle> ( is not | is ) among the elements of <Target>"
			],
			"display syntax":[
				"<i>Needle</i> ( is not | is ) among the elements of <i>Target</i>"
			],
			"associations":["com.livecode.array"],
			"summary":"Determines if an array contains a given element",
			"parameters":[{
				"name":"Needle",
				"type":"",
				"refparam":"false",
				"description":"Any expression."
			},{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to an array."
			}],
			"examples":[{
				"script":"variable tArray as Array\nput \"value\" into tArray[\"key\"]\n\nvariable tIsAmong as Boolean\nput \"value\" is among the elements of tArray into tIsAmong -- tIsAmong is true"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"Returns true if <Needle> can be found among the elements of <Target>."
			}],
			"description":"Elements are compared using the default comparison for that type. Thus for a string, ```tString```, \n```tString is among the elements of tArray``` \nis a case sensitive search.",
			"tags":["arrays"]
		},{
			"id":"oxt_builder-10",
			"name":"repeatforeachkey",
			"display name":"RepeatForEachKey",
			"library":"oxt_builder",
			"type":"iterator",
			"syntax":[
				"key <Iterand>"
			],
			"display syntax":[
				"key <i>Iterand</i>"
			],
			"associations":["com.livecode.array"],
			"summary":"Repeat over the keys of an array.",
			"parameters":[{
				"name":"Iterand",
				"type":"",
				"refparam":"false",
				"description":"A string container."
			}],
			"examples":[{
				"script":"    variable tArray as Array\n    put the empty array into tArray\n    put 1 into tArray[\"abc\"]\n    put 2 into tArray[\"def\"]\n    put 3 into tArray[\"ghi\"]\n\n\tvariable tString as String\n\tput \"\" into tString\n\n    variable tKey as String\n    repeat for each key tKey in tArray\n        put tKey after tString\n    end repeat\n\n    variable tBool as Boolean\n    put tString contains \"abc\" into tBool -- tBool is true"
			}],
			"description":"Use repeat for each key to iterate over the keys of an array in no particular order. On each iteration, the <Iterand> will contain the next key of the array being iterated over.",
			"tags":["arrays","control structures"]
		},{
			"id":"oxt_builder-11",
			"name":"com.livecode.array",
			"display name":"com.livecode.array",
			"library":"oxt_builder",
			"type":"module",
			"display syntax":[
				"com.livecode.array"
			],
			"associations":["com.livecode.array"],
			"summary":"This library consists of the operations on arrays included in the standard library of LiveCode Builder.",
			"description":"This library consists of the operations on arrays included in the standard library of LiveCode Builder."
		},{
			"id":"oxt_builder-12",
			"name":"paintplaceholderimage",
			"display name":"paintPlaceholderImage",
			"library":"oxt_builder",
			"type":"handler",
			"syntax":[
				"paintPlaceholderImage(<pCanvas>,<pBounds>,<pSVGIcon>,<pLabel>,<pFont>,<pColor>)"
			],
			"display syntax":[
				"paintPlaceholderImage(<i>pCanvas</i>,<i>pBounds</i>,<i>pSVGIcon</i>,<i>pLabel</i>,<i>pFont</i>,<i>pColor</i>)"
			],
			"associations":["com.livecode.library.widgetutils"],
			"summary":"Paint a placeholder image using an SVG icon and name",
			"parameters":[{
				"name":"pCanvas",
				"type":"",
				"refparam":"false",
				"description":"The canvas on which to draw the placeholder"
			},{
				"name":"pBounds",
				"type":"",
				"refparam":"false",
				"description":"The rectangle in which to draw the placeholder on the canvas"
			},{
				"name":"pSVGIcon",
				"type":"",
				"refparam":"false",
				"description":"The placeholder icon to use"
			},{
				"name":"pLabel",
				"type":"",
				"refparam":"false",
				"description":"The label to use"
			},{
				"name":"pFont",
				"type":"",
				"refparam":"false",
				"description":"A font to draw the label with. If none specified, Arial 14pt is used."
			},{
				"name":"pColor",
				"type":"",
				"refparam":"false",
				"description":"A color to draw the label with. If none specified, #404040 is used"
			}],
			"description":"Use the <paintPlaceHolder> image handler to draw a placeholder on the\ngiven canvas when, for example, the widget shouldn't be displayed as\nactive in browse mode, or is not available on the current platform.\n"
		},{
			"id":"oxt_builder-13",
			"name":"constrainpathtorect",
			"display name":"constrainPathToRect",
			"library":"oxt_builder",
			"type":"handler",
			"syntax":[
				"constrainPathToRect(<pTargetRect>,<xPath>)"
			],
			"display syntax":[
				"constrainPathToRect(<i>pTargetRect</i>,<i>xPath</i>)"
			],
			"associations":["com.livecode.library.widgetutils"],
			"summary":"Scales and translates a path to fit within a rectangle",
			"parameters":[{
				"name":"pTargetRect",
				"type":"",
				"refparam":"false",
				"description":"The rectangle to fit the path within"
			},{
				"name":"xPath",
				"type":"",
				"refparam":"false",
				"description":"The path to transform"
			}],
			"examples":[{
				"script":"use com.livecode.library.iconsvg\n\npublic handler OnPaint() returns nothing\n\t-- get the 'shopping cart' icon from the icon library\n\tvariable tPathString as String\n \tput iconSVGPathFromName(\"shopping cart\") into tPathString\n\n\t-- create the path\n\tvariable tPath as Path\n\tput path tPathString into tPath\n\n\t-- scale the path to fit within the bounds of the widget\n\tconstrainPathToRect(my bounds, tPath)\n\n\t-- fill the path\n\tfill tPath on this canvas\nend handler"
			}],
			"description":"Scales and transforms <xPath> so that it fits within <pTargetRect> whilst maintaining its\naspect ratio."
		},{
			"id":"oxt_builder-14",
			"name":"stringtocolor",
			"display name":"stringToColor",
			"library":"oxt_builder",
			"type":"handler",
			"syntax":[
				"stringToColor(<pString>)"
			],
			"display syntax":[
				"stringToColor(<i>pString</i>)"
			],
			"associations":["com.livecode.library.widgetutils"],
			"summary":"Converts a string to a color",
			"parameters":[{
				"name":"pString",
				"type":"",
				"refparam":"false",
				"description":"A comma delimited string representing a color in RGB / RGBA format"
			}],
			"examples":[{
				"script":"property widgetColor \tget getColor\tset setColor\nmetadata widgetColor.editor is \"com.livecode.pi.colorwithalpha\"\n\nprivate variable mColor as Color\n\npublic handler OnLoad(in pProperties as Array)\n\tsetColor(pProperties[\"color\"])\nend handler\n\npublic handler setColor(in pColor as String)\n\tput stringToColor(pColor) into mColor\n\tredraw all\nend handler"
			}],
			"description":"Use the <stringToColor> handler when receiving colors from a script\nvia a property setter, or from the widget's stored properties array when loading."
		},{
			"id":"oxt_builder-15",
			"name":"inttostring",
			"display name":"intToString",
			"library":"oxt_builder",
			"type":"handler",
			"syntax":[
				"intToString(<pNumber>)"
			],
			"display syntax":[
				"intToString(<i>pNumber</i>)"
			],
			"associations":["com.livecode.library.widgetutils"],
			"summary":"Formats an integer as a string",
			"parameters":[{
				"name":"pNumber",
				"type":"",
				"refparam":"false",
				"description":"The integer to format"
			}],
			"examples":[{
				"script":"log 5 formatted as string \t\t\t-- logs 5.000000\nlog intToString(5)\t\t\t\t\t\t -- logs 5"
			}],
			"description":"<intToString> formats an integer as a string, removing the decimal place and any zeros\nthereafter."
		},{
			"id":"oxt_builder-16",
			"name":"stripzeros",
			"display name":"stripZeros",
			"library":"oxt_builder",
			"type":"handler",
			"syntax":[
				"stripZeros(<pString>)"
			],
			"display syntax":[
				"stripZeros(<i>pString</i>)"
			],
			"associations":["com.livecode.library.widgetutils"],
			"summary":"Removes any superfluous zeros and decimal places.",
			"parameters":[{
				"name":"pString",
				"type":"",
				"refparam":"false",
				"description":"The string to remove zeros from"
			}],
			"examples":[{
				"script":"log stripZeros(\"5.0000000\")\t\t\t-- logs 5\nlog stripZeros(\"5.432100\")\t\t\t-- logs 5.4321"
			}],
			"description":"Use <stripZeros> to remove any superfluous zeros and decimal places from <pString>\nwhich have been added by the\n\n`tNumber formatted as string`\n\nsyntax."
		},{
			"id":"oxt_builder-17",
			"name":"colortostring",
			"display name":"colorToString",
			"library":"oxt_builder",
			"type":"handler",
			"syntax":[
				"colorToString(<pColor>,<pIncludeAlpha>)"
			],
			"display syntax":[
				"colorToString(<i>pColor</i>,<i>pIncludeAlpha</i>)"
			],
			"associations":["com.livecode.library.widgetutils"],
			"summary":"Converts a color to a string representing the color",
			"parameters":[{
				"name":"pColor",
				"type":"",
				"refparam":"false",
				"description":"A value of type com.livecode.canvas.Color"
			},{
				"name":"pIncludeAlpha",
				"type":"",
				"refparam":"false",
				"description":"Whether to include the alpha value in the string or not"
			}],
			"examples":[{
				"script":"property widgetColor \tget getColor\nmetadata widgetColor.editor is \"com.livecode.pi.colorwithalpha\"\n\nprivate variable mColor as Color\n\npublic handler OnSave(out rProperties as Array)\n\tput colorToString(mColor, true) into rProperties[\"color with alpha\"]\nend handler\n\npublic handler getColor() returns String\n\t-- the editor used for the widgetColor property expects the alpha value to be included\n\treturn colorToString(mColor, true)\nend handler"
			},{
				"script":"log colorToString(color [0.4,0.4,0.4,0.4])\t\t\t-- logs \"102,102,102,102\""
			}],
			"description":"Use the <colorToString> handler when logging colors, returning them to a script\nvia a property getter, or serialising them in the widget's stored properties array for saving."
		},{
			"id":"oxt_builder-18",
			"name":"placeholdericon",
			"display name":"placeholderIcon",
			"library":"oxt_builder",
			"type":"handler",
			"syntax":[
				"placeholderIcon(<pOS>)"
			],
			"display syntax":[
				"placeholderIcon(<i>pOS</i>)"
			],
			"associations":["com.livecode.library.widgetutils"],
			"summary":"Returns a placeholder icon for a given operating system",
			"parameters":[{
				"name":"pOS",
				"type":"",
				"refparam":"false",
				"description":"The operating system.\n- \"mac\"\n- \"ios\"\n- \"android\"\n- \"windows\"\n- \"linux\"\n- \"emscripten\""
			}],
			"description":"Use <placeholderIcon> to fetch an SVG icon that can be\nused as the placeholder image for a widget that is native to, and\ntherefore only available on, a given operating system."
		},{
			"id":"oxt_builder-19",
			"name":"getnativethemename",
			"display name":"getNativeThemeName",
			"library":"oxt_builder",
			"type":"handler",
			"syntax":[
				"getNativeThemeName()"
			],
			"display syntax":[
				"getNativeThemeName()"
			],
			"associations":["com.livecode.library.widgetutils"],
			"summary":"Get the canonical name of the current \"native\" mobile theme",
			"examples":[{
				"script":"variable tNativeTheme as String\nput getNativeThemeName() into tNativeTheme\n\nif tNativeTheme is \"android\" then\n\t-- Draw Android themed UI\nelse\n\t-- Draw iOS themed UI\nend if"
			}],
			"description":"Returns the name of the current theme that should be used when the theme is\n\"native\".\n\nCurrently, this will return either \"iOS\" or \"Android\"."
		},{
			"id":"oxt_builder-20",
			"name":"com.livecode.library.widgetutils",
			"display name":"com.livecode.library.widgetutils",
			"library":"oxt_builder",
			"type":"module",
			"display syntax":[
				"com.livecode.library.widgetutils"
			],
			"associations":["com.livecode.library.widgetutils"],
			"summary":"A library of utility handlers for functions commonly needed by widgets.",
			"description":"A library of utility handlers for functions commonly needed by widgets."
		},{
			"id":"oxt_builder-21",
			"name":"roundtonearest",
			"display name":"RoundToNearest",
			"library":"oxt_builder",
			"type":"statement",
			"syntax":[
				"round <Target>"
			],
			"display syntax":[
				"round <i>Target</i>"
			],
			"associations":["com.livecode.mathfoundation"],
			"summary":"Rounds <Target> to the nearest integer.",
			"parameters":[{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a numeric container."
			}],
			"examples":[{
				"script":"variable tNum as Number\nput -5.5 into tNum\nround tNum -- tNum contains -6"
			}],
			"description":"Replaces <Target> with the greatest integer less than or equal to <Target>, or the least integer greater than or equal to <Target> depending on which is closest. If <Target> is exactly halfway between two integers, rounds to the one with greatest absolute value, i.e. away from 0.",
			"tags":["math"]
		},{
			"id":"oxt_builder-22",
			"name":"com.livecode.mathfoundation",
			"display name":"com.livecode.mathfoundation",
			"library":"oxt_builder",
			"type":"module",
			"display syntax":[
				"com.livecode.mathfoundation"
			],
			"associations":["com.livecode.mathfoundation"],
			"summary":"This library consists of the foundational mathematical operations included in the standard library of LiveCode Builder.",
			"description":"This library consists of the foundational mathematical operations included in the standard library of LiveCode Builder."
		},{
			"id":"oxt_builder-23",
			"name":"ceiloperator",
			"display name":"CeilOperator",
			"library":"oxt_builder",
			"type":"operator",
			"syntax":[
				"the ceiling of <Target>"
			],
			"display syntax":[
				"the ceiling of <i>Target</i>"
			],
			"associations":["com.livecode.mathfoundation"],
			"summary":"Returns the ceiling of <Target>.",
			"parameters":[{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a number."
			}],
			"examples":[{
				"script":"variable tNum as Number\nvariable tCeiling as Number\nput -5.5 into tNum\nput the ceiling of tNum into tCeiling -- tCeiling contains -5"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"The ceiling of <Target>"
			}],
			"description":"The ceiling of <Target> is the least integer greater than or equal to <Target>.",
			"tags":["math"]
		},{
			"id":"oxt_builder-24",
			"name":"flooroperator",
			"display name":"FloorOperator",
			"library":"oxt_builder",
			"type":"operator",
			"syntax":[
				"the floor of <Target>"
			],
			"display syntax":[
				"the floor of <i>Target</i>"
			],
			"associations":["com.livecode.mathfoundation"],
			"summary":"Returns the floor of <Target>.",
			"parameters":[{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a number."
			}],
			"examples":[{
				"script":"variable tNum as Number\nvariable tFloor as Number\nput -5.5 into tNum\nput the floor of tNum into tFloor -- tFloor contains -6"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"The floor of <Target>"
			}],
			"description":"The floor of <Target> is the greatest integer less than or equal to <Target>.",
			"tags":["math"]
		},{
			"id":"oxt_builder-25",
			"name":"roundedtonearest",
			"display name":"RoundedToNearest",
			"library":"oxt_builder",
			"type":"operator",
			"syntax":[
				"the rounded of <Target>"
			],
			"display syntax":[
				"the rounded of <i>Target</i>"
			],
			"associations":["com.livecode.mathfoundation"],
			"summary":"Rounds <Target> to the nearest integer.",
			"parameters":[{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a number."
			}],
			"examples":[{
				"script":"variable tNum as Number\nvariable tRounded as Number\nput -5.5 into tNum\nput the rounded of tNum into tRounded -- tRounded contains -6"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"The rounded value of <Target>"
			}],
			"description":"Return the greatest integer less than or equal to <Target>, or the least integer greater than or equal to <Target> depending on which is closest. If <Target> is exactly halfway between two integers, returns the one with greatest absolute value, i.e. away from 0.",
			"tags":["math"]
		},{
			"id":"oxt_builder-26",
			"name":"piconstant",
			"display name":"PiConstant",
			"library":"oxt_builder",
			"type":"expression",
			"syntax":[
				"pi"
			],
			"display syntax":[
				"pi"
			],
			"associations":["com.livecode.mathfoundation"],
			"summary":"The constant pi",
			"examples":[{
				"script":"variable tVar as Number\nput the cos of pi into tVar -- tVar contains -1"
			}],
			"description":"The ratio of a circle's circumference to its diameter.",
			"tags":["math"]
		},{
			"id":"oxt_builder-27",
			"name":"com.livecode.assert",
			"display name":"com.livecode.assert",
			"library":"oxt_builder",
			"type":"module",
			"display syntax":[
				"com.livecode.assert"
			],
			"associations":["com.livecode.assert"],
			"summary":"Sometimes there are restrictions about how some LCB code can be used\ncorrectly.  It may only be possible to make it work in a sensible way\nif is passed a particular range of values, or if the system is in a\nparticular state.  These are known as \"preconditions\" for the code.\n\nMany preconditions can be expressed via the LCB type system.  For\nexample, you can declare that the parameters passed to handler must be\nparticular types of value.  For example, when you write `in pName as\nString`, you are saying that the handler can only work when the\n`pName` parameter is a character string.  This is a precondition that\ncan be checked automatically by the LCB compiler and virtual machine.\n\nSome preconditions can't yet be automatically checked by LCB.  An\nexample would be a requirement that a string contains only ASCII\ncharacters, or that an array has a particular key.\n\nThis module provides syntax to assist with explicit precondition\nchecks.",
			"description":"Sometimes there are restrictions about how some LCB code can be used\ncorrectly.  It may only be possible to make it work in a sensible way\nif is passed a particular range of values, or if the system is in a\nparticular state.  These are known as \"preconditions\" for the code.\n\nMany preconditions can be expressed via the LCB type system.  For\nexample, you can declare that the parameters passed to handler must be\nparticular types of value.  For example, when you write `in pName as\nString`, you are saying that the handler can only work when the\n`pName` parameter is a character string.  This is a precondition that\ncan be checked automatically by the LCB compiler and virtual machine.\n\nSome preconditions can't yet be automatically checked by LCB.  An\nexample would be a requirement that a string contains only ASCII\ncharacters, or that an array has a particular key.\n\nThis module provides syntax to assist with explicit precondition\nchecks."
		},{
			"id":"oxt_builder-28",
			"name":"expectpreconditionwithreason",
			"display name":"ExpectPreconditionWithReason",
			"library":"oxt_builder",
			"type":"statement",
			"syntax":[
				"expect [that] <Condition> because <Reason>"
			],
			"display syntax":[
				"expect [that] <i>Condition</i> because <i>Reason</i>"
			],
			"associations":["com.livecode.assert"],
			"summary":"Check a precondition, with a reason",
			"parameters":[{
				"name":"Condition",
				"type":"",
				"refparam":"false",
				"description":"Expression that must be true for code to work"
			},{
				"name":"Reason",
				"type":"",
				"refparam":"false",
				"description":"Description of the precondition"
			}],
			"examples":[{
				"script":"-- Draw a random variate from the Bernoulli distribution with\n-- parameter pParam.  A Bernoulli variate may be 0 or 1; the\n-- parameter pParam is the probability that the result is 1.\nhandler BernoulliVariate(in pParam as Number) returns Number\n\texpect (pParam >= 0 and pParam <= 1) \\\n\t\t because \"Bernoulli parameter must be a probability in [0,1]\"\n\tif (any number <= pParam) then\n\t\treturn 1\n\telse\n\t\treturn 0\n\tend if\nend handler"
			}],
			"description":"Use this statement at the start of a handler to check that necessary\npreconditions for the handler are satisfied.  For example, the handler\nmay require that its parameters have a particular structure or fall\nwithin a particular range, or may need the system to be in a specific\nstate.\n\nIf the <Condition> is false, an error will be thrown including the\n<Reason> for the check.",
			"references":{
				"statement":["ExpectPrecondition"]
			},
			"tags":["assertions"]
		},{
			"id":"oxt_builder-29",
			"name":"expectprecondition",
			"display name":"ExpectPrecondition",
			"library":"oxt_builder",
			"type":"statement",
			"syntax":[
				"expect [that] <Condition>"
			],
			"display syntax":[
				"expect [that] <i>Condition</i>"
			],
			"associations":["com.livecode.assert"],
			"summary":"Check a precondition",
			"examples":[{
				"script":"handler BoxValue(in pValue as any) returns Array\n\treturn { \"__VALUE\": pValue }\nend handler\n\nhandler UnBoxValue(in pBox as Array) returns any\n\texpect that \"__VALUE\" is among the elements of pBox\n\treturn pBox[\"__VALUE\"]\nend handler"
			}],
			"description":"Use this statement at the start of a handler to check that necessary\npreconditions for the handler are satisfied.  For example, the handler\nmay require that its parameters have a particular structure or fall\nwithin a particular range, or may need the system to be in a specific\nstate.\n\nNote that if the <Condition> is false, this statement will throw an\nerror with the slightly-unhelpful message that \"assertion failed\".\nUsually, it will be more useful to use <ExpectsPreconditionWithReason>\ninstead.",
			"references":{
				"statement":["ExpectPreconditionWithReason"]
			},
			"tags":["assertions"]
		},{
			"id":"oxt_builder-30",
			"name":"com.livecode.widget.colorswatch",
			"display name":"com.livecode.widget.colorswatch",
			"library":"oxt_builder",
			"type":"widget",
			"display syntax":[
				"com.livecode.widget.colorswatch"
			],
			"associations":["com.livecode.widget.colorswatch"],
			"summary":"This widget displays a color with optional alpha channel.",
			"description":"This widget displays a color with optional alpha channel."
		},{
			"id":"oxt_builder-31",
			"name":"mouseup",
			"display name":"mouseUp",
			"library":"oxt_builder",
			"type":"message",
			"syntax":[
				"mouseUp"
			],
			"display syntax":[
				"mouseUp"
			],
			"associations":["com.livecode.widget.colorswatch"],
			"summary":"Sent when the color swatch is clicked",
			"description":"Sent when the color swatch is clicked"
		},{
			"id":"oxt_builder-32",
			"name":"swatchcolor",
			"display name":"swatchColor",
			"library":"oxt_builder",
			"type":"property",
			"syntax":[
				"set the swatchColor of <widget> to <pColor>\nget the swatchColor of <widget>"
			],
			"display syntax":[
				"set the swatchColor of <i>widget</i> to <i>pColor</i>"
			],
			"associations":["com.livecode.widget.colorswatch"],
			"summary":"Determines the color displayed by the swatch.",
			"parameters":[{
				"name":"pColor",
				"type":"",
				"refparam":"false",
				"description":"The color of the swatch in RGB or RGBA format, or empty."
			}],
			"examples":[{
				"script":"set the swatchColor of widget \"Color Swatch\" to empty"
			},{
				"script":"    on copySwatchColorToGraphic pSwatchName, pGraphicName\n        local tColorWithAlpha\n        put the swatchColor of widget pSwatchName into tColorWithAlpha\n\n        local tColor, tBlendLevel\n        put item 1 to 3 of tColorWithAlpha into tColor\n        put (255 - item 4 of tColorWithAlpha) / 2.55 into tBlendLevel\n\n        set the backcolor of graphic pGraphicName to tColor\n        set the blendLevel of graphic pGraphicName to tBlendLevel\n    end copySwatchColorToGraphic"
			}],
			"description":"Use the iconColor property to set the color of the widget icon. The color is\nin the form of a 3 or 4 item string, the 4th optional item being the alpha value,\nall between 0 and 255.\n\n>*Note:* The color returned by the <swatchColor> property, if not empty,\nalways includes an alpha value which is 255 by default.\n"
		},{
			"id":"oxt_builder-33",
			"name":"bordercolor",
			"display name":"borderColor",
			"library":"oxt_builder",
			"type":"property",
			"syntax":[
				"get the borderColor of <widget>",
				"set the borderColor of <widget> to <color>"
			],
			"display syntax":[
				"get the borderColor of <i>widget</i>"
			],
			"associations":["com.livecode.widget.navbar"],
			"summary":"The color of the navigation bar border",
			"description":"The top border of the navigation bar is drawn using the <borderColor>.",
			"references":{
				"property":["showBorder"]
			}
		},{
			"id":"oxt_builder-34",
			"name":"hilitechanged",
			"display name":"hiliteChanged",
			"library":"oxt_builder",
			"type":"message",
			"syntax":[
				"hiliteChanged"
			],
			"display syntax":[
				"hiliteChanged"
			],
			"associations":["com.livecode.widget.navbar"],
			"summary":"Sent when a navigation item is selected",
			"examples":[{
				"script":"on hiliteChanged\n\tgo card the hilitedItemName of me\nend hiliteChanged"
			}],
			"description":"The <hiliteChanged> message is sent when the highlighted navigation\nitem changes, either by clicking on the navigation bar or by setting\nthe <hilitedItem> or <hilitedItemName> properties.",
			"references":{
				"property":["hilitedItem","hilitedItemName"]
			}
		},{
			"id":"oxt_builder-35",
			"name":"itemnames",
			"display name":"itemNames",
			"library":"oxt_builder",
			"type":"property",
			"syntax":[
				"get the itemNames of <widget>",
				"set the itemNames of <widget> to <names>"
			],
			"display syntax":[
				"get the itemNames of <i>widget</i>"
			],
			"associations":["com.livecode.widget.navbar"],
			"summary":"The names of the navigation items",
			"value":[{
				"name":"value",
				"type":"",
				"description":"A comma-delimited list of navigation item names."
			}],
			"description":"The names of the navigation items of the widget.  These are the names\nused internally to identify each navigation item, rather than the\n<itemLabels> displayed to the user.\n\nSetting the <itemNames> can add or remove items to the navigation bar.\n\nIf the new value of the <itemNames> has more items than the navigation\nbar, as many new navigation items as necessary are created and added\nto the end of the navigation bar, using the default label and icons.\n\nIf the new value of the <itemNames> has fewer items than the\nnavigation bar, items are removed from the end of the navigation bar\nas required.\n\nIt is not possible to re-order the navigation items by setting the\n<itemNames>.",
			"references":{
				"property":["itemLabels"]
			}
		},{
			"id":"oxt_builder-36",
			"name":"hiliteditemicons",
			"display name":"hilitedItemIcons",
			"library":"oxt_builder",
			"type":"property",
			"syntax":[
				"get the hilitedItemIcons of <widget>",
				"set the hilitedItemIcons of <widget> to <icons>"
			],
			"display syntax":[
				"get the hilitedItemIcons of <i>widget</i>"
			],
			"associations":["com.livecode.widget.navbar"],
			"summary":"The highlighted-state icons for the navigation icons",
			"value":[{
				"name":"value",
				"type":"",
				"description":"A comma-delimited list of icon names."
			}],
			"description":"The names of the icons displayed by the navigation items when\nhighlighted.\n\nEach icon name must be one of the graphics supplied by the \"IconSVG\"\nlibrary.  You can get a list of available predefined path names by running\n`put iconNames()` in the Message Box.  See the \n<com.livecode.library.iconsvg|Icon SVG Library>\ndocumentation for handlers to manage user icon families.\n\nSetting the <hilitedItemIcons> can add items to the navigation bar.\nIf the new value of the <hilitedItemIcons> has more items than the\nnavigation bar, as many new navigation items as necessary are created\nand added to the end of the navigation bar, using a default\n<itemNames|name>, <itemLabels|label> and <itemIcons|normal icon>.\n\nIf the new value of the <hilitedItemIcons> has fewer items than the\nnavigation bar, the remaining navigation items have their\nhighlighted-state icons reset to the default icon.",
			"references":{
				"property":["itemIcons","itemLabels","itemNames"],
				"library":["com.livecode.library.iconsvg"]
			}
		},{
			"id":"oxt_builder-37",
			"name":"opaque",
			"display name":"opaque",
			"library":"oxt_builder",
			"type":"property",
			"syntax":[
				"get the opaque of <widget>",
				"set the opaque of <widget> to {true | false}"
			],
			"display syntax":[
				"get the opaque of <i>widget</i>"
			],
			"associations":["com.livecode.widget.navbar"],
			"summary":"Whether the background of the widget is filled",
			"description":"If the <opaque> property is `true`, the background of the navigation\nbar is filled with the <backColor>.  If it is `false` the background\nis transparent.",
			"references":{
				"property":["backColor"]
			}
		},{
			"id":"oxt_builder-38",
			"name":"editmode",
			"display name":"editMode",
			"library":"oxt_builder",
			"type":"property",
			"syntax":[
				"get the editMode of <widget>",
				"set the editMode of <widget> to {true | false}"
			],
			"display syntax":[
				"get the editMode of <i>widget</i>"
			],
			"associations":["com.livecode.widget.navbar"],
			"summary":"Whether the widget is in edit mode",
			"description":"**Note:** This feature is currently **experimental** and may change or\nbe removed in future versions.\n\nWhen the <editMode> is enabled, the navigation items' icons can be\nchanged by clicking on the outlined regions, and new items can be added\nwith the add button."
		},{
			"id":"oxt_builder-39",
			"name":"itemstyle",
			"display name":"itemStyle",
			"library":"oxt_builder",
			"type":"property",
			"syntax":[
				"get the itemStyle of <widget>",
				"set the itemStyle of <widget> to <style>"
			],
			"display syntax":[
				"get the itemStyle of <i>widget</i>"
			],
			"associations":["com.livecode.widget.navbar"],
			"summary":"The style with which navigation items are displayed",
			"value":[{
				"name":"value",
				"type":"",
				"description":"The display style\n- \"icons\": display icons only\n- \"text\": display names only\n- \"both\": display icons and names"
			}],
			"description":"The <itemStyle> property determines whether navigation items are\ndisplayed with icons, with labels, or with icons positioned below\nlabels.",
			"references":{
				"property":["hilitedItemIcons","itemIcons","itemLabels"]
			}
		},{
			"id":"oxt_builder-40",
			"name":"itemicons",
			"display name":"itemIcons",
			"library":"oxt_builder",
			"type":"property",
			"syntax":[
				"get the itemIcons of <widget>",
				"set the itemIcons of <widget> to <icons>"
			],
			"display syntax":[
				"get the itemIcons of <i>widget</i>"
			],
			"associations":["com.livecode.widget.navbar"],
			"summary":"The normal-state icons for the navigation items",
			"value":[{
				"name":"value",
				"type":"",
				"description":"A comma-delimited list of icon names."
			}],
			"description":"The names of the icons displayed by the navigation items when not\nhighlighted.\n\nEach icon name must be one of the graphics supplied by the \"IconSVG\"\nlibrary.  You can get a list of available predefined path names by running\n`put iconNames()` in the Message Box.  See the \n<com.livecode.library.iconsvg|Icon SVG Library>\ndocumentation for handlers to manage user icon families.\n\nSetting the <itemIcons> can add items to the navigation bar.  If the\nnew value of the <itemIcons> has more items than the navigation bar,\nas many new navigation items as necessary are created and added to the\nend of the navigation bar, using a default <itemNames|name>,\n<itemLabels|label> and <hilitedItemIcons|highlighted icon>.\n\nIf the new value of the <itemIcons> has fewer items than the\nnavigation bar, the remaining navigation items have their icons reset\nto the default icon.",
			"references":{
				"property":["hilitedItemIcons","itemLabels","itemNames"],
				"library":["com.livecode.library.iconsvg"]
			}
		},{
			"id":"oxt_builder-41",
			"name":"hiliteditem",
			"display name":"hilitedItem",
			"library":"oxt_builder",
			"type":"property",
			"syntax":[
				"get the hilitedItem of <widget>",
				"set the hilitedItem of <widget> to <itemNumber>"
			],
			"display syntax":[
				"get the hilitedItem of <i>widget</i>"
			],
			"associations":["com.livecode.widget.navbar"],
			"summary":"The index of the highlighted navigation item",
			"value":[{
				"name":"value",
				"type":"",
				"description":"The item number of the navigation item that is highlighted."
			}],
			"description":"The <hilitedItem> is the item number of the currently-highlighted navigation\nitem.  It can be used as a key into the <itemArray>.\n\nSetting 0 will cause nothing to be highlighted.",
			"references":{
				"property":["itemArray"]
			}
		},{
			"id":"oxt_builder-42",
			"name":"itemlabels",
			"display name":"itemLabels",
			"library":"oxt_builder",
			"type":"property",
			"syntax":[
				"get the itemLabels of <widget>",
				"set the itemLabels of <widget> to <labels>"
			],
			"display syntax":[
				"get the itemLabels of <i>widget</i>"
			],
			"associations":["com.livecode.widget.navbar"],
			"summary":"The labels of the navigation items",
			"value":[{
				"name":"value",
				"type":"",
				"description":"A comma-delimited list of labels."
			}],
			"description":"The display labels for the navigation items of the widget.\n\nSetting the <itemLabels> can add items to the navigation bar.  If the\nnew value of the <itemLabels> has more items than the navigation bar,\nas many new navigation items as necessary are created and added to the\nend of the navigation bar, using a default <itemNames|name>,\n<itemIcons|icon> and <hilitedItemIcons|highlighted icon>.\n\nIf the new value of the <itemLabels> has fewer items than the\nnavigation bar, the remaining navigation items have their labels reset\nto the default icon.",
			"references":{
				"property":["hilitedItemIcons","itemIcons","itemNames"]
			}
		},{
			"id":"oxt_builder-43",
			"name":"hilitecolor",
			"display name":"hiliteColor",
			"library":"oxt_builder",
			"type":"property",
			"syntax":[
				"get the hiliteColor of <widget>",
				"set the hiliteColor of <widget> to <color>"
			],
			"display syntax":[
				"get the hiliteColor of <i>widget</i>"
			],
			"associations":["com.livecode.widget.navbar"],
			"summary":"The color of the highlighted navigation item",
			"description":"The <hiliteColor> is used to draw the icon and/or label of the\nnavigation item that is <hilitedItemName|currently highlighted>.",
			"references":{
				"property":["hilitedItemName"]
			}
		},{
			"id":"oxt_builder-44",
			"name":"showborder",
			"display name":"showBorder",
			"library":"oxt_builder",
			"type":"property",
			"syntax":[
				"get the showBorder of <widget>",
				"set the showBorder of <widget> to {true | false}"
			],
			"display syntax":[
				"get the showBorder of <i>widget</i>"
			],
			"associations":["com.livecode.widget.navbar"],
			"summary":"Whether there is a dividing line at the top of the widget",
			"description":"When the <showBorder> property is `true`, the navigation bar has a\ndividing line along its top edge.",
			"references":{
				"property":["borderColor"]
			}
		},{
			"id":"oxt_builder-45",
			"name":"itemarray",
			"display name":"itemArray",
			"library":"oxt_builder",
			"type":"property",
			"syntax":[
				"get the itemArray of <widget>",
				"set the itemArray of <widget> to <array>"
			],
			"display syntax":[
				"get the itemArray of <i>widget</i>"
			],
			"associations":["com.livecode.widget.navbar"],
			"summary":"The full navigation item data.",
			"value":[{
				"name":"value",
				"type":"",
				"description":"An array containing all the navigation data."
			}],
			"description":"The <itemArray> is a numerically keyed array.  Each element of the\narray contains an array describing the name, label and icons of the\nnavigation item at that index.\n\nThe <itemArray> can be used to access and modify all of the navigation\ndata at once, rather than setting the <itemNames>, <itemLabels>,\n<itemIcons> and <hilitedItemIcons> individually.\n\nThe structure of the <itemArray> is:\n\n```\n{ key (integer): The index of the navigation item\n\tvalue (array): The array containing the data for the item at this index\n\t{ key : \"label\"\n\t\tvalue (string): The label of this item\n\t\tkey : \"name\"\n\t\tvalue (string): The name of this item\n\t\tkey : \"icon_name\"\n\t\tvalue (string) : The name of the icon to display when the item is not highlighted\n\t\tkey : \"hilited_icon_name\"\n\t\tvalue (string) : The name of the icon to display when the item is highlighted\n\t}\n}\n```\n\nAny individual keys (\"label\", \"icon_name\", \"hilited_icon_name\") missing when\nsetting the <itemArray> will be added, and set to their defaults - \"circle\" for\nthe icons, and \"New Item\" for the label.\n\n**Note:** When setting the <itemArray>, an error will be thrown if the\nnew value is not a numerically-keyed array.",
			"references":{
				"property":["hilitedItemIcons","itemIcons","itemLabels","itemNames"]
			}
		},{
			"id":"oxt_builder-46",
			"name":"forecolor",
			"display name":"foreColor",
			"library":"oxt_builder",
			"type":"property",
			"syntax":[
				"get the foreColor of <widget>",
				"set the foreColor of <widget> to <color>"
			],
			"display syntax":[
				"get the foreColor of <i>widget</i>"
			],
			"associations":["com.livecode.widget.navbar"],
			"summary":"The color of the navigation items that are not highlighted",
			"description":"The <foreColor> is used to draw the icons and/or labels of the\nnavigation items that are not <hilitedItemName|currently highlighted>.",
			"references":{
				"property":["hilitedItemName"]
			}
		},{
			"id":"oxt_builder-47",
			"name":"hiliteditemname",
			"display name":"hilitedItemName",
			"library":"oxt_builder",
			"type":"property",
			"syntax":[
				"get the hilitedItemName of <widget>",
				"set the hilitedItemName of <widget> to <pName>"
			],
			"display syntax":[
				"get the hilitedItemName of <i>widget</i>"
			],
			"associations":["com.livecode.widget.navbar"],
			"summary":"The name of the highlighted navigation item",
			"value":[{
				"name":"value",
				"type":"",
				"description":"The name of the navigation item that is highlighted."
			}],
			"description":"The <hilitedItemName> is the name of the currently-highlighted navigation\nitem.  If nothing is highlighted, the value is an empty string.",
			"references":{
				"property":["hilitedItem"]
			}
		},{
			"id":"oxt_builder-48",
			"name":"com.livecode.widget.navbar",
			"display name":"com.livecode.widget.navbar",
			"library":"oxt_builder",
			"type":"widget",
			"display syntax":[
				"com.livecode.widget.navbar"
			],
			"associations":["com.livecode.widget.navbar"],
			"summary":"The navigation bar widget is intended for use in mobile apps for\nswitching between cards, although there are many other possible uses.\n\nThe widget displays a row of navigation items.  Each of these has a\n<itemNames|name>, which identifies it.  Depending on the selected\n<itemStyle>, the items may display a <itemLabels|label>,\n<itemIcons|icon>, or both.  All of the navigation item data is\navailable as a single array via the <itemArray> property.\n\nAt any time, zero or one of the navigation items may be\n<hilitedItemName|highlighted>.  This is useful, for example, for\nindicating the current card.  When the user clicks one of the\nnavigation items, the widget sends a <hiliteChanged> message.",
			"description":"The navigation bar widget is intended for use in mobile apps for\nswitching between cards, although there are many other possible uses.\n\nThe widget displays a row of navigation items.  Each of these has a\n<itemNames|name>, which identifies it.  Depending on the selected\n<itemStyle>, the items may display a <itemLabels|label>,\n<itemIcons|icon>, or both.  All of the navigation item data is\navailable as a single array via the <itemArray> property.\n\nAt any time, zero or one of the navigation items may be\n<hilitedItemName|highlighted>.  This is useful, for example, for\nindicating the current card.  When the user clicks one of the\nnavigation items, the widget sends a <hiliteChanged> message.",
			"references":{
				"property":["hilitedItemName","itemArray","itemIcons","itemLabels","itemNames","itemStyle"],
				"message":["hiliteChanged"]
			}
		},{
			"id":"oxt_builder-49",
			"name":"backcolor",
			"display name":"backColor",
			"library":"oxt_builder",
			"type":"property",
			"syntax":[
				"get the backColor of <widget>",
				"set the backColor of <widget> to <color>"
			],
			"display syntax":[
				"get the backColor of <i>widget</i>"
			],
			"associations":["com.livecode.widget.navbar"],
			"summary":"The color of the navigation bar background",
			"description":"When the navigation bar has an <opaque> background, it is filled with\nthe <backColor>.",
			"references":{
				"property":["opaque"]
			}
		},{
			"id":"oxt_builder-50",
			"name":"desiredheight",
			"display name":"desiredHeight",
			"library":"oxt_builder",
			"type":"property",
			"syntax":[
				"get the desiredHeight of <widget>"
			],
			"display syntax":[
				"get the desiredHeight of <i>widget</i>"
			],
			"associations":["com.livecode.widget.navbar"],
			"summary":"The optimal height for the widget",
			"examples":[{
				"script":"create widget as \"com.livecode.widget.navbar\"\nset the height of it to the desiredHeight of it"
			}],
			"description":"**Note:** This feature is currently **experimental** and may change or\nbe removed in future versions.\n\nReturns the preferred height for widget, calculated from its current\nstate."
		},{
			"id":"oxt_builder-51",
			"name":"commandname",
			"display name":"CommandName",
			"library":"oxt_builder",
			"type":"expression",
			"syntax":[
				"the command name"
			],
			"display syntax":[
				"the command name"
			],
			"associations":["com.livecode.system"],
			"summary":"The command name",
			"examples":[{
				"script":"-- Program that only succeeds if it's run as the \"true\"\n-- command.\nvariable tCommand as String\nput the command name into tCommand\nif tCommand ends with \"true\" then\n\tquit with status 0\nelse\n\tquit with status 1\nend if"
			}],
			"description":"Evaluates to the name that was used to execute the program, possibly\nincluding path information.\n"
		},{
			"id":"oxt_builder-52",
			"name":"systemerrorcode",
			"display name":"SystemErrorCode",
			"library":"oxt_builder",
			"type":"expression",
			"syntax":[
				"the system error code"
			],
			"display syntax":[
				"the system error code"
			],
			"associations":["com.livecode.system"],
			"summary":"The system error code.",
			"description":"Evaluates to the current platform-dependent system error code.\n\n- On Windows, returns the result of `GetLastError()`.\n\n- On other platforms, returns the current value of `errno`.\n\n> **Note:** The system error code may be modified or cleared by any\n> syntax that interacts with the operating system (e.g. by performing\n> input or output).  You should check the system error code as soon as\n> possible after any platform operation that might fail.",
			"tags":["system"]
		},{
			"id":"oxt_builder-53",
			"name":"operatingsystem",
			"display name":"OperatingSystem",
			"library":"oxt_builder",
			"type":"expression",
			"syntax":[
				"the operating system"
			],
			"display syntax":[
				"the operating system"
			],
			"associations":["com.livecode.system"],
			"summary":"The operating system",
			"examples":[{
				"script":"if the operating system is \"linux\" then\n\t- Platform specific-code\nend if"
			}],
			"description":"Returns a string describing the operating system that LiveCode is\nrunning on.  The possible values are:\n\n* \"windows\" - 32-bit and 64-bit Windows\n* \"mac\" - Desktop OS X\n* \"ios\" - iOS (iPhone and iPad)\n* \"android\" - Android Linux devices\n* \"linux\" - All other Linux platforms",
			"tags":["system"]
		},{
			"id":"oxt_builder-54",
			"name":"resetsystemerror",
			"display name":"ResetSystemError",
			"library":"oxt_builder",
			"type":"statement",
			"syntax":[
				"reset system error"
			],
			"display syntax":[
				"reset system error"
			],
			"associations":["com.livecode.system"],
			"summary":"Clear the system error code.",
			"description":"Reset the system error code to its platform-dependent default (\"no\nerror\") value.",
			"tags":["system"]
		},{
			"id":"oxt_builder-55",
			"name":"commandarguments",
			"display name":"CommandArguments",
			"library":"oxt_builder",
			"type":"expression",
			"syntax":[
				"the command arguments"
			],
			"display syntax":[
				"the command arguments"
			],
			"associations":["com.livecode.system"],
			"summary":"The command arguments",
			"examples":[{
				"script":"-- Program that only succeeds if it's run as the \"true\"\n-- command.\nvariable tCommand as String\nput the command name into tCommand\nif tCommand ends with \"true\" then\n\tquit with status 0\nelse\n\tquit with status 1\nend if"
			}],
			"description":"Evaluates to a list of command-line arguments passed to the program.\nSome arguments may not be passed in if they are \"used up\" by the\nLiveCode run-time environment (for example, the LiveCode IDE will\ndetect and \"use\" the `-mmap` argument).\n\n> **Note:** No filename conversion is performed on command line\n> arguments, so some processing may be required before using a command\n> line argument with any of the file handling syntax provided by the\n> `com.livecode.file` module."
		},{
			"id":"oxt_builder-56",
			"name":"quitwithstatus",
			"display name":"QuitWithStatus",
			"library":"oxt_builder",
			"type":"statement",
			"syntax":[
				"quit [ with status <Status> ]"
			],
			"display syntax":[
				"quit [ with status <i>Status</i> ]"
			],
			"associations":["com.livecode.system"],
			"summary":"Quit the application",
			"examples":[{
				"script":"-- Quit, indicating that the application ran successfully (code 0)\nquit\n\n-- Quit, with a specific error code\nquit with status 42"
			}],
			"description":"Exit the program immediately and unconditionally, returning a status\nnumber to the operating system.  If no status is provided, the default\nvalue of 0 is used.",
			"tags":["system"]
		},{
			"id":"oxt_builder-57",
			"name":"architecture",
			"display name":"Architecture",
			"library":"oxt_builder",
			"type":"expression",
			"syntax":[
				"the architecture"
			],
			"display syntax":[
				"the architecture"
			],
			"associations":["com.livecode.system"],
			"summary":"The architecture",
			"examples":[{
				"script":"    if the architecture is \"x86_64\" then\n        -- Do something x86_64 specific\n    end if"
			}],
			"description":"Returns a string describing the instruction set architecture\nthat is being used by the machine LiveCode is running on.\nThe possible values are:\n\n* \"x86\" - 32-bit x86 builds\n* \"x86_64\" - 64-bit x86 builds\n* \"arm\" - 32-bit arm builds\n* \"arm64\" - 64-bit arm builds\n* \"js\" - Emscripten",
			"tags":["system"]
		},{
			"id":"oxt_builder-58",
			"name":"systemerrordescription",
			"display name":"SystemErrorDescription",
			"library":"oxt_builder",
			"type":"expression",
			"syntax":[
				"the system error message"
			],
			"display syntax":[
				"the system error message"
			],
			"associations":["com.livecode.system"],
			"summary":"The system error description.",
			"description":"Evaluates to a string describing the current platform-dependent system\nerror code.\n\n> **Note:** The system error code may be modified or cleared by any\n> syntax that interacts with the operating system (e.g. by performing\n> input or output).  You should check the system error code as soon as\n> possible after any platform operation that might fail.",
			"tags":["system"]
		},{
			"id":"oxt_builder-59",
			"name":"com.livecode.system",
			"display name":"com.livecode.system",
			"library":"oxt_builder",
			"type":"module",
			"display syntax":[
				"com.livecode.system"
			],
			"associations":["com.livecode.system"],
			"summary":"This library provides low-level system functionality for modular\nLiveCode programs.",
			"description":"This library provides low-level system functionality for modular\nLiveCode programs."
		},{
			"id":"oxt_builder-60",
			"name":"numbertonsnumber",
			"display name":"NumberToNSNumber",
			"library":"oxt_builder",
			"type":"handler",
			"syntax":[
				"NumberToNSNumber(<pNumber>)"
			],
			"display syntax":[
				"NumberToNSNumber(<i>pNumber</i>)"
			],
			"associations":["com.livecode.objc"],
			"summary":"Convert a Number into an Objective-C number",
			"parameters":[{
				"name":"pNumber",
				"type":"",
				"refparam":"false",
				"description":"The Number to convert"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"A Objective-C object of type NSNumber\n\nDescription\nUse <NumberToNSNumber> to convert a variable of type Number to an Objective-C\nnumber object (NSNumber)."
			}],
			"description":"Convert a Number into an Objective-C number"
		},{
			"id":"oxt_builder-61",
			"name":"listfromnsarray",
			"display name":"ListFromNSArray",
			"library":"oxt_builder",
			"type":"handler",
			"syntax":[
				"ListFromNSArray(<pObjcArray>)"
			],
			"display syntax":[
				"ListFromNSArray(<i>pObjcArray</i>)"
			],
			"associations":["com.livecode.objc"],
			"summary":"Convert a Objective-C array into a List",
			"parameters":[{
				"name":"pObjcNumber",
				"type":"",
				"refparam":"false",
				"description":"The NSArray to convert"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"A Number value\n\nDescription\nUse <ListFromNSArray> to convert an Objective-C array object (NSArray) to\na variable of type List."
			}],
			"description":"Convert a Objective-C array into a List"
		},{
			"id":"oxt_builder-62",
			"name":"createobjcinformaldelegatewithcontext",
			"display name":"CreateObjcInformalDelegateWithContext",
			"library":"oxt_builder",
			"type":"handler",
			"syntax":[
				"CreateObjcInformalDelegateWithContext(<pProtocol>,<pHandlerMapping>,<pContext>)"
			],
			"display syntax":[
				"CreateObjcInformalDelegateWithContext(<i>pProtocol</i>,<i>pHandlerMapping</i>,<i>pContext</i>)"
			],
			"associations":["com.livecode.objc"],
			"summary":"Create an Objective-C object with LCB implementations of methods of an informal protocol.",
			"parameters":[{
				"name":"pProtocol",
				"type":"",
				"refparam":"false",
				"description":"A list of foreign handlers which bind to protocol methods"
			},{
				"name":"pHandlerMapping",
				"type":"",
				"refparam":"false",
				"description":"A mapping from the protocol's selector names to LCB handlers"
			}],
			"examples":[{
				"script":"foreign handler Objc_NSPortMessageGetMsgId(in pMessage as ObjcId) returns UInt32 \\\n    binds to \"objc:NSPort.-msgid\"\n\nhandler HandlePortMessageCallback(in pPortIndex as Integer, in pMessage as ObjcId) returns nothing\n    post \"portMessage\" with [mPortList[pPortIndex][\"name\"], \\\n                             Objc_NSPortMessageGetMsgId(pMessage)]\nend handler\n\nforeign handler Objc_NSPortDelegateHandlePortMessage(in pTarget as ObjcId, in pPortMessage as ObjcId) returns nothing \\\n    binds to \"objc:.-handlePortMessage:\"\n\npublic handler GetNSPortDelegate(in pPortIndex as Integer)\n    return CreateObjcInformalDelegateWithContext([Objc_NSPortDelegateHandlePortMessage], \\\n                                                 { \"handlePortMessage:\": \\\n                                                   HandlePortMessageCalback }, \\\n                                                 pPortIndex)\nend handler"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"An Objective-C object which calls the appropriate LCB handler\non receiving any of the specified selectors. "
			}],
			"description":"Use the <CreateObjcInformalDelegateWithContext> handler to create instances of \nObjective-C delegate classes with LCB implementations of protocol \nmethods, when the Protocol object cannot be found at runtime. This \noccurs for example when all of the protocol methods are optional. \n\nInstead of a protocol name (as with <CreateObjcDelegateWithContext>), \nthe <pProtocol> argument of <CreateObjcInformalDelegateWithContext> must \nbe a proper list of foreign handlers for each of the methods of the \nprotocol for which LCB callbacks are provided in the <pHandlerMapping> \narray.\n\nOnce created an informal delegate can be set in the usual way on an \ninstance of the appropriate class (by binding to `-setDelegate:`), \ntypically so that callbacks triggered by user interaction with a widget \ncan be handled in LCB.\n\nIf no context is required to be passed as a parameter to the callback,\nuse <CreateObjcInformalDelegate>.\n\nIf the protocol can be resolved at runtime, it is generally easier to \nuse the <CreateObjcDelegateWithContext> handler.",
			"references":{
				"handler":["CreateObjcDelegate","CreateObjcDelegateWithContext","CreateObjcInformalDelegate"]
			}
		},{
			"id":"oxt_builder-63",
			"name":"createobjcdelegate",
			"display name":"CreateObjcDelegate",
			"library":"oxt_builder",
			"type":"handler",
			"syntax":[
				"CreateObjcDelegate(<pProtocol>,<pHandlerMapping>)"
			],
			"display syntax":[
				"CreateObjcDelegate(<i>pProtocol</i>,<i>pHandlerMapping</i>)"
			],
			"associations":["com.livecode.objc"],
			"summary":"Create an Objective-C object with LCB implementations of methods of a protocol.",
			"parameters":[{
				"name":"pProtocol",
				"type":"",
				"refparam":"false",
				"description":"The name of the protocol"
			},{
				"name":"pHandlerMapping",
				"type":"",
				"refparam":"false",
				"description":"A mapping from the protocol's selector names to LCB handlers"
			}],
			"examples":[{
				"script":"handler ControlIsValidObjectCallback(in pControl as ObjcId, in pObject as ObjcId) returns CSChar\n    return 1\nend handler\n\npublic handler GetNSControlTextEditingDelegate() returns ObjcObject\n    return CreateObjcDelegate(\"NSControlTextEditingDelegate\", \\\n                              { \"control:isValidObject:\": \\\n                                ControlIsValidObjectCallback })\nend handler"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"An Objective-C object which calls the appropriate LCB handler\non receiving any of the specified selectors. "
			}],
			"description":"Use the <CreateObjcDelegate> handler to create instances of Objective-C \ndelegate classes with LCB implementations of protocol methods. Once \ncreated these can be set in the usual way on an instance of the \nappropriate class (by binding to `-setDelegate:`), typically so that \ncallbacks triggered by user interaction with a widget can be handled in\nLCB.\n\nIf any context is required to be passed as a parameter to the callback,\nuse <CreateObjcDelegateWithContext>.\n\nSome protocols consist of purely optional methods. In this case the \ninformation about the protocol's methods are not available from the     \nobjective-c runtime API. In this situation <CreateObjcInformalDelegate> \nshould be used instead.",
			"references":{
				"handler":["CreateObjcDelegateWithContext","CreateObjcInformalDelegate","CreateObjcInformalDelegateWithContext"]
			}
		},{
			"id":"oxt_builder-64",
			"name":"arrayfromnsdictionary",
			"display name":"ArrayFromNSDictionary",
			"library":"oxt_builder",
			"type":"handler",
			"syntax":[
				"ArrayFromNSDictionary(<pObjcArray>)"
			],
			"display syntax":[
				"ArrayFromNSDictionary(<i>pObjcArray</i>)"
			],
			"associations":["com.livecode.objc"],
			"summary":"Convert a Objective-C dictionary into a Array",
			"parameters":[{
				"name":"pObjcNumber",
				"type":"",
				"refparam":"false",
				"description":"The NSDictionary to convert"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"An Array value\n\nDescription\nUse <ArrayFromNSDictionary> to convert an Objective-C dictionary object (NSDictionary) to\na variable of type Array."
			}],
			"description":"Convert a Objective-C dictionary into a Array"
		},{
			"id":"oxt_builder-65",
			"name":"stringfromnsstring",
			"display name":"StringFromNSString",
			"library":"oxt_builder",
			"type":"handler",
			"syntax":[
				"StringFromNSString(<pObjcString>)"
			],
			"display syntax":[
				"StringFromNSString(<i>pObjcString</i>)"
			],
			"associations":["com.livecode.objc"],
			"summary":"Convert a Objective-C string into a String",
			"parameters":[{
				"name":"pObjcString",
				"type":"",
				"refparam":"false",
				"description":"The NSString to convert"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"A String value\n\nDescription\nUse <StringFromNSString> to convert an Objective-C string object (NSString) to\na variable of type String."
			}],
			"description":"Convert a Objective-C string into a String"
		},{
			"id":"oxt_builder-66",
			"name":"createobjcblockpointerfromhandler",
			"display name":"CreateObjcBlockPointerFromHandler",
			"library":"oxt_builder",
			"type":"handler",
			"syntax":[
				"CreateObjcBlockPointerFromHandler(<pHandler>,<rBlockPtr>)"
			],
			"display syntax":[
				"CreateObjcBlockPointerFromHandler(<i>pHandler</i>,<i>rBlockPtr</i>)"
			],
			"associations":["com.livecode.objc"],
			"summary":"Create an Objective-C block pointer that wraps an LCB handler.",
			"parameters":[{
				"name":"pHandler",
				"type":"",
				"refparam":"false",
				"description":"The handler the block pointer should wrap."
			},{
				"name":"rBlockPtr",
				"type":"",
				"refparam":"false",
				"description":"The variable into which the block pointer should be returned."
			}],
			"examples":[{
				"script":"private variable sRequestPermissionsCompletionHandler as optional ObjcBlockPointer\nprivate variable sTarget as ScriptObject\n\npublic handler AudioLibraryInitialize() returns Boolean\n\tif not CreateObjcBlockPointerFromHandler(RequestPermissionsCompletionHandler, sRequestPermissionsCompletionHandler) then\n\t\tput nothing into sRequestPermissionsCompletionHandler\n\t\treturn false\n\tend if\n\tput the caller into sTarget\n\treturn true\nend handler\n\nprivate foreign handler ObjC_AVCaptureDeviceRequestAccessForMediaType(in pMediaType as ObjcId, in pCompletionHandler as ObjcBlockPointer) \\\n\treturns nothing \\\n\tbinds to \"objc:AVCaptureDevice.+requestAccessForMediaType:completionHandler:\"\n\npublic handler AudioLibraryRequestPermissions()\n\tunsafe\n\t\tObjC_AVCaptureDeviceRequestAccessForMediaType(StringToNSString(\"soun\"), sRequestPermissionsCompletionHandler)\n\tend unsafe\nend handler\n\npublic handler RequestPermissionsCompletionHandler(in pBlock as ObjcBlockPointer, in pGranted as CBool)\n\tpost \"AudioLibraryRequestPermissionsCallback\" to sTarget with [pGranted]\nend handler"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"True if the block pointer was successfully created, false otherwise."
			}],
			"description":"Use the <CreateObjcBlockPointerFromHandler> handler to create a pointer to an\nObjective-C block that wraps an LCB handler. The block pointer can be used in\ncalls to Objective-C foreign functions that expect a block as a parameter.\n\nThe wrapped handler will be called whenever the block is invoked, with the first\nparameter of its signature being the block pointer. The remaining parameters\nshould match those of the Objective-C block.\n\nThe lifetime of a created `ObjcBlockPointer` is not automatically managed. When\nsuch a value has no more references to it and it is no longer going to be used,\n<DeleteObjcBlockPointer> should be used to free the resources used by it.",
			"references":{
				"handler":["DeleteObjcBlockPointer"]
			}
		},{
			"id":"oxt_builder-67",
			"name":"createobjcdelegatewithcontext",
			"display name":"CreateObjcDelegateWithContext",
			"library":"oxt_builder",
			"type":"handler",
			"syntax":[
				"CreateObjcDelegateWithContext(<pProtocol>,<pHandlerMapping>,<pContext>)"
			],
			"display syntax":[
				"CreateObjcDelegateWithContext(<i>pProtocol</i>,<i>pHandlerMapping</i>,<i>pContext</i>)"
			],
			"associations":["com.livecode.objc"],
			"summary":"Create an Objective-C object with LCB implementations of methods of a protocol.",
			"parameters":[{
				"name":"pProtocol",
				"type":"",
				"refparam":"false",
				"description":"The name of the protocol"
			},{
				"name":"pHandlerMapping",
				"type":"",
				"refparam":"false",
				"description":"A mapping from the protocol's selector names to LCB handlers"
			},{
				"name":"pContext",
				"type":"",
				"refparam":"false",
				"description":"Any context required in the callback."
			}],
			"examples":[{
				"script":"handler NumberOfItemsInMenuCallback(in pContext as String, in pMenu as ObjcId) returns CLong\n    -- pContext is the tag for this menu\n    return the number of elements in mMenuArray[pContext]\nend handler\n\npublic handler GetNSMenuDelegate(in pMenuTag as String) returns ObjcObject\n    return CreateObjcDelegateWithContext(\"NSMenuDelegate\", \\\n                                           { \"numberOfItemsInMenu:\": \\\n                                           NumberOfItemsInMenuCallback }, \\\n                                           pMenuTag)\nend handler"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"An Objective-C object which calls the appropriate LCB handler\non receiving any of the specified selectors. "
			}],
			"description":"Use the <CreateObjcDelegateWithContext> handler to create instances of \nObjective-C delegate classes with LCB implementations of protocol \nmethods. Once created these can be set in the usual way on an instance \nof the appropriate class (by binding to `-setDelegate:`), typically so \nthat callbacks triggered by user interaction with a widget can be\nhandled in LCB.\n\nIf no context is required to be passed as a parameter to the callback,\nuse <CreateObjcDelegate>.\n\nSome protocols consist of purely optional methods. In this case the \ninformation about the protocol's methods are not available from the     \nobjective-c runtime API. In this situation \n<CreateObjcInformalDelegateWithContext> should be used instead.",
			"references":{
				"handler":["CreateObjcDelegate","CreateObjcInformalDelegate","CreateObjcInformalDelegateWithContext"]
			}
		},{
			"id":"oxt_builder-68",
			"name":"datatonsdata",
			"display name":"DataToNSData",
			"library":"oxt_builder",
			"type":"handler",
			"syntax":[
				"DataToNSData(<pData>)"
			],
			"display syntax":[
				"DataToNSData(<i>pData</i>)"
			],
			"associations":["com.livecode.objc"],
			"summary":"Convert a Data into an Objective-C data",
			"parameters":[{
				"name":"pData",
				"type":"",
				"refparam":"false",
				"description":"The Data to convert"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"A Objective-C object of type NSData\n\nDescription\nUse <DataToNSData> to convert a variable of type Data to an Objective-C\ndata object (NSData)."
			}],
			"description":"Convert a Data into an Objective-C data"
		},{
			"id":"oxt_builder-69",
			"name":"stringtonsstring",
			"display name":"StringToNSString",
			"library":"oxt_builder",
			"type":"handler",
			"syntax":[
				"StringToNSString(<pString>)"
			],
			"display syntax":[
				"StringToNSString(<i>pString</i>)"
			],
			"associations":["com.livecode.objc"],
			"summary":"Convert a String into an Objective-C string",
			"parameters":[{
				"name":"pString",
				"type":"",
				"refparam":"false",
				"description":"The String to convert"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"A Objective-C object of type NSString\n\nDescription\nUse <StringToNSString> to convert a variable of type String to an Objective-C\nstring object (NSString)."
			}],
			"description":"Convert a String into an Objective-C string"
		},{
			"id":"oxt_builder-70",
			"name":"listtonsarray",
			"display name":"ListToNSArray",
			"library":"oxt_builder",
			"type":"handler",
			"syntax":[
				"ListToNSArray(<pList>)"
			],
			"display syntax":[
				"ListToNSArray(<i>pList</i>)"
			],
			"associations":["com.livecode.objc"],
			"summary":"Convert a List into an Objective-C array",
			"parameters":[{
				"name":"pNumber",
				"type":"",
				"refparam":"false",
				"description":"The List to convert"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"A Objective-C object of type NSArray\n\nDescription\nUse <ListToNSArray> to convert a variable of type List to an Objective-C\narray object (NSArray)."
			}],
			"description":"Convert a List into an Objective-C array"
		},{
			"id":"oxt_builder-71",
			"name":"pointerfromobjcobject",
			"display name":"PointerFromObjcObject",
			"library":"oxt_builder",
			"type":"handler",
			"syntax":[
				"PointerFromObjcObject(<pObjcObject>)"
			],
			"display syntax":[
				"PointerFromObjcObject(<i>pObjcObject</i>)"
			],
			"associations":["com.livecode.objc"],
			"summary":"Convert an ObjcObject into a Pointer",
			"parameters":[{
				"name":"pObjcObject",
				"type":"",
				"refparam":"false",
				"description":"The ObjcObject to convert"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"The Pointer wrapped by the ObjcObject"
			}],
			"description":"Use <PointerFromObjcObject> to convert a variable of type ObjcObject to one of\ntype Pointer."
		},{
			"id":"oxt_builder-72",
			"name":"pointertoobjcobject",
			"display name":"PointerToObjcObject",
			"library":"oxt_builder",
			"type":"handler",
			"syntax":[
				"PointerToObjcObject(<pPointer>)"
			],
			"display syntax":[
				"PointerToObjcObject(<i>pPointer</i>)"
			],
			"associations":["com.livecode.objc"],
			"summary":"Convert a Pointer into an ObjcObject",
			"parameters":[{
				"name":"pPointer",
				"type":"",
				"refparam":"false",
				"description":"The Pointer to convert"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"An ObjcObject wrapping the Pointer"
			}],
			"description":"Use <PointerToObjcObject> to convert a variable of type Pointer to one of type\nObjcObject."
		},{
			"id":"oxt_builder-73",
			"name":"arraytonsdictionary",
			"display name":"ArrayToNSDictionary",
			"library":"oxt_builder",
			"type":"handler",
			"syntax":[
				"ArrayToNSDictionary(<pArray>)"
			],
			"display syntax":[
				"ArrayToNSDictionary(<i>pArray</i>)"
			],
			"associations":["com.livecode.objc"],
			"summary":"Convert an Array into an Objective-C dictionary",
			"parameters":[{
				"name":"pNumber",
				"type":"",
				"refparam":"false",
				"description":"The Array to convert"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"A Objective-C object of type NSDictionary\n\nDescription\nUse <ArrayToNSDictionary> to convert a variable of type Array to an Objective-C\ndictionary object (NSDictionary)."
			}],
			"description":"Convert an Array into an Objective-C dictionary"
		},{
			"id":"oxt_builder-74",
			"name":"createobjcinformaldelegate",
			"display name":"CreateObjcInformalDelegate",
			"library":"oxt_builder",
			"type":"handler",
			"syntax":[
				"CreateObjcInformalDelegate(<pProtocol>,<pHandlerMapping>)"
			],
			"display syntax":[
				"CreateObjcInformalDelegate(<i>pProtocol</i>,<i>pHandlerMapping</i>)"
			],
			"associations":["com.livecode.objc"],
			"summary":"Create an Objective-C object with LCB implementations of methods of an informal protocol.",
			"parameters":[{
				"name":"pProtocol",
				"type":"",
				"refparam":"false",
				"description":"A list of foreign handlers which bind to protocol methods"
			},{
				"name":"pHandlerMapping",
				"type":"",
				"refparam":"false",
				"description":"A mapping from the protocol's selector names to LCB handlers"
			}],
			"examples":[{
				"script":"foreign handler Objc_NSPortMessageGetMsgId(in pMessage as ObjcId) returns UInt32 \\\n    binds to \"objc:NSPort.-msgid\"\n\nhandler HandlePortMessageCallback(in pMessage as ObjcId) returns nothing\n    post \"portMessage\" with [Objc_NSPortMessageGetMsgId(pMessage)]\nend handler\n\nforeign handler Objc_NSPortDelegateHandlePortMessage(in pTarget as ObjcId, in pPortMessage as ObjcId) returns nothing \\\n    binds to \"objc:.-handlePortMessage:\"\n\npublic handler GetNSPortDelegate()\n    return CreateObjcInformalDelegate([Objc_NSPortDelegateHandlePortMessage], \\\n                                      { \"handlePortMessage:\": \\\n                                        HandlePortMessageCalback })\nend handler"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"An Objective-C object which calls the appropriate LCB handler\non receiving any of the specified selectors. "
			}],
			"description":"Use the <CreateObjcInformalDelegate> handler to create instances of \nObjective-C delegate classes with LCB implementations of protocol \nmethods, when the Protocol object cannot be found at runtime. This \noccurs for example when all of the protocol methods are optional. \n\nInstead of a protocol name (as with <CreateObjcDelegate>), the \n<pProtocol> argument of <CreateObjcInformalDelegate> must be a proper \nlist of foreign handlers for each of the methods of the protocol for \nwhich LCB callbacks are provided in the <pHandlerMapping> array.\n\nOnce created an informal delegate can be set in the usual way on an \ninstance of the appropriate class (by binding to `-setDelegate:`), \ntypically so that callbacks triggered by user interaction with a widget \ncan be handled in LCB.\n\nIf any context is required to be passed as a parameter to the callback,\nuse <CreateObjcInformalDelegateWithContext>.\n\nIf the protocol can be resolved at runtime, it is generally easier to \nuse the <CreateObjcDelegate> handler.",
			"references":{
				"handler":["CreateObjcDelegate","CreateObjcDelegateWithContext","CreateObjcInformalDelegateWithContext"]
			}
		},{
			"id":"oxt_builder-75",
			"name":"datafromnsdata",
			"display name":"DataFromNSData",
			"library":"oxt_builder",
			"type":"handler",
			"syntax":[
				"DataFromNSData(<pObjcData>)"
			],
			"display syntax":[
				"DataFromNSData(<i>pObjcData</i>)"
			],
			"associations":["com.livecode.objc"],
			"summary":"Convert a Objective-C data into a Data",
			"parameters":[{
				"name":"pObjcData",
				"type":"",
				"refparam":"false",
				"description":"The NSData to convert"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"A Data value\n\nDescription\nUse <DataFromNSData> to convert an Objective-C data object (NSData) to\na variable of type Data.\n"
			}],
			"description":"Convert a Objective-C data into a Data"
		},{
			"id":"oxt_builder-76",
			"name":"com.livecode.objc",
			"display name":"com.livecode.objc",
			"library":"oxt_builder",
			"type":"module",
			"display syntax":[
				"com.livecode.objc"
			],
			"associations":["com.livecode.objc"],
			"summary":"This module provides utility handlers for converting to and from Obj-C types.",
			"description":"This module provides utility handlers for converting to and from Obj-C types."
		},{
			"id":"oxt_builder-77",
			"name":"numberfromnsnumber",
			"display name":"NumberFromNSNumber",
			"library":"oxt_builder",
			"type":"handler",
			"syntax":[
				"NumberFromNSNumber(<pObjcNumber>)"
			],
			"display syntax":[
				"NumberFromNSNumber(<i>pObjcNumber</i>)"
			],
			"associations":["com.livecode.objc"],
			"summary":"Convert a Objective-C number into a Number",
			"parameters":[{
				"name":"pObjcNumber",
				"type":"",
				"refparam":"false",
				"description":"The NSNumber to convert"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"A Number value\n\nDescription\nUse <NumberFromNSNumber> to convert an Objective-C number object (NSNumber) to\na variable of type Number."
			}],
			"description":"Convert a Objective-C number into a Number"
		},{
			"id":"oxt_builder-78",
			"name":"deleteobjcblockpointer",
			"display name":"DeleteObjcBlockPointer",
			"library":"oxt_builder",
			"type":"handler",
			"syntax":[
				"DeleteObjcBlockPointer(<pBlockPointer>)"
			],
			"display syntax":[
				"DeleteObjcBlockPointer(<i>pBlockPointer</i>)"
			],
			"associations":["com.livecode.objc"],
			"summary":"Delete an Objective-C block pointer.",
			"parameters":[{
				"name":"pBlockPointer",
				"type":"",
				"refparam":"false",
				"description":"An Objective-C block pointer created with\n<CreateObjcBlockPointerFromHandler>"
			}],
			"examples":[{
				"script":"public handler AudioLibraryFinalize()\n\tif sRequestPermissionsCompletionHandler is not nothing then\n\t\tDeleteObjcBlockPointer(sRequestPermissionsCompletionHandler)\n\t\tput nothing into sRequestPermissionsCompletionHandler\n\tend if\nend handler"
			}],
			"description":"Use the <DeleteObjcBlockPointer> handler to delete an Objective-C block pointer\ncreated with <CreateObjcBlockPointerFromHandler>",
			"references":{
				"handler":["CreateObjcBlockPointerFromHandler"]
			}
		},{
			"id":"oxt_builder-79",
			"name":"flipped",
			"display name":"flipped",
			"library":"oxt_builder",
			"type":"property",
			"syntax":[
				"set the flipped of <widget> to {true|false}\nget the flipped of <widget>"
			],
			"display syntax":[
				"set the flipped of <i>widget</i> to {true|false}"
			],
			"associations":["com.livecode.widget.svgpath"],
			"summary":"`true` if the SVG path is flipped top-to-bottom; `false` otherwise",
			"description":"When <flipped> is set to `true`, the SVG path is drawn upside down."
		},{
			"id":"oxt_builder-80",
			"name":"iconpresetname",
			"display name":"iconPresetName",
			"library":"oxt_builder",
			"type":"property",
			"syntax":[
				"set the iconPresetName of <widget> to <pIconName>\nget the iconPresetName of <widget>"
			],
			"display syntax":[
				"set the iconPresetName of <i>widget</i> to <i>pIconName</i>"
			],
			"associations":["com.livecode.widget.svgpath"],
			"summary":"A predefined SVG icon path names.",
			"parameters":[{
				"name":"pIconName",
				"type":"",
				"refparam":"false",
				"description":"The name of the icon to display."
			}],
			"examples":[{
				"script":"set the iconPresetName of widget \"SVG Icon\" to \"thumbs up\""
			}],
			"description":"Use the <iconPresetName> property to set the icon of the widget to one of the\npredefined graphics provided by the \"IconSVG\" library.\n\nYou can get a list of available predefined path names by running\n`put iconNames()` in the Message Box."
		},{
			"id":"oxt_builder-81",
			"name":"iconname",
			"display name":"iconName",
			"library":"oxt_builder",
			"type":"property",
			"syntax":[
				"get the iconName of <widget>"
			],
			"display syntax":[
				"get the iconName of <i>widget</i>"
			],
			"associations":["com.livecode.widget.svgpath"],
			"summary":"The name of the currently chosen icon.",
			"examples":[{
				"script":"put the iconName of widget \"SVG Icon\""
			}],
			"description":"use the <IconName> to get the name of the currently chosen icon.\n\nYou can get a list of available predefined path names by running\n`put iconNames()` in the Message Box."
		},{
			"id":"oxt_builder-82",
			"name":"iconpath",
			"display name":"iconPath",
			"library":"oxt_builder",
			"type":"property",
			"syntax":[
				"set the iconPath of <widget> to <pSVGPath>\nget the iconPath of <widget>"
			],
			"display syntax":[
				"set the iconPath of <i>widget</i> to <i>pSVGPath</i>"
			],
			"associations":["com.livecode.widget.svgpath"],
			"summary":"The path data displayed by the SVG path widget.",
			"parameters":[{
				"name":"pSVGPath",
				"type":"",
				"refparam":"false",
				"description":"A string containing valid SVG path syntax."
			}],
			"examples":[{
				"script":"-- Create a filled triangle\nset the iconPath of widget \"SVG Icon\" to \"M150 0 L75 200 L225 200 Z\""
			}],
			"description":"The SVG path string to be displayed by the SVG path widget.\n\nSee https://www.w3.org/TR/SVG/paths.html#PathData for the SVG path data\nspecification."
		},{
			"id":"oxt_builder-83",
			"name":"scaledwidth",
			"display name":"scaledWidth",
			"library":"oxt_builder",
			"type":"property",
			"syntax":[
				"get the scaledWidth of <widget>"
			],
			"display syntax":[
				"get the scaledWidth of <i>widget</i>"
			],
			"associations":["com.livecode.widget.svgpath"],
			"summary":"The width of the bounding rect of the SVG path, in fractional pixels.",
			"description":"If the <maintainAspectRatio> of the SVG path is `true`, then the <scaledWidth>\nof the object will return the width of the bounding rect of the SVG path.\nOtherwise, it will return the width of the widget.",
			"references":{
				"property":["scaledHeight","maintainAspectRatio"]
			}
		},{
			"id":"oxt_builder-84",
			"name":"angle",
			"display name":"angle",
			"library":"oxt_builder",
			"type":"property",
			"syntax":[
				"set the angle of <widget> to <pAngle>\nget the angle of <widget>"
			],
			"display syntax":[
				"set the angle of <i>widget</i> to <i>pAngle</i>"
			],
			"associations":["com.livecode.widget.svgpath"],
			"summary":"The angle of rotation of the SVG path, in degrees clockwise.",
			"description":"The <angle> property controls the angle of rotation of for the SVG path\naround the centre of the path's bounding box.  The rotation is in clockwise\ndegrees."
		},{
			"id":"oxt_builder-85",
			"name":"highlight",
			"display name":"highlight",
			"library":"oxt_builder",
			"type":"property",
			"syntax":[
				"set the highlight of <widget> to {true|false}\nget the highlight of <widget>"
			],
			"display syntax":[
				"set the highlight of <i>widget</i> to {true|false}"
			],
			"associations":["com.livecode.widget.svgpath"],
			"summary":"`true` if the SVG path is highlighted; `false` otherwise",
			"description":"Use the `highlight` property to test or control whether the SVG path is\ndisplayed as highlighted or not."
		},{
			"id":"oxt_builder-86",
			"name":"scaledheight",
			"display name":"scaledHeight",
			"library":"oxt_builder",
			"type":"property",
			"syntax":[
				"get the scaledHeight of <widget>"
			],
			"display syntax":[
				"get the scaledHeight of <i>widget</i>"
			],
			"associations":["com.livecode.widget.svgpath"],
			"summary":"The height of the bounding rect of the SVG path, in fractional pixels.",
			"description":"If the <maintainAspectRatio> of the SVG path is `true`, then the <scaledHeight>\nof the object will return the height of the bounding rect of the SVG path.\nOtherwise, it will return the height of the widget.",
			"references":{
				"property":["scaledWidth","maintainAspectRatio"]
			}
		},{
			"id":"oxt_builder-87",
			"name":"maintainaspectratio",
			"display name":"maintainAspectRatio",
			"library":"oxt_builder",
			"type":"property",
			"syntax":[
				"set the maintainAspectRatio of <widget> to {true|false}\nget the maintainAspectRatio of <widget>"
			],
			"display syntax":[
				"set the maintainAspectRatio of <i>widget</i> to {true|false}"
			],
			"associations":["com.livecode.widget.svgpath"],
			"summary":"Whether the SVG path maintains its aspect ratio when resized.",
			"description":"If the <maintainAspectRatio> of the SVG path is `true`, the icon will be its\nmaximum size within its bounds while maintaining the original ratio of width\nto height. If `false`, it will stretch to fit the extent of its bounds."
		},{
			"id":"oxt_builder-88",
			"name":"fillrule",
			"display name":"fillRule",
			"library":"oxt_builder",
			"type":"property",
			"syntax":[
				"set the fillRule of <widget> to <pRule>\nget the fillRule of <widget>"
			],
			"display syntax":[
				"set the fillRule of <i>widget</i> to <i>pRule</i>"
			],
			"associations":["com.livecode.widget.svgpath"],
			"summary":"The fill rule to be used when rendering the SVG path.",
			"parameters":[{
				"name":"pRule",
				"type":"",
				"refparam":"false",
				"description":"The fill rule to be used.\n- \"non-zero\": Fill regions encircled at least once by the path.\n- \"even odd\": Fill regions encircled an even number of times by the path."
			}],
			"description":"Use the <fillRule> property to set the fill rule to be used for the widget.\nYou may need to adjust it to ensure that paths that cross themselves, and paths\nthat are made up of overlapping subpaths, are filled correctly.\n\nThe areas enclosed by the path are each filled or not filled depending on the\nfill rule used and the number of times the path loops around them.  When the\npath goes around a region clockwise, it adds 1 to number of encirclements.\nWhen it goes around a region anticlockwise, it subtracs 1 from the number of\nencirclements.\n\nSee https://www.w3.org/TR/SVG/painting.html#FillRuleProperty for examples of\nthe \"non-zero\" and \"even odd\" fill rules.\n"
		},{
			"id":"oxt_builder-89",
			"name":"com.livecode.widget.svgpath",
			"display name":"com.livecode.widget.svgpath",
			"library":"oxt_builder",
			"type":"widget",
			"display syntax":[
				"com.livecode.widget.svgpath"
			],
			"associations":["com.livecode.widget.svgpath"],
			"summary":"This widget displays an SVG path as an icon.  It has a default state and a\n\"highlighted\" state.",
			"description":"This widget displays an SVG path as an icon.  It has a default state and a\n\"highlighted\" state."
		},{
			"id":"oxt_builder-90",
			"name":"countcodeunitsof",
			"display name":"CountCodeunitsOf",
			"library":"oxt_builder",
			"type":"operator",
			"syntax":[
				"the number of codeunits in <Target>"
			],
			"display syntax":[
				"the number of codeunits in <i>Target</i>"
			],
			"associations":["com.livecode.codeunit"],
			"summary":"Counts the number of codeunits in <Target>.",
			"parameters":[{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a string."
			}],
			"examples":[{
				"script":"variable tVar as Number\nvariable tSource as String\nput \"hello\" into tString\nput the number of codeunits in tString into tVar\n\nvariable tString as String\nput the empty string into tString\t\nrepeat tVar times\n\tput \"a\" after tString\nend repeat\n\n// tString contains \"aaaaa\""
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"The number of codeunits in <Target>."
			}],
			"description":">*Note:* The number of codeunits returns the number of codeunits of the target string. It does not perform any grapheme boundary analysis.",
			"tags":["strings"]
		},{
			"id":"oxt_builder-91",
			"name":"deletelastcodeunitof",
			"display name":"DeleteLastCodeunitOf",
			"library":"oxt_builder",
			"type":"statement",
			"syntax":[
				"delete the last codeunit of <Target>"
			],
			"display syntax":[
				"delete the last codeunit of <i>Target</i>"
			],
			"associations":["com.livecode.codeunit"],
			"summary":"Deletes the last codeunit in <Target>.",
			"parameters":[{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"A string container."
			}],
			"examples":[{
				"script":"variable tVar as String\nput \"deadliness\" into tVar\ndelete the last codeunit of tVar -- tVar contains \"deadlines\""
			}],
			"description":"Replaces the last codeunit in <Target> with the empty string.\n\n>*Note:* It is an error if <Target> is the empty string.",
			"tags":["strings"]
		},{
			"id":"oxt_builder-92",
			"name":"repeatforeachcodeunit",
			"display name":"RepeatForEachCodeunit",
			"library":"oxt_builder",
			"type":"iterator",
			"syntax":[
				"codeunit <Iterand>"
			],
			"display syntax":[
				"codeunit <i>Iterand</i>"
			],
			"associations":["com.livecode.codeunit"],
			"summary":"Repeat over the codeunits of a string",
			"parameters":[{
				"name":"Iterand",
				"type":"",
				"refparam":"false",
				"description":"A string container."
			}],
			"examples":[{
				"script":"variable tString as String\nput \"stressed\" into tString\n\nvariable tReversed as String\nvariable tCodeunit as String\nput \"\" into tReversed\nrepeat for each codeunit tCodeunit in tString\n\tput tCodeunit before tReversed\nend repeat\n\n    // tReversed is \"desserts\""
			}],
			"description":"Use repeat for each to perform an operation on each codeunit of a string. On each iteration, the <Iterand> will contain the next codeunit of the string being iterated over.",
			"tags":["strings","control structures"]
		},{
			"id":"oxt_builder-93",
			"name":"deletesingletoncodeunitof",
			"display name":"DeleteSingletonCodeunitOf",
			"library":"oxt_builder",
			"type":"statement",
			"syntax":[
				"delete codeunit <Index> of <Target>"
			],
			"display syntax":[
				"delete codeunit <i>Index</i> of <i>Target</i>"
			],
			"associations":["com.livecode.codeunit"],
			"summary":"Deletes the codeunit at index <Index> in <Target>.",
			"parameters":[{
				"name":"Index",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a valid integer index of <Target>."
			},{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"A string container."
			}],
			"examples":[{
				"script":"variable tVar as String\nput \"thorough\" into tVar\ndelete codeunit 3 of tVar -- tVar contains \"through\""
			}],
			"description":"Replaces the codeunit at the given index with the empty string.\n\n>*Note:* It is an error if <Index> is out of range.",
			"tags":["strings"]
		},{
			"id":"oxt_builder-94",
			"name":"codeunitoffset",
			"display name":"CodeunitOffset",
			"library":"oxt_builder",
			"type":"operator",
			"syntax":[
				"the ( first | last ) offset of codeunits <Needle> in <Target>"
			],
			"display syntax":[
				"the ( first | last ) offset of codeunits <i>Needle</i> in <i>Target</i>"
			],
			"associations":["com.livecode.codeunit"],
			"summary":"Finds the first or last occurrence of <Needle> within <Target>",
			"parameters":[{
				"name":"Needle",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a string."
			},{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a string."
			}],
			"examples":[{
				"script":"variable tVar as Number\nput the first offset of codeunits \"art\" in \"cartoon\" into tVar -- tVar contains 2"
			},{
				"script":"variable tVar as Number\nvariable tFilePath as String\nput \"/Users/user/Documents/file.txt\" into tFilePath\nput the last offset of \"/\" in tFilePath into tVar\n\nvariable tFileName as String\nput codeunit 1 to tVar of tFilePath into tFileName -- tVar contains \"file.txt\""
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"Returns the offset of <Needle> in <Target>."
			}],
			"description":"The first (respectively last) offset of <Needle> in <Target> is number of codeunits between the first codeunit of <Target> and the first (respectively last) occurrence of <Needle>. If neither first or last is specified, then the first offset is found. If <Needle> does not occur in <Target>, then the output is 0.",
			"tags":["strings"]
		},{
			"id":"oxt_builder-95",
			"name":"singletoncodeunitof",
			"display name":"SingletonCodeunitOf",
			"library":"oxt_builder",
			"type":"operator",
			"syntax":[
				"codeunit <Index> of <Target>"
			],
			"display syntax":[
				"codeunit <i>Index</i> of <i>Target</i>"
			],
			"associations":["com.livecode.codeunit"],
			"summary":"Designates the codeunit at index <Index> in <Target>.",
			"parameters":[{
				"name":"Index",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a valid integer index of <Target>."
			},{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a string."
			}],
			"examples":[{
				"script":"put the empty string into codeunit 5 of tString // Locates codeunit 5 and removes it from tString"
			},{
				"script":"get codeunit 5 of tString // Evaluates codeunit 5"
			}],
			"description":"Either locates the codeunit at the given index for use as the target container of another operation, or evaluates the codeunit at the given index as the source of another operation.\n\n>*Note:* It is an error if <Index> is out of range.",
			"tags":["strings"]
		},{
			"id":"oxt_builder-96",
			"name":"codeunitoffsetafter",
			"display name":"CodeunitOffsetAfter",
			"library":"oxt_builder",
			"type":"operator",
			"syntax":[
				"the ( first | last ) offset of codeunits <Needle> after <After> in <Target>"
			],
			"display syntax":[
				"the ( first | last ) offset of codeunits <i>Needle</i> after <i>After</i> in <i>Target</i>"
			],
			"associations":["com.livecode.codeunit"],
			"summary":"Finds the first or last occurrence of <Needle> after a specified index in <Target>",
			"parameters":[{
				"name":"Needle",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a string."
			},{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a string."
			},{
				"name":"After",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a valid integer index of Target."
			}],
			"examples":[{
				"script":"variable tVar as Number\nput the offset of codeunits \"nse\" after 4 in \"nonsense\" into tVar -- tVar contains 2"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"Returns the offset of <Needle> after <After> in <Target>."
			}],
			"description":"The first (respectively last) offset of <Needle> in <Target> is number of codeunits between the first codeunit of the substring of <Target> beginning at codeunit <After> + 1, and the first (respectively last) occurrence of <Needle> in the substring. If neither first or last is specified, then the first offset is found. If <Needle> does not occur in the given substring of <Target>, then the output is 0.",
			"tags":["strings"]
		},{
			"id":"oxt_builder-97",
			"name":"lastcodeunitof",
			"display name":"LastCodeunitOf",
			"library":"oxt_builder",
			"type":"operator",
			"syntax":[
				"the last codeunit of <Target>"
			],
			"display syntax":[
				"the last codeunit of <i>Target</i>"
			],
			"associations":["com.livecode.codeunit"],
			"summary":"Designates the last codeunit in <Target>.",
			"parameters":[{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a string."
			}],
			"examples":[{
				"script":"variable tVar as String\nput \"codeunit\" into tVar\n\nvariable tLast as String\nput the last codeunit of tVar into tLast -- tLast contains \"r\""
			}],
			"description":"Either locates the last codeunit for use as the target container of another operation, or evaluates the last codeunit as the source of another operation.\n\n>*Note:* It is an error if <Target> is empty.",
			"tags":["strings"]
		},{
			"id":"oxt_builder-98",
			"name":"deletefirstcodeunitof",
			"display name":"DeleteFirstCodeunitOf",
			"library":"oxt_builder",
			"type":"statement",
			"syntax":[
				"delete the first codeunit of <Target>"
			],
			"display syntax":[
				"delete the first codeunit of <i>Target</i>"
			],
			"associations":["com.livecode.codeunit"],
			"summary":"Deletes the first codeunit in <Target>.",
			"parameters":[{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"A string container."
			}],
			"examples":[{
				"script":"variable tVar as String\nput \"seven\" into tVar\ndelete the first codeunit of tVar -- tVar contains \"even\""
			}],
			"description":"Replaces the first codeunit in <Target> with the empty string.\n\n>*Note:* It is an error if <Target> is the empty string.",
			"tags":["strings"]
		},{
			"id":"oxt_builder-99",
			"name":"codeunitoffsetbefore",
			"display name":"CodeunitOffsetBefore",
			"library":"oxt_builder",
			"type":"operator",
			"syntax":[
				"the ( first | last ) offset of codeunits <Needle> before <Before> in <Target>"
			],
			"display syntax":[
				"the ( first | last ) offset of codeunits <i>Needle</i> before <i>Before</i> in <i>Target</i>"
			],
			"associations":["com.livecode.codeunit"],
			"summary":"Finds the first or last occurrence of <Needle> before a specified index in <Target>.",
			"parameters":[{
				"name":"Needle",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a string."
			},{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a string."
			},{
				"name":"Before",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a valid integer index of Target."
			}],
			"examples":[{
				"script":"variable tVar as Number\nvariable tLastDot as Number\nvariable tAddress as String\nvariable tTLD as String\nput \"http://www.livecode.com/index.html\" into tAddress\nput the last offset of \".\" in tAddress into tLastDot\nput the offset of \".\" before tLastDot in tAddress into tVar\nput codeunit tVar + 1 to tVar + 3 of tAddress into tTLD -- tTLD contains \"com\""
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"Returns the offset of <Needle> before <Before> in <Target>."
			}],
			"description":"The first (respectively last) offset of <Needle> in <Target> is number of codeunits between the first codeunit of <Target>, and the first (respectively last) occurrence of <Needle> in the substring of <Target> ending at codeunit <Before> - 1. If neither first or last is specified, then the last offset is found. If <Needle> does not occur in the given substring of <Target>, then the output is 0.",
			"tags":["strings"]
		},{
			"id":"oxt_builder-100",
			"name":"rangecodeunitof",
			"display name":"RangeCodeunitOf",
			"library":"oxt_builder",
			"type":"operator",
			"syntax":[
				"codeunit <Start> to <Finish> of <Target>"
			],
			"display syntax":[
				"codeunit <i>Start</i> to <i>Finish</i> of <i>Target</i>"
			],
			"associations":["com.livecode.codeunit"],
			"summary":"Designates the codeunits between indices <Start> and <Finish> in <Target>.",
			"parameters":[{
				"name":"Start",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a valid integer index of <Target>."
			},{
				"name":"Finish",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a valid integer index of <Target>."
			},{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a string."
			}],
			"examples":[{
				"script":"put tCodeunits into codeunit 5 to 10 of tString // Locates codeunits 5 to 10 of tString and replace them with tCodeunits"
			},{
				"script":"get codeunit 5 to 10 of tString // Evaluates codeunits 5 to 10"
			}],
			"description":"Either locates the codeunits between the given indices for use as the target container of another operation, or evaluates the codeunits at the given indices as the source of another operation.\n\n>*Note:* It is an error if either <Start> or <Finish> are out of range.",
			"tags":["strings"]
		},{
			"id":"oxt_builder-101",
			"name":"com.livecode.codeunit",
			"display name":"com.livecode.codeunit",
			"library":"oxt_builder",
			"type":"module",
			"display syntax":[
				"com.livecode.codeunit"
			],
			"associations":["com.livecode.codeunit"],
			"summary":"This library consists of the operations on codeunits included in the standard library of LiveCode Builder.",
			"description":"This library consists of the operations on codeunits included in the standard library of LiveCode Builder."
		},{
			"id":"oxt_builder-102",
			"name":"deleterangecodeunitof",
			"display name":"DeleteRangeCodeunitOf",
			"library":"oxt_builder",
			"type":"statement",
			"syntax":[
				"delete codeunit <Start> to <Finish> of <Target>"
			],
			"display syntax":[
				"delete codeunit <i>Start</i> to <i>Finish</i> of <i>Target</i>"
			],
			"associations":["com.livecode.codeunit"],
			"summary":"Deletes the codeunits between indices <Start> and <Finish> in <Target>.",
			"parameters":[{
				"name":"Start",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a valid integer index of <Target>."
			},{
				"name":"Finish",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a valid integer index of <Target>."
			},{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"A string container."
			}],
			"examples":[{
				"script":"variable tVar as String\nput \"surround\" into tVar\ndelete codeunit 2 to 4 of tVar -- tVar contains \"sound\""
			}],
			"description":"Replaces the codeunits between the given indices with the empty string.\n\n>*Note:* It is an error if either <Start> or <Finish> are out of range.",
			"tags":["strings"]
		},{
			"id":"oxt_builder-103",
			"name":"firstcodeunitof",
			"display name":"FirstCodeunitOf",
			"library":"oxt_builder",
			"type":"operator",
			"syntax":[
				"the first codeunit of <Target>"
			],
			"display syntax":[
				"the first codeunit of <i>Target</i>"
			],
			"associations":["com.livecode.codeunit"],
			"summary":"Designates the first codeunit in <Target>.",
			"parameters":[{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a string."
			}],
			"examples":[{
				"script":"variable tVar as String\nput \"codeunit\" into tVar\n\nvariable tFirst as String\nput the last codeunit of tVar into tFirst -- tFirst contains \"c\""
			}],
			"description":"Either locates the first codeunit for use as the target container of another operation, or evaluates the first codeunit as the source of another operation.\n\n>*Note:* It is an error if <Target> is empty.",
			"tags":["strings"]
		},{
			"id":"oxt_builder-104",
			"name":"booleanisequaltoboolean",
			"display name":"BooleanIsEqualToBoolean",
			"library":"oxt_builder",
			"type":"operator",
			"syntax":[
				"<Left> is <Right>"
			],
			"display syntax":[
				"<i>Left</i> is <i>Right</i>"
			],
			"associations":["com.livecode.logic"],
			"summary":"Determines whether <Left> and <Right> are equal or not.",
			"parameters":[{
				"name":"Left",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a boolean value."
			},{
				"name":"Right",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a boolean value."
			}],
			"examples":[{
				"script":"variable tBool is bool\nput true is true into tBool -- tBool is true"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"Returns true if <Left> evaluates to the same value as <Right>."
			}],
			"description":"Determines whether <Left> and <Right> are equal or not.",
			"tags":["logic"]
		},{
			"id":"oxt_builder-105",
			"name":"booleanformattedasstring",
			"display name":"BooleanFormattedAsString",
			"library":"oxt_builder",
			"type":"operator",
			"syntax":[
				"<Operand> formatted as string"
			],
			"display syntax":[
				"<i>Operand</i> formatted as string"
			],
			"associations":["com.livecode.logic"],
			"summary":"Formats a boolean value as a string",
			"parameters":[{
				"name":"Operand",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a boolean value."
			}],
			"examples":[{
				"script":"variable tString as String\nvariable tBool as Boolean\nput (false is not not true) is false into tBool\nput tBool formatted as string into tString -- tString contains \"true\""
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"\"true\" or \"false\""
			}],
			"description":"Use <BooleanFormattedAsString> when you want to manipulate a boolean value as text."
		},{
			"id":"oxt_builder-106",
			"name":"logicnot",
			"display name":"LogicNot",
			"library":"oxt_builder",
			"type":"operator",
			"syntax":[
				"not <Operand>"
			],
			"display syntax":[
				"not <i>Operand</i>"
			],
			"associations":["com.livecode.logic"],
			"summary":"Returns the boolean-logical value of the expression 'not <Operand>'",
			"parameters":[{
				"name":"Operand",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a boolean value"
			}],
			"examples":[{
				"script":"variable tBool is bool\nput not not not not true into tBool is true"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"If the operand expression evaluates to true, the value of the expression is false.\n            Otherwise, the value of the expression is true."
			}],
			"description":"Returns the boolean-logical value of the expression 'not <Operand>'",
			"tags":["logic"]
		},{
			"id":"oxt_builder-107",
			"name":"booleanisnotequaltoboolean",
			"display name":"BooleanIsNotEqualToBoolean",
			"library":"oxt_builder",
			"type":"operator",
			"syntax":[
				"<Left> is not <Right>"
			],
			"display syntax":[
				"<i>Left</i> is not <i>Right</i>"
			],
			"associations":["com.livecode.logic"],
			"summary":"Determines whether <Left> and <Right> are equal or not.",
			"parameters":[{
				"name":"Left",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a boolean value."
			},{
				"name":"Right",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a boolean value."
			}],
			"examples":[{
				"script":"variable tBool is bool\nput true is not false into tBool -- tBool is true"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"Returns true if <Left> evaluates to the opposite boolean value as <Right>."
			}],
			"description":"Determines whether <Left> and <Right> are equal or not.",
			"tags":["logic"]
		},{
			"id":"oxt_builder-108",
			"name":"formatbooleanasstring",
			"display name":"FormatBooleanAsString",
			"library":"oxt_builder",
			"type":"statement",
			"syntax":[
				"format <Operand> as string"
			],
			"display syntax":[
				"format <i>Operand</i> as string"
			],
			"associations":["com.livecode.logic"],
			"summary":"Formats a boolean value as a string",
			"parameters":[{
				"name":"Operand",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a boolean value."
			}],
			"examples":[{
				"script":"variable tVar as String\nformat 1 = 0 as String into tVar\nput \"e\" into char 3 of tVar -- tVar is \"tree\""
			}],
			"value":[{
				"name":"the result",
				"type":"",
				"description":"\"true\" or \"false\""
			}],
			"description":"Use <FormatBooleanAsString> when you want to manipulate a boolean value as text."
		},{
			"id":"oxt_builder-109",
			"name":"stringparsedasboolean",
			"display name":"StringParsedAsBoolean",
			"library":"oxt_builder",
			"type":"operator",
			"syntax":[
				"<Operand> parsed as boolean"
			],
			"display syntax":[
				"<i>Operand</i> parsed as boolean"
			],
			"associations":["com.livecode.logic"],
			"summary":"Parses a string as a boolean value",
			"parameters":[{
				"name":"Operand",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a string."
			}],
			"examples":[{
				"script":"variable tString as String\nvariable tBool as optional Boolean\nput \"false\" into tString\nput tString parsed as boolean into tBool -- tBool contains false"
			},{
				"script":"variable tBool as optional Boolean\nput \"flase\" parsed as boolean into tBool -- tBool is nothing"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"true or false"
			}],
			"description":"Use <StringParsedAsBoolean> when you want to determine if a string contains \"true\" or \"false\"\n\n>*Note:* Only the strings \"true\" and \"false\" will parse to give a boolean value. Any other input will cause an error to be thrown."
		},{
			"id":"oxt_builder-110",
			"name":"parsestringasboolean",
			"display name":"ParseStringAsBoolean",
			"library":"oxt_builder",
			"type":"statement",
			"syntax":[
				"parse <Operand> as boolean"
			],
			"display syntax":[
				"parse <i>Operand</i> as boolean"
			],
			"associations":["com.livecode.logic"],
			"summary":"Parses a string as a boolean value",
			"parameters":[{
				"name":"Operand",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a string."
			}],
			"examples":[{
				"script":"variable tString as String\nvariable tBool as optional Boolean\ncombine [\"f\", \"a\", \"l\", \"s\" \"e\"] with \"\" into tString\nput tString parsed as boolean into tBool -- tBool contains false"
			},{
				"script":"variable tResult as String\nvariable tCheck as optional Boolean\nparse \"sdfsdf\" as boolean into tCheck\nif tCheck is nothing then\n\tput \"not a valid boolean\" into tResult\nend if"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"true or false"
			}],
			"description":"Use <StringParsedAsBoolean> when you want to determine if a string contains \"true\" or \"false\"\n\n>*Note:* Only the strings \"true\" and \"false\" will parse to give a boolean value. Any other input will cause an error to be thrown.\n"
		},{
			"id":"oxt_builder-111",
			"name":"com.livecode.logic",
			"display name":"com.livecode.logic",
			"library":"oxt_builder",
			"type":"module",
			"display syntax":[
				"com.livecode.logic"
			],
			"associations":["com.livecode.logic"],
			"summary":"This library consists of the logical operations included in the standard library of LiveCode Builder.",
			"description":"This library consists of the logical operations included in the standard library of LiveCode Builder."
		},{
			"id":"oxt_builder-112",
			"name":"fghovercolor",
			"display name":"fgHoverColor",
			"library":"oxt_builder",
			"type":"property",
			"syntax":[
				"set the fgHoverColor of <widget> to <pColor>\nget the fgHoverColor of <widget>"
			],
			"display syntax":[
				"set the fgHoverColor of <i>widget</i> to <i>pColor</i>"
			],
			"associations":["com.livecode.widget.tile"],
			"summary":"The foreground hover color of the tile",
			"value":[{
				"name":"value",
				"type":"",
				"description":"A color in RGB form - comma separated values from 0 - 255"
			}],
			"description":"The foreground hover color of the tile"
		},{
			"id":"oxt_builder-113",
			"name":"hoverstate",
			"display name":"hoverState",
			"library":"oxt_builder",
			"type":"property",
			"syntax":[
				"set the hoverState of <widget> to { true | false }\nget the hoverState of <widget>"
			],
			"display syntax":[
				"set the hoverState of <i>widget</i> to { true | false }"
			],
			"associations":["com.livecode.widget.tile"],
			"summary":"The hover state of the tile\n",
			"description":"The hover state of the tile\n"
		},{
			"id":"oxt_builder-114",
			"name":"hovericonname",
			"display name":"hoverIconName",
			"library":"oxt_builder",
			"type":"property",
			"syntax":[
				"set the hoverIconName of <widget> to <pName>\nget the hoverIconName of <widget>"
			],
			"display syntax":[
				"set the hoverIconName of <i>widget</i> to <i>pName</i>"
			],
			"associations":["com.livecode.widget.tile"],
			"summary":"The name of the icon to display when hovering over the tile",
			"value":[{
				"name":"value",
				"type":"",
				"description":"The icon name"
			}],
			"description":"The name of the icon to display when hovering over the tile"
		},{
			"id":"oxt_builder-115",
			"name":"bgcolor",
			"display name":"bgColor",
			"library":"oxt_builder",
			"type":"property",
			"syntax":[
				"set the bgColor of <widget> to <pColor>\nget the bgColor of <widget>"
			],
			"display syntax":[
				"set the bgColor of <i>widget</i> to <i>pColor</i>"
			],
			"associations":["com.livecode.widget.tile"],
			"summary":"The background color of the tile",
			"value":[{
				"name":"value",
				"type":"",
				"description":"A color in RGB form - comma separated values from 0 - 255"
			}],
			"description":"The background color of the tile"
		},{
			"id":"oxt_builder-116",
			"name":"fgcolor",
			"display name":"fgColor",
			"library":"oxt_builder",
			"type":"property",
			"syntax":[
				"set the fgColor of <widget> to <pColor>\nget the fgColor of <widget>"
			],
			"display syntax":[
				"set the fgColor of <i>widget</i> to <i>pColor</i>"
			],
			"associations":["com.livecode.widget.tile"],
			"summary":"The foreground color of the tile",
			"value":[{
				"name":"value",
				"type":"",
				"description":"A color in RGB form - comma separated values from 0 - 255"
			}],
			"description":"The foreground color of the tile"
		},{
			"id":"oxt_builder-117",
			"name":"mouseenter",
			"display name":"mouseEnter",
			"library":"oxt_builder",
			"type":"message",
			"syntax":[
				"mouseEnter"
			],
			"display syntax":[
				"mouseEnter"
			],
			"associations":["com.livecode.widget.tile"],
			"summary":"Sent when the mouse enters the tile",
			"description":"Sent when the mouse enters the tile"
		},{
			"id":"oxt_builder-118",
			"name":"bghovercolor",
			"display name":"bgHoverColor",
			"library":"oxt_builder",
			"type":"property",
			"syntax":[
				"set the bgHoverColor of <widget> to <pColor>\nget the bgHoverColor of <widget>"
			],
			"display syntax":[
				"set the bgHoverColor of <i>widget</i> to <i>pColor</i>"
			],
			"associations":["com.livecode.widget.tile"],
			"summary":"The background hover color of the tile",
			"value":[{
				"name":"value",
				"type":"",
				"description":"A color in RGB form - comma separated values from 0 - 255"
			}],
			"description":"The background hover color of the tile"
		},{
			"id":"oxt_builder-119",
			"name":"mouseleave",
			"display name":"mouseLeave",
			"library":"oxt_builder",
			"type":"message",
			"syntax":[
				"mouseLeave"
			],
			"display syntax":[
				"mouseLeave"
			],
			"associations":["com.livecode.widget.tile"],
			"summary":"Sent when the mouse leaves the tile",
			"description":"Sent when the mouse leaves the tile"
		},{
			"id":"oxt_builder-120",
			"name":"iconname",
			"display name":"iconName",
			"library":"oxt_builder",
			"type":"property",
			"syntax":[
				"set the iconName of <widget> to <pName>\nget the iconName of <widget>"
			],
			"display syntax":[
				"set the iconName of <i>widget</i> to <i>pName</i>"
			],
			"associations":["com.livecode.widget.tile"],
			"summary":"The name of the icon to display",
			"value":[{
				"name":"value",
				"type":"",
				"description":"The icon name"
			}],
			"description":"The name of the icon to display"
		},{
			"id":"oxt_builder-121",
			"name":"com.livecode.widget.tile",
			"display name":"com.livecode.widget.tile",
			"library":"oxt_builder",
			"type":"widget",
			"display syntax":[
				"com.livecode.widget.tile"
			],
			"associations":["com.livecode.widget.tile"],
			"summary":"A tile widget with icon and label",
			"description":"A tile widget with icon and label"
		},{
			"id":"oxt_builder-122",
			"name":"tilelabel",
			"display name":"tileLabel",
			"library":"oxt_builder",
			"type":"property",
			"syntax":[
				"set the titleLabel of <widget> to <pLabel>\nget the titleLabel of <widget>"
			],
			"display syntax":[
				"set the titleLabel of <i>widget</i> to <i>pLabel</i>"
			],
			"associations":["com.livecode.widget.tile"],
			"summary":"The label to display",
			"value":[{
				"name":"value",
				"type":"",
				"description":"The label string"
			}],
			"description":"The label to display"
		},{
			"id":"oxt_builder-123",
			"name":"mouseup",
			"display name":"mouseUp",
			"library":"oxt_builder",
			"type":"message",
			"syntax":[
				"mouseUp"
			],
			"display syntax":[
				"mouseUp"
			],
			"associations":["com.livecode.widget.tile"],
			"summary":"Sent when the tile is clicked",
			"description":"Sent when the tile is clicked"
		},{
			"id":"oxt_builder-124",
			"name":"pointerfromjobject",
			"display name":"PointerFromJObject",
			"library":"oxt_builder",
			"type":"handler",
			"syntax":[
				"PointerFromJObject(<pObj>)"
			],
			"display syntax":[
				"PointerFromJObject(<i>pObj</i>)"
			],
			"associations":["com.livecode.java"],
			"summary":"Convert a JObject into a Pointer",
			"parameters":[{
				"name":"pObj",
				"type":"",
				"refparam":"false",
				"description":"The JObject to convert"
			}],
			"examples":[{
				"script":"handler SetNativeLayerToView(in pView as JObject)\n\tvariable tViewPtr as Pointer\n\tput PointerFromJObject(pView) into tViewPtr\n\tset my native layer to tViewPtr\nend handler"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"The jobject Pointer wrapped by the JObject type"
			}],
			"description":"Use <PointerFromJObject> to convert a variable of type JObject to one of\ntype Pointer, i.e. to extract the underlying jobject pointer from a JObject\n"
		},{
			"id":"oxt_builder-125",
			"name":"com.livecode.java",
			"display name":"com.livecode.java",
			"library":"oxt_builder",
			"type":"module",
			"display syntax":[
				"com.livecode.java"
			],
			"associations":["com.livecode.java"],
			"summary":"This module provides utility handlers for converting to and from Java types.",
			"description":"> **Important:** This library is currently supported on Android, Mac and\n> Linux. Binding to java classes requires the availability of a Java \n> runtime and access to the appropriate libraries. On Mac, \n> the `JAVA_HOME` environment variable must be set to the path to your \n> Java installation (usually at \n> `/Library/Java/JavaVirtualMachines/jdk1.7.0_55.jdk/Contents/Home`). \n> On Linux, your `LD_LIBRARY_PATH` must be set to the folder containing \n> the `libjvm.so` library (usually at `${JAVA_HOME}/jre/lib/amd64/server`\n> on 64-bit Linux)."
		},{
			"id":"oxt_builder-126",
			"name":"stringfromjstring",
			"display name":"StringFromJString",
			"library":"oxt_builder",
			"type":"handler",
			"syntax":[
				"StringFromJString(<pObj>)"
			],
			"display syntax":[
				"StringFromJString(<i>pObj</i>)"
			],
			"associations":["com.livecode.java"],
			"summary":"Convert a java string into a String",
			"parameters":[{
				"name":"pObj",
				"type":"",
				"refparam":"false",
				"description":"The JString to convert"
			}],
			"examples":[{
				"script":"foreign handler JavaGetDefaultLocale() returns JObject binds to \"java:java.util.Locale>getDefault()Ljava/util/Locale;!static\"\nforeign handler JavaLocaleDisplayName(in pLocale as JObject) returns JObject binds to \"java:java.util.Locale>getDisplayName()Ljava/lang/String;\"\n\npublic handler GetDefaultLocaleDisplayName() returns String\n\tunsafe \n\t\tvariable tLocale as JObject\n\t\tput JavaGetDefaultLocale() into tLocale\n\n\t\tvariable tDisplay as JString\n\t\tput JavaLocaleDisplayName(tLocale) into tDisplay\n\n\t\treturn StringFromJString(tDisplay)\n\tend unsafe\nend handler"
			}],
			"description":"Use <StringFromJString> to convert an instance of the class java.lang.String\nto a variable of type String."
		},{
			"id":"oxt_builder-127",
			"name":"pointertojobject",
			"display name":"PointerToJObject",
			"library":"oxt_builder",
			"type":"handler",
			"syntax":[
				"PointerToJObject(<pPointer>)"
			],
			"display syntax":[
				"PointerToJObject(<i>pPointer</i>)"
			],
			"associations":["com.livecode.java"],
			"summary":"Convert a Pointer into a JObject",
			"parameters":[{
				"name":"pPointer",
				"type":"",
				"refparam":"false",
				"description":"The Pointer to convert"
			}],
			"examples":[{
				"script":"foreign handler _JNI_SetTextViewText(in pView as JObject, in pValue as JString) returns nothing binds to \"java:android.widget.TextView>setText(Ljava/lang/CharSequence;)V\"\n\n-- set the text of a view\nunsafe handler ViewSetText(in pString as String)\n\tvariable tViewPtr as Pointer\n\tput my native layer into tPointer\n\n\tvariable tView as JObject\n\tput PointerToJObject into tView\n\t_JNI_SetTextViewText(tView, StringToJString(pString))\nend handler"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"A JObject wrapping the jobject Pointer"
			}],
			"description":"Use <PointerToJObject> to convert a variable of type Pointer to one of \ntype JObject. \n\n> *Important:* Your application will likely crash if the underlying type\n> of the Pointer is not actually jobject."
		},{
			"id":"oxt_builder-128",
			"name":"getjavaclassname",
			"display name":"GetJavaClassName",
			"library":"oxt_builder",
			"type":"handler",
			"syntax":[
				"GetJavaClassName(<pObj>)"
			],
			"display syntax":[
				"GetJavaClassName(<i>pObj</i>)"
			],
			"associations":["com.livecode.java"],
			"summary":"Get Java class name of a Java object",
			"parameters":[{
				"name":"pObj",
				"type":"",
				"refparam":"false",
				"description":"A JObject"
			}],
			"examples":[{
				"script":"foreign handler CreateJavaObject() returns JObject binds to \"java:java.lang.Object>new()\"\n\npublic handler GetNewJavaObject() returns JObject\nvariable tObj as JObject\nunsafe\n\tput CreateJavaObject() into tObj\n\n\tvariable tClassName as String\n\tput GetJavaClassName(pObj) into tClassName\n\n\t-- tClassName contains \"java.lang.Object\"\nend unsafe\n\nreturn tObj\nend handler"
			}],
			"description":"Use <GetJavaClassName> to find out what class a given Java object is an\ninstance of."
		},{
			"id":"oxt_builder-129",
			"name":"stringtojstring",
			"display name":"StringToJString",
			"library":"oxt_builder",
			"type":"handler",
			"syntax":[
				"StringToJString(<pString>)"
			],
			"display syntax":[
				"StringToJString(<i>pString</i>)"
			],
			"associations":["com.livecode.java"],
			"summary":"Convert a String into a java string",
			"parameters":[{
				"name":"pString",
				"type":"",
				"refparam":"false",
				"description":"The String to convert"
			}],
			"examples":[{
				"script":"foreign handler CreateJavaCurrencyWithCode(in pString as JString) returns JObject binds to \"java:java.util.Currency>getInstance(Ljava/lang/String;)Ljava/util/Currency;!static\"\n\n-- Create a new Currency object\nvariable tCurrency as JObject\nunsafe\n\tvariable tCode as JString\n\tput StringToJString(\"AMD\") into tCode\n\n\tput CreateJavaCurrencyWithCode(tCode) into tCurrency\nend unsafe"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"A JObject of type java.lang.String"
			}],
			"description":"Use <StringToJString> to convert a variable of type String to an instance\nof the class java.lang.String."
		},{
			"id":"oxt_builder-130",
			"name":"com.livecode.library.scriptitems",
			"display name":"com.livecode.library.scriptitems",
			"library":"oxt_builder",
			"type":"module",
			"display syntax":[
				"com.livecode.library.scriptitems"
			],
			"associations":["com.livecode.library.scriptitems"],
			"summary":"Utility functions for LiveCode Script-compatible item lists.\n\nMany LiveCode Builder widget and library extensions expose APIs to\nLiveCode Script that use item lists.  This library provides a set of\nfunctions for converting `List` values to-and-from comma-delimited\nitem strings.",
			"description":"Utility functions for LiveCode Script-compatible item lists.\n\nMany LiveCode Builder widget and library extensions expose APIs to\nLiveCode Script that use item lists.  This library provides a set of\nfunctions for converting `List` values to-and-from comma-delimited\nitem strings."
		},{
			"id":"oxt_builder-131",
			"name":"parseitemsasnumberlist",
			"display name":"parseItemsAsNumberList",
			"library":"oxt_builder",
			"type":"handler",
			"syntax":[
				"parseItemsAsNumberList(<pStringValue>,<pListLength>,<pDefaultValue>)"
			],
			"display syntax":[
				"parseItemsAsNumberList(<i>pStringValue</i>,<i>pListLength</i>,<i>pDefaultValue</i>)"
			],
			"associations":["com.livecode.library.scriptitems"],
			"summary":"Parse a comma-delimited \"item\" string as a list of numbers",
			"parameters":[{
				"name":"pStringValue",
				"type":"",
				"refparam":"false",
				"description":"A string containing comma-delimited \"items\""
			},{
				"name":"pListLength",
				"type":"",
				"refparam":"false",
				"description":"The number of elements the parsed list should contain"
			},{
				"name":"pDefaultValue",
				"type":"",
				"refparam":"false",
				"description":"Value to be used for extra elements"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"The parsed items as a list of strings"
			}],
			"description":"Helper function for converting a LiveCode Script \"item\" list into a\nlist of numbers, obeying the LiveCode Script rules for items.\n\nIf <pListLength> is provided, then the returned list will always\ncontain that number of elements: extra elements will be discarded, and\nmissing elements will be set to <pDefaultValue>.",
			"references":{
				"handler":["parseItemsAsStringList","formatNumberListAsItems"]
			}
		},{
			"id":"oxt_builder-132",
			"name":"parseitemsasstringlist",
			"display name":"parseItemsAsStringList",
			"library":"oxt_builder",
			"type":"handler",
			"syntax":[
				"parseItemsAsStringList(<pStringValue>,<pListLength>,<pDefaultValue>)"
			],
			"display syntax":[
				"parseItemsAsStringList(<i>pStringValue</i>,<i>pListLength</i>,<i>pDefaultValue</i>)"
			],
			"associations":["com.livecode.library.scriptitems"],
			"summary":"Parse a comma-delimited \"item\" string as a list of strings",
			"parameters":[{
				"name":"pStringValue",
				"type":"",
				"refparam":"false",
				"description":"A string containing comma-delimited \"items\""
			},{
				"name":"pListLength",
				"type":"",
				"refparam":"false",
				"description":"The number of elements the parsed list should contain"
			},{
				"name":"pDefaultValue",
				"type":"",
				"refparam":"false",
				"description":"Value to be used for extra elements"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"The parsed items as a list of strings"
			}],
			"description":"Helper function for converting a LiveCode Script \"item\" list into list\nof strings, obeying the LiveCode Script rules for items.\n\nIf <pListLength> is provided, then the returned list will always\ncontain that number of elements: extra elements will be discarded, and\nmissing elements will be set to <pDefaultValue>.",
			"references":{
				"handler":["parseItemsAsNumberList","formatStringListAsItems"]
			}
		},{
			"id":"oxt_builder-133",
			"name":"formatstringlistasitems",
			"display name":"formatStringListAsItems",
			"library":"oxt_builder",
			"type":"handler",
			"syntax":[
				"formatStringListAsItems(<pList>)"
			],
			"display syntax":[
				"formatStringListAsItems(<i>pList</i>)"
			],
			"associations":["com.livecode.library.scriptitems"],
			"summary":"Format a list of strings as a comma-delimited \"item\" string",
			"parameters":[{
				"name":"pList",
				"type":"",
				"refparam":"false",
				"description":"A list of strings"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"A comma-delimited LiveCode Script-compatible \"item\" string"
			}],
			"description":"Helper function for converting a list of strings into a LiveCode\nScript \"item\" list, obeying the LiveCode Script rules for items.",
			"references":{
				"handler":["parseItemsAsStringList","formatNumberListAsItems"]
			}
		},{
			"id":"oxt_builder-134",
			"name":"formatnumberlistasitems",
			"display name":"formatNumberListAsItems",
			"library":"oxt_builder",
			"type":"handler",
			"syntax":[
				"formatNumberListAsItems(<pList>)"
			],
			"display syntax":[
				"formatNumberListAsItems(<i>pList</i>)"
			],
			"associations":["com.livecode.library.scriptitems"],
			"summary":"Format a list of numbers as a comma-delimited \"item\" string",
			"parameters":[{
				"name":"pList",
				"type":"",
				"refparam":"false",
				"description":"A list of numbers"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"A comma-delimited LiveCode Script-compatible \"item\" string"
			}],
			"description":"Helper function for converting a list of numbers into a LiveCode\nScript \"item\" list, obeying the LiveCode Script rules for items.",
			"references":{
				"handler":["formatStringListAsItems","parseItemsAsNumberList"]
			}
		},{
			"id":"oxt_builder-135",
			"name":"listofstringparsedaslistofnumber",
			"display name":"ListOfStringParsedAsListOfNumber",
			"library":"oxt_builder",
			"type":"operator",
			"syntax":[
				"<Operand> parsed as list of number"
			],
			"display syntax":[
				"<i>Operand</i> parsed as list of number"
			],
			"associations":["com.livecode.arithmetic"],
			"summary":"Parses a list of strings as a list of numbers",
			"parameters":[{
				"name":"Operand",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a list of strings."
			}],
			"examples":[{
				"script":"variable tListOfString as List\nvariable tListOfNum as List\nsplit \"1,2,3,4\" by \",\" into tListOfString\nput tListOfString parsed as list of number into tNum -- tListOfNum contains [ 1, 2, 3, 4 ]"
			},{
				"script":"variable tList as List\nput [\"1\", \"b\", \"3\"] parsed as list of number into tList\n\nvariable tElt as Number\nrepeat with tElt from 1 up to the number of elements in tList\n\tif tList[tElt] is nothing then\n\t\tput 0 into element tElt of tList\n\tend if\nend repeat\n\n// tList contains [ 1, 0, 3 ]"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"<Operand> parsed as a list of numbers."
			}],
			"description":"Use <ListOfStringParsedAsListOfNumber> when you want to interpret pieces of text numerically. If the input list contains elements which cannot be parsed as numbers, the corresponding element will be nothing.\n\n*Note:* It is an error if any element of <Operand> is not a string.\n"
		},{
			"id":"oxt_builder-136",
			"name":"plusunaryoperator",
			"display name":"PlusUnaryOperator",
			"library":"oxt_builder",
			"type":"operator",
			"syntax":[
				"+ <Operand>"
			],
			"display syntax":[
				"+ <i>Operand</i>"
			],
			"associations":["com.livecode.arithmetic"],
			"summary":"Unary plus operator.",
			"parameters":[{
				"name":"Operand",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a number."
			}],
			"examples":[{
				"script":"variable tVar as Number\nput +5 into tVar -- tVar contains 5"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"The result of evaluating <Operand>."
			}],
			"description":"The unary plus operator is a no-op on the predefined numeric types.",
			"tags":["math"]
		},{
			"id":"oxt_builder-137",
			"name":"numberformattedasstring",
			"display name":"NumberFormattedAsString",
			"library":"oxt_builder",
			"type":"operator",
			"syntax":[
				"<Operand> formatted as string"
			],
			"display syntax":[
				"<i>Operand</i> formatted as string"
			],
			"associations":["com.livecode.arithmetic"],
			"summary":"Formats a numeric value as a string",
			"parameters":[{
				"name":"Operand",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a number."
			}],
			"examples":[{
				"script":"variable tString as String\nvariable tNum as Number\nput 5 into tNum\nput tNum formatted as string into tString -- tString contains \"5\""
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"<Operand> formatted as a string."
			}],
			"description":"Use <NumberFormattedAsString> when you want to manipulate a numeric value as text."
		},{
			"id":"oxt_builder-138",
			"name":"plusoperator",
			"display name":"PlusOperator",
			"library":"oxt_builder",
			"type":"operator",
			"syntax":[
				"<Left> + <Right>"
			],
			"display syntax":[
				"<i>Left</i> + <i>Right</i>"
			],
			"associations":["com.livecode.arithmetic"],
			"summary":"Binary plus operator.",
			"parameters":[{
				"name":"Left",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a number."
			},{
				"name":"Right",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a number."
			}],
			"examples":[{
				"script":"variable tVar as Number\nput 5 + 4 + 3 into tVar -- tVar contains 12"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"The result of adding the numbers <Left> and <Right>."
			}],
			"description":"Binary plus operator.",
			"tags":["math"]
		},{
			"id":"oxt_builder-139",
			"name":"minusunaryoperator",
			"display name":"MinusUnaryOperator",
			"library":"oxt_builder",
			"type":"operator",
			"syntax":[
				"- <Operand>"
			],
			"display syntax":[
				"- <i>Operand</i>"
			],
			"associations":["com.livecode.arithmetic"],
			"summary":"Unary minus operator.",
			"parameters":[{
				"name":"Operand",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a number."
			}],
			"examples":[{
				"script":"variable tVar as Number\nput -(5 + 4) into tVar -- tVar contains -9"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"The negated result of evaluating <Operand>."
			}],
			"description":"Unary minus operator.",
			"tags":["math"]
		},{
			"id":"oxt_builder-140",
			"name":"numberisgreaterthanorequaltonumber",
			"display name":"NumberIsGreaterThanOrEqualToNumber",
			"library":"oxt_builder",
			"type":"operator",
			"syntax":[
				"<Left> &gt;= <Right>"
			],
			"display syntax":[
				"<i>Left</i> &gt;= <i>Right</i>"
			],
			"associations":["com.livecode.arithmetic"],
			"summary":"Greater than or equal to relation.",
			"parameters":[{
				"name":"Left",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a number."
			},{
				"name":"Right",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a number."
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"True if <Left> is greater than or equal to <Right>, and false otherwise."
			}],
			"description":"Greater than or equal to relation."
		},{
			"id":"oxt_builder-141",
			"name":"addnumberto",
			"display name":"AddNumberTo",
			"library":"oxt_builder",
			"type":"statement",
			"syntax":[
				"add <Value> to <Target>"
			],
			"display syntax":[
				"add <i>Value</i> to <i>Target</i>"
			],
			"associations":["com.livecode.arithmetic"],
			"summary":"Adds <Value> to <Target>.",
			"parameters":[{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a numeric container."
			},{
				"name":"Value",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a number."
			}],
			"examples":[{
				"script":"    variable tVar as Number\n    put 2 into tVar\n    add 10 to tVar -- tVar contains 12"
			}],
			"description":"Adds the number <Value> to <Target>.\n\n>*Note:* It is a syntax error if <Target> does not evaluate to a variable.",
			"tags":["math"]
		},{
			"id":"oxt_builder-142",
			"name":"subtractnumberfrom",
			"display name":"SubtractNumberFrom",
			"library":"oxt_builder",
			"type":"statement",
			"syntax":[
				"subtract <Value> from <Target>"
			],
			"display syntax":[
				"subtract <i>Value</i> from <i>Target</i>"
			],
			"associations":["com.livecode.arithmetic"],
			"summary":"Subtracts <Value> from <Target>.",
			"parameters":[{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a numeric variable."
			},{
				"name":"Value",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a number."
			}],
			"examples":[{
				"script":"variable tVar as real\nput 10 into tVar\nsubtract 2.5 from tVar -- tVar contains 7.5"
			}],
			"description":"Subtracts the number <Value> from <Target>.\n\n>*Note:* It is a syntax error if <Target> does not evaluate to a variable.",
			"tags":["math"]
		},{
			"id":"oxt_builder-143",
			"name":"numberislessthannumber",
			"display name":"NumberIsLessThanNumber",
			"library":"oxt_builder",
			"type":"operator",
			"syntax":[
				"<Left> &lt; <Right>"
			],
			"display syntax":[
				"<i>Left</i> &lt; <i>Right</i>"
			],
			"associations":["com.livecode.arithmetic"],
			"summary":"Less than relation.",
			"parameters":[{
				"name":"Left",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a number."
			},{
				"name":"Right",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a number."
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"True if <Left> is less than <Right>, and false otherwise."
			}],
			"description":"Less than relation.",
			"tags":["math"]
		},{
			"id":"oxt_builder-144",
			"name":"numberisequaltonumber",
			"display name":"NumberIsEqualToNumber",
			"library":"oxt_builder",
			"type":"operator",
			"syntax":[
				"<Left> = <Right>"
			],
			"display syntax":[
				"<i>Left</i> = <i>Right</i>"
			],
			"associations":["com.livecode.arithmetic"],
			"summary":"Equal to relation.",
			"parameters":[{
				"name":"Left",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a number."
			},{
				"name":"Right",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a number."
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"True if <Left> is equal to <Right>, and false otherwise."
			}],
			"description":"Equal to relation.",
			"tags":["math"]
		},{
			"id":"oxt_builder-145",
			"name":"dividenumberby",
			"display name":"DivideNumberBy",
			"library":"oxt_builder",
			"type":"statement",
			"syntax":[
				"divide <Target> by <Value>"
			],
			"display syntax":[
				"divide <i>Target</i> by <i>Value</i>"
			],
			"associations":["com.livecode.arithmetic"],
			"summary":"Divides <Target> by <Value>.",
			"parameters":[{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a numeric variable."
			},{
				"name":"Value",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a number."
			}],
			"examples":[{
				"script":"variable tVar\nput 3 into tVar\ndivide tVar by 2 -- tVar contains 1.5"
			}],
			"description":"Divides the number <Target> by <Value>.\n\n>*Note:* It is a syntax error if <Target> does not evaluate to a variable.",
			"tags":["math"]
		},{
			"id":"oxt_builder-146",
			"name":"numberislessthanorequaltonumber",
			"display name":"NumberIsLessThanOrEqualToNumber",
			"library":"oxt_builder",
			"type":"operator",
			"syntax":[
				"<Left> &lt;= <Right>"
			],
			"display syntax":[
				"<i>Left</i> &lt;= <i>Right</i>"
			],
			"associations":["com.livecode.arithmetic"],
			"summary":"Less than or equal to relation.",
			"parameters":[{
				"name":"Left",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a number."
			},{
				"name":"Right",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a number."
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"True if <Left> is less than or equal to <Right>, and false otherwise."
			}],
			"description":"Less than or equal to relation.",
			"tags":["math"]
		},{
			"id":"oxt_builder-147",
			"name":"overoperator",
			"display name":"OverOperator",
			"library":"oxt_builder",
			"type":"operator",
			"syntax":[
				"<Left> / <Right>"
			],
			"display syntax":[
				"<i>Left</i> / <i>Right</i>"
			],
			"associations":["com.livecode.arithmetic"],
			"summary":"Binary division operator.",
			"parameters":[{
				"name":"Left",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a number."
			},{
				"name":"Right",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a number."
			}],
			"examples":[{
				"script":"variable tVar as Number\nput 3 / 5 into tVar -- tVar contains 0.6"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"The result of dividing the number <Left> by <Right>."
			}],
			"description":"Binary division operator.",
			"tags":["math"]
		},{
			"id":"oxt_builder-148",
			"name":"numberisnotnumber",
			"display name":"NumberIsNotNumber",
			"library":"oxt_builder",
			"type":"operator",
			"syntax":[
				"<Left> is not <Right>"
			],
			"display syntax":[
				"<i>Left</i> is not <i>Right</i>"
			],
			"associations":["com.livecode.arithmetic"],
			"summary":"Determines if <Left> is not <Right>.",
			"parameters":[{
				"name":"Left",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a number."
			},{
				"name":"Right",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a number."
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"True if <Left> is not equal to <Right>, and false otherwise."
			}],
			"description":"Returns the opposite of the <NumberIsNumber> operator.",
			"references":{
				"operator":["NumberIsNumber"]
			},
			"tags":["math"]
		},{
			"id":"oxt_builder-149",
			"name":"modoperator",
			"display name":"ModOperator",
			"library":"oxt_builder",
			"type":"operator",
			"syntax":[
				"<Left> mod <Right>"
			],
			"display syntax":[
				"<i>Left</i> mod <i>Right</i>"
			],
			"associations":["com.livecode.arithmetic"],
			"summary":"Mod operator.",
			"parameters":[{
				"name":"Left",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a number."
			},{
				"name":"Right",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a number."
			}],
			"examples":[{
				"script":"variable tVar as Number\nput 4^((7 - 1)/2) mod 7 into tVar -- tVar contains 1"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"<Left> mod <Right>."
			}],
			"description":"Returns the remainder on dividing <Left> by <Right>"
		},{
			"id":"oxt_builder-150",
			"name":"com.livecode.arithmetic",
			"display name":"com.livecode.arithmetic",
			"library":"oxt_builder",
			"type":"module",
			"display syntax":[
				"com.livecode.arithmetic"
			],
			"associations":["com.livecode.arithmetic"],
			"summary":"This library consists of the basic arithmetic operations of standard library of LiveCode Builder.",
			"description":"This library consists of the basic arithmetic operations of standard library of LiveCode Builder."
		},{
			"id":"oxt_builder-151",
			"name":"parsestringasnumber",
			"display name":"ParseStringAsNumber",
			"library":"oxt_builder",
			"type":"statement",
			"syntax":[
				"parse <Operand> as number"
			],
			"display syntax":[
				"parse <i>Operand</i> as number"
			],
			"associations":["com.livecode.arithmetic"],
			"summary":"Parses a string as an number",
			"parameters":[{
				"name":"Operand",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a string."
			}],
			"examples":[{
				"script":"variable tString as String\nput \"5.6\" into tString\nparse tString as number -- the result is 5.6"
			},{
				"script":"variable tResult as optional String\nvariable tNum as optional Number\n\nparse \"aaaa\" as number into tNum\n\nif tNum is nothing then\n\tput \"unable to parse string\" into tResult\nend if"
			}],
			"value":[{
				"name":"the result",
				"type":"",
				"description":"<Operand> parsed as a number, or nothing."
			}],
			"description":"Use <ParseStringAsNumber> when you want to interpret text numerically. The result is nothing if parsing was not possible."
		},{
			"id":"oxt_builder-152",
			"name":"parselistofstringaslistofnumber",
			"display name":"ParseListOfStringAsListOfNumber",
			"library":"oxt_builder",
			"type":"statement",
			"syntax":[
				"parse <Operand> as list of number"
			],
			"display syntax":[
				"parse <i>Operand</i> as list of number"
			],
			"associations":["com.livecode.arithmetic"],
			"summary":"Parses a list of strings as a list of numbers",
			"parameters":[{
				"name":"Operand",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a list of strings."
			}],
			"examples":[{
				"script":"variable tListOfString as List\nvariable tListOfNum as List\nsplit \"1,2,3,4\" by \",\" into tListOfString\nparse tListOfString as list of number into tListOfNum\n-- tListOfNum contains [ 1, 2, 3, 4 ]"
			}],
			"value":[{
				"name":"the result",
				"type":"",
				"description":"<Operand> parsed as a list of numbers."
			}],
			"description":"Use <ParseListOfStringAsListOfNumber> when you want to interpret pieces of text numerically. If the input list contains elements which cannot be parsed as numbers, the corresponding element will be nothing.\n\n*Note:* It is an error if any element of <Operand> is not a string."
		},{
			"id":"oxt_builder-153",
			"name":"minusoperator",
			"display name":"MinusOperator",
			"library":"oxt_builder",
			"type":"operator",
			"syntax":[
				"<Left> - <Right>"
			],
			"display syntax":[
				"<i>Left</i> - <i>Right</i>"
			],
			"associations":["com.livecode.arithmetic"],
			"summary":"Binary minus operator.",
			"parameters":[{
				"name":"Left",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a number."
			},{
				"name":"Right",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a number."
			}],
			"examples":[{
				"script":"variable tVar as Number\nput 5 - 3 - 1 into tVar -- tVar contains 1"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"The result of subtracting the number <Right> from <Left>."
			}],
			"description":"Binary minus operator.",
			"tags":["math"]
		},{
			"id":"oxt_builder-154",
			"name":"wrapoperator",
			"display name":"WrapOperator",
			"library":"oxt_builder",
			"type":"operator",
			"syntax":[
				"<Left> wrap <Right>"
			],
			"display syntax":[
				"<i>Left</i> wrap <i>Right</i>"
			],
			"associations":["com.livecode.arithmetic"],
			"summary":"Wrap operator.",
			"parameters":[{
				"name":"Left",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a number."
			},{
				"name":"Right",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a number."
			}],
			"examples":[{
				"script":"variable tVar as Number\nput 5 wrap 3 into tVar -- tVar contains 2"
			},{
				"script":"variable tVar as Number\nput -3 wrap 3 into tVar -- tVar contains -3"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"If x >= 0, then x wrap y returns ((x-1) mod abs(y)) + 1.\n\t\t\tIf x < 0, then x wrap y returns -((x-1) mod abs(y)) + 1."
			}],
			"description":"Use wrap to ensure the value of a variable stays within a specified range. For x,y > 0, \nsuccessive values of x wrap y cycle through the sequence 1, 2, ..., y."
		},{
			"id":"oxt_builder-155",
			"name":"numberisnumber",
			"display name":"NumberIsNumber",
			"library":"oxt_builder",
			"type":"operator",
			"syntax":[
				"<Left> is <Right>"
			],
			"display syntax":[
				"<i>Left</i> is <i>Right</i>"
			],
			"associations":["com.livecode.arithmetic"],
			"summary":"Determines if <Left> is <Right>.",
			"parameters":[{
				"name":"Left",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a number."
			},{
				"name":"Right",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a number."
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"True if <Left> is equal to <Right>, and false otherwise."
			}],
			"description":"Identical to the <NumberIsEqualToNumber> operator.",
			"references":{
				"operator":["NumberIsEqualToNumber"]
			},
			"tags":["math"]
		},{
			"id":"oxt_builder-156",
			"name":"formatnumberasstring",
			"display name":"FormatNumberAsString",
			"library":"oxt_builder",
			"type":"statement",
			"syntax":[
				"format <Operand> as string"
			],
			"display syntax":[
				"format <i>Operand</i> as string"
			],
			"associations":["com.livecode.arithmetic"],
			"summary":"Formats a numeric value as a string",
			"parameters":[{
				"name":"Operand",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a number."
			}],
			"examples":[{
				"script":"variable tNum as Number\nvariable tString as String\nput 5 into tNum\nformat tNum as string into tString\n-- tString contains \"5\""
			}],
			"value":[{
				"name":"the result",
				"type":"",
				"description":"<Operand> formatted as a string."
			}],
			"description":"Use <FormatNumberAsString> when you want to manipulate a numeric value as text."
		},{
			"id":"oxt_builder-157",
			"name":"timesoperator",
			"display name":"TimesOperator",
			"library":"oxt_builder",
			"type":"operator",
			"syntax":[
				"<Left> * <Right>"
			],
			"display syntax":[
				"<i>Left</i> * <i>Right</i>"
			],
			"associations":["com.livecode.arithmetic"],
			"summary":"Binary multiplication operator.",
			"parameters":[{
				"name":"Left",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a number."
			},{
				"name":"Right",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a number."
			}],
			"examples":[{
				"script":"variable tVar as Number\nput 3 * 5 into tVar -- tVar contains 15"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"The result of multiplying the numbers <Left> and <Right>."
			}],
			"description":"Binary multiplication operator.",
			"tags":["math"]
		},{
			"id":"oxt_builder-158",
			"name":"stringparsedasnumber",
			"display name":"StringParsedAsNumber",
			"library":"oxt_builder",
			"type":"operator",
			"syntax":[
				"<Operand> parsed as number"
			],
			"display syntax":[
				"<i>Operand</i> parsed as number"
			],
			"associations":["com.livecode.arithmetic"],
			"summary":"Parses a string as an number",
			"parameters":[{
				"name":"Operand",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a string."
			}],
			"examples":[{
				"script":"variable tString as String\nvariable tNum as optional Number\nput \"5.6\" into tString\nput tString parsed as number into tNum -- tNum contains 5.6"
			},{
				"script":"variable tNum as optional Number\nput \"aaaa\" parsed as number into tNum\n\nif tNum is nothing then\n\tput 0 into tNum\nend if\n\n// tNum contains 0"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"<Operand> parsed as a number, or nothing."
			}],
			"description":"Use <StringParsedAsNumber> when you want to interpret text numerically. nothing is returned if parsing was not possible."
		},{
			"id":"oxt_builder-159",
			"name":"numberisgreaterthannumber",
			"display name":"NumberIsGreaterThanNumber",
			"library":"oxt_builder",
			"type":"operator",
			"syntax":[
				"<Left> &gt; <Right>"
			],
			"display syntax":[
				"<i>Left</i> &gt; <i>Right</i>"
			],
			"associations":["com.livecode.arithmetic"],
			"summary":"Greater than relation.",
			"parameters":[{
				"name":"Left",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a number."
			},{
				"name":"Right",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a number."
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"True if <Left> is greater than <Right>, and false otherwise."
			}],
			"description":"Greater than relation."
		},{
			"id":"oxt_builder-160",
			"name":"multiplynumberby",
			"display name":"MultiplyNumberBy",
			"library":"oxt_builder",
			"type":"statement",
			"syntax":[
				"multiply <Target> by <Value>"
			],
			"display syntax":[
				"multiply <i>Target</i> by <i>Value</i>"
			],
			"associations":["com.livecode.arithmetic"],
			"summary":"Multiplies <Target> by <Value>.",
			"parameters":[{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a numeric variable."
			},{
				"name":"Value",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a number."
			}],
			"examples":[{
				"script":"variable tVar as Number\nput 2 into tVar\nmultiply tVar by 2 -- tVar contains 4"
			}],
			"description":"Multiplies the number <Target> by <Value>.\n\n>*Note:* It is a syntax error if <Target> does not evaluate to a variable.",
			"tags":["math"]
		},{
			"id":"oxt_builder-161",
			"name":"deletedirectory",
			"display name":"DeleteDirectory",
			"library":"oxt_builder",
			"type":"statement",
			"syntax":[
				"delete directory <Directory>"
			],
			"display syntax":[
				"delete directory <i>Directory</i>"
			],
			"associations":["com.livecode.file"],
			"summary":"Delete a directory.",
			"parameters":[{
				"name":"Directory",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a filesystem path."
			}],
			"description":"Deletes a directory.  The directory must be empty.",
			"tags":["io","filesystem"]
		},{
			"id":"oxt_builder-162",
			"name":"com.livecode.file",
			"display name":"com.livecode.file",
			"library":"oxt_builder",
			"type":"module",
			"display syntax":[
				"com.livecode.file"
			],
			"associations":["com.livecode.file"],
			"summary":"This module specifies the syntax definitions and bindings for\nfilesystem operations in LiveCode Builder.\n\n>*Note:* This module is currently experimental and unstable.  The\n>syntax is likely to change in future versions of LiveCode.",
			"description":"This module specifies the syntax definitions and bindings for\nfilesystem operations in LiveCode Builder.\n\n>*Note:* This module is currently experimental and unstable.  The\n>syntax is likely to change in future versions of LiveCode."
		},{
			"id":"oxt_builder-163",
			"name":"getdirectoryentries",
			"display name":"GetDirectoryEntries",
			"library":"oxt_builder",
			"type":"operator",
			"syntax":[
				"the entries of directory <Directory>"
			],
			"display syntax":[
				"the entries of directory <i>Directory</i>"
			],
			"associations":["com.livecode.file"],
			"summary":"List the contents of a directory.",
			"parameters":[{
				"name":"Directory",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a filesystem path."
			}],
			"description":"Returns a List containing the directory entries of a directory.  The\ndirectory must exist.",
			"tags":["io","filesystem"]
		},{
			"id":"oxt_builder-164",
			"name":"deletefile",
			"display name":"DeleteFile",
			"library":"oxt_builder",
			"type":"statement",
			"syntax":[
				"delete file <File>"
			],
			"display syntax":[
				"delete file <i>File</i>"
			],
			"associations":["com.livecode.file"],
			"summary":"Delete a file from the filesystem.",
			"parameters":[{
				"name":"File",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a filesystem path."
			}],
			"description":"Deletes the specified file.  The file must exist.",
			"tags":["io","filesystem"]
		},{
			"id":"oxt_builder-165",
			"name":"createdirectory",
			"display name":"CreateDirectory",
			"library":"oxt_builder",
			"type":"statement",
			"syntax":[
				"create directory <Directory>"
			],
			"display syntax":[
				"create directory <i>Directory</i>"
			],
			"associations":["com.livecode.file"],
			"summary":"Create a named directory.",
			"parameters":[{
				"name":"Directory",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a filesystem path."
			}],
			"description":"Creates a new, empty directory.  The directory must not already exist.",
			"tags":["io","filesystem"]
		},{
			"id":"oxt_builder-166",
			"name":"filecontents",
			"display name":"FileContents",
			"library":"oxt_builder",
			"type":"operator",
			"syntax":[
				"the contents of file <File>"
			],
			"display syntax":[
				"the contents of file <i>File</i>"
			],
			"associations":["com.livecode.file"],
			"summary":"The data stored in a file.",
			"parameters":[{
				"name":"File",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a filesystem path."
			}],
			"description":"The raw data stored in a file.\n\n>*Note:* Setting the contents of a file will replace the file with a\n>newly-created file with the new contents.",
			"tags":["io","filesystem"]
		},{
			"id":"oxt_builder-167",
			"name":"com.livecode.typeconvert",
			"display name":"com.livecode.typeconvert",
			"library":"oxt_builder",
			"type":"module",
			"display syntax":[
				"com.livecode.typeconvert"
			],
			"associations":["com.livecode.typeconvert"],
			"summary":"This library consists of the operations for performing complex type conversion in LiveCode Builder.",
			"description":"This library consists of the operations for performing complex type conversion in LiveCode Builder."
		},{
			"id":"oxt_builder-168",
			"name":"stringsplitby",
			"display name":"StringSplitBy",
			"library":"oxt_builder",
			"type":"statement",
			"syntax":[
				"split <Target> by <Delimiter>"
			],
			"display syntax":[
				"split <i>Target</i> by <i>Delimiter</i>"
			],
			"associations":["com.livecode.typeconvert"],
			"summary":"Splits the string in <Target> into a list of strings, using <Delimiter>\n                as the delimiter.",
			"parameters":[{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a string container."
			},{
				"name":"Delimiter",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a string."
			}],
			"examples":[{
				"script":"variable tVar as String\n    put \"first,second,third,fourth,fifth\" into tVar\n    variable tSplit as List\n    split tVar by \",\" into tSplit\n    put element 1 of tSplit into tFirstElement // tFirstElement contains \"first\""
			}],
			"value":[{
				"name":"the result",
				"type":"",
				"description":"The list of strings."
			}],
			"description":"Use the split command to convert a string representation of a list into a genuine (ordered) list.",
			"tags":["type conversion"]
		},{
			"id":"oxt_builder-169",
			"name":"combinelistwith",
			"display name":"CombineListWith",
			"library":"oxt_builder",
			"type":"statement",
			"syntax":[
				"combine <Target> with <Delimiter>"
			],
			"display syntax":[
				"combine <i>Target</i> with <i>Delimiter</i>"
			],
			"associations":["com.livecode.typeconvert"],
			"summary":"Combines the list of strings in <Target>, using <Delimiter>\n                as the delimiter. ",
			"parameters":[{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a list container."
			},{
				"name":"Delimiter",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a string."
			}],
			"examples":[{
				"script":"variable tWords as List\nput [\"A\",\"List\",\"of\",\"words\"] into tWords\n\nvariable tString as String\ncombine tWords with \" \" into tString\n-- tString contains \"A List of words\""
			}],
			"value":[{
				"name":"the result",
				"type":"",
				"description":"The combined string."
			}],
			"description":"Use the combine command to convert a list into a string representation of the list.\n\n>*Note:* The list *must* consist entirely of string elements, otherwise the combine command will throw an error.",
			"tags":["type conversion"]
		},{
			"id":"oxt_builder-170",
			"name":"reversecharsof",
			"display name":"ReverseCharsOf",
			"library":"oxt_builder",
			"type":"statement",
			"syntax":[
				"reverse <Target>"
			],
			"display syntax":[
				"reverse <i>Target</i>"
			],
			"associations":["com.livecode.char"],
			"summary":"Reverse a string",
			"parameters":[{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"A string"
			}],
			"examples":[{
				"script":"variable tString\nput \"abcdef\" into tString\nreverse tString\nexpect that tString is \"fedcba\""
			}],
			"description":"Reverses the order of characters in the <Target>.",
			"tags":["strings"]
		},{
			"id":"oxt_builder-171",
			"name":"deletesingletoncharof",
			"display name":"DeleteSingletonCharOf",
			"library":"oxt_builder",
			"type":"statement",
			"syntax":[
				"delete char <Index> of <Target>"
			],
			"display syntax":[
				"delete char <i>Index</i> of <i>Target</i>"
			],
			"associations":["com.livecode.char"],
			"summary":"Deletes the char at index <Index> in <Target>.",
			"parameters":[{
				"name":"Index",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a valid integer index of <Target>."
			},{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"A string container."
			}],
			"examples":[{
				"script":"variable tVar as String\nput \"thorough\" into tVar\ndelete char 3 of tVar -- tVar contains \"through\""
			}],
			"description":"Replaces the char at the given index with the empty string.\n\n>*Note:* It is an error if <Index> is out of range.",
			"tags":["strings"]
		},{
			"id":"oxt_builder-172",
			"name":"repeatforeachchar",
			"display name":"RepeatForEachChar",
			"library":"oxt_builder",
			"type":"iterator",
			"syntax":[
				"char <Iterand>"
			],
			"display syntax":[
				"char <i>Iterand</i>"
			],
			"associations":["com.livecode.char"],
			"summary":"Repeat over the chars of a string",
			"parameters":[{
				"name":"Iterand",
				"type":"",
				"refparam":"false",
				"description":"A string container."
			}],
			"examples":[{
				"script":"variable tChar as String\nvariable tSpaceCount as Number\nrepeat for each char tChar in \\\n\t\t\"the quick brown fox jumps over the lazy dog\"\n\tif tChar is \" \" then\n\t\tadd 1 to tSpaceCount\n\tend if\nend repeat\nexpect that tSpaceCount is 8"
			}],
			"description":"Use repeat for each to perform an operation on each char of a string. On each iteration, the <Iterand> will contain the next char of the string being iterated over.",
			"tags":["strings","control structures"]
		},{
			"id":"oxt_builder-173",
			"name":"deletelastcharof",
			"display name":"DeleteLastCharOf",
			"library":"oxt_builder",
			"type":"statement",
			"syntax":[
				"delete the last char of <Target>"
			],
			"display syntax":[
				"delete the last char of <i>Target</i>"
			],
			"associations":["com.livecode.char"],
			"summary":"Deletes the last char in <Target>.",
			"parameters":[{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"A string container."
			}],
			"examples":[{
				"script":"variable tVar as String\nput \"deadliness\" into tVar\ndelete the last char of tVar -- tVar contains \"deadlines\""
			}],
			"description":"Replaces the last char in <Target> with the empty string.\n\n>*Note:* It is an error if <Target> is the empty string.",
			"tags":["strings"]
		},{
			"id":"oxt_builder-174",
			"name":"charoffset",
			"display name":"CharOffset",
			"library":"oxt_builder",
			"type":"operator",
			"syntax":[
				"the ( first | last ) offset of <Needle> in <Target>"
			],
			"display syntax":[
				"the ( first | last ) offset of <i>Needle</i> in <i>Target</i>"
			],
			"associations":["com.livecode.char"],
			"summary":"Finds the first or last occurrence of <Needle> within <Target>",
			"parameters":[{
				"name":"Needle",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a string."
			},{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a string."
			}],
			"examples":[{
				"script":"variable tVar as Number\nput the first offset of \"art\" in \"cartoon\" into tVar -- tVar contains 2"
			},{
				"script":"variable tVar as Number\nvariable tFilePath as String\nput \"/Users/user/Documents/file.txt\" into tFilePath\nput the last offset of \"/\" in tFilePath into tVar\n\nvariable tFileName as String\nput char 1 to tVar of tFilePath into tFileName -- tVar contains \"file.txt\""
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"Returns the offset of <Needle> in <Target>."
			}],
			"description":"The first (respectively last) offset of <Needle> in <Target> is number of chars between the first char of <Target> and the first (respectively last) occurrence of <Needle>. If neither first or last is specified, then the first offset is found. If <Needle> does not occur in <Target>, then the output is 0.",
			"tags":["strings"]
		},{
			"id":"oxt_builder-175",
			"name":"stringbeginswithstring",
			"display name":"StringBeginsWithString",
			"library":"oxt_builder",
			"type":"operator",
			"syntax":[
				"<Source> begins with <Prefix>"
			],
			"display syntax":[
				"<i>Source</i> begins with <i>Prefix</i>"
			],
			"associations":["com.livecode.char"],
			"summary":"Determines whether <Source> begins with <Prefix>",
			"parameters":[{
				"name":"Prefix",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a string."
			},{
				"name":"Source",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a string."
			}],
			"examples":[{
				"script":"variable tVar as String\nvariable tResult as String\nput \"abcde\" into tVar\nif tVar begins with \"abc\" then\n\tput \"success\" into tResult\nend if\t"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"Returns true if <Source> begins with <Prefix>."
			}],
			"description":"<Source> begins with <Prefix> if and only if the chars of <Prefix> occur as an initial subsequence of the chars of <Source>.\n\n>*Note:* Since \"\" is an initial substring of every string, every string begins with the empty string.",
			"tags":["strings"]
		},{
			"id":"oxt_builder-176",
			"name":"newlinecharacter",
			"display name":"NewLineCharacter",
			"library":"oxt_builder",
			"type":"expression",
			"syntax":[
				"newline"
			],
			"display syntax":[
				"newline"
			],
			"associations":["com.livecode.char"],
			"summary":"The new line character",
			"examples":[{
				"script":"variable tList as List\npush \"line 1\" onto tList\npush \"line 2\" onto tList\npush \"line 3\" onto tList\n\nvariable tLines as String\ncombine tList with newline into tLines -- tLines has 3 lines"
			}],
			"description":"Use the <newline> constant to add new lines to a string variable.",
			"tags":["strings"]
		},{
			"id":"oxt_builder-177",
			"name":"deleterangecharof",
			"display name":"DeleteRangeCharOf",
			"library":"oxt_builder",
			"type":"statement",
			"syntax":[
				"delete char <Start> to <Finish> of <Target>"
			],
			"display syntax":[
				"delete char <i>Start</i> to <i>Finish</i> of <i>Target</i>"
			],
			"associations":["com.livecode.char"],
			"summary":"Deletes the chars between indices <Start> and <Finish> in <Target>.",
			"parameters":[{
				"name":"Start",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a valid integer index of <Target>."
			},{
				"name":"Finish",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a valid integer index of <Target>."
			},{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"A string container."
			}],
			"examples":[{
				"script":"variable tVar as String\nput \"surround\" into tVar\ndelete char 2 to 4 of tVar -- tVar contains \"sound\""
			}],
			"description":"Replaces the chars between the given indices with the empty string.\n\n>*Note:* It is an error if either <Start> or <Finish> are out of range.",
			"tags":["strings"]
		},{
			"id":"oxt_builder-178",
			"name":"charisinstring",
			"display name":"CharIsInString",
			"library":"oxt_builder",
			"type":"operator",
			"syntax":[
				"<Needle> is in <Source>"
			],
			"display syntax":[
				"<i>Needle</i> is in <i>Source</i>"
			],
			"associations":["com.livecode.char"],
			"summary":"Determines whether <Needle> is in <Target>.\nTarget:An expression which evaluates to a string.",
			"parameters":[{
				"name":"Needle",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a char."
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"True if <Needle> is among the chars of <Target>, and false otherwise."
			}],
			"description":">*Note:* It is an error if <Needle> evaluates to a string consisting of more than one char.",
			"tags":["strings"]
		},{
			"id":"oxt_builder-179",
			"name":"countcharsof",
			"display name":"CountCharsOf",
			"library":"oxt_builder",
			"type":"operator",
			"syntax":[
				"the number of chars in <Target>"
			],
			"display syntax":[
				"the number of chars in <i>Target</i>"
			],
			"associations":["com.livecode.char"],
			"summary":"Counts the number of chars in <Target>.",
			"parameters":[{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a string."
			}],
			"examples":[{
				"script":"variable tVar as Number\nvariable tSource as String\nput \"hello\" into tString\nput the number of chars in tString into tVar\n\nvariable tString as String\nput the empty string into tString\t\nrepeat tVar times\n\tput \"a\" after tString\nend repeat\n\n// tString contains \"aaaaa\""
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"The number of chars in <Target>."
			}],
			"description":">*Note:* The number of chars returns the number of codeunits of the target string. It does not perform any grapheme boundary analysis.",
			"tags":["strings"]
		},{
			"id":"oxt_builder-180",
			"name":"rangecharof",
			"display name":"RangeCharOf",
			"library":"oxt_builder",
			"type":"operator",
			"syntax":[
				"char <Start> to <Finish> of <Target>"
			],
			"display syntax":[
				"char <i>Start</i> to <i>Finish</i> of <i>Target</i>"
			],
			"associations":["com.livecode.char"],
			"summary":"Designates the chars between indices <Start> and <Finish> in <Target>.",
			"parameters":[{
				"name":"Start",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a valid integer index of <Target>."
			},{
				"name":"Finish",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a valid integer index of <Target>."
			},{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a string."
			}],
			"examples":[{
				"script":"put tChars into char 5 to 10 of tString // Locates chars 5 to 10 of tString and replace them with tChars"
			},{
				"script":"get char 5 to 10 of tString // Evaluates chars 5 to 10"
			}],
			"description":"Either locates the chars between the given indices for use as the target container of another operation, or evaluates the chars at the given indices as the source of another operation.\n\n>*Note:* It is an error if either <Start> or <Finish> are out of range.",
			"tags":["strings"]
		},{
			"id":"oxt_builder-181",
			"name":"com.livecode.char",
			"display name":"com.livecode.char",
			"library":"oxt_builder",
			"type":"module",
			"display syntax":[
				"com.livecode.char"
			],
			"associations":["com.livecode.char"],
			"summary":"This library consists of the operations on chars included in the standard library of LiveCode Builder.",
			"description":"This library consists of the operations on chars included in the standard library of LiveCode Builder."
		},{
			"id":"oxt_builder-182",
			"name":"lastcharof",
			"display name":"LastCharOf",
			"library":"oxt_builder",
			"type":"operator",
			"syntax":[
				"the last char of <Target>"
			],
			"display syntax":[
				"the last char of <i>Target</i>"
			],
			"associations":["com.livecode.char"],
			"summary":"Designates the last char in <Target>.",
			"parameters":[{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a string."
			}],
			"examples":[{
				"script":"variable tVar as String\nput \"char\" into tVar\n\nvariable tLast as String\nput the last char of tVar into tLast -- tLast contains \"r\""
			}],
			"description":"Either locates the last char for use as the target container of another operation, or evaluates the last char as the source of another operation.\n\n>*Note:* It is an error if <Target> is empty.",
			"tags":["strings"]
		},{
			"id":"oxt_builder-183",
			"name":"firstcharof",
			"display name":"FirstCharOf",
			"library":"oxt_builder",
			"type":"operator",
			"syntax":[
				"the first char of <Target>"
			],
			"display syntax":[
				"the first char of <i>Target</i>"
			],
			"associations":["com.livecode.char"],
			"summary":"Designates the first char in <Target>.",
			"parameters":[{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a string."
			}],
			"examples":[{
				"script":"variable tVar as String\nput \"char\" into tVar\n\nvariable tFirst as String\nput the first char of tVar into tFirst -- tFirst contains \"c\""
			}],
			"description":"Either locates the first char for use as the target container of another operation, or evaluates the first char as the source of another operation.\n\n>*Note:* It is an error if <Target> is empty.",
			"tags":["strings"]
		},{
			"id":"oxt_builder-184",
			"name":"charoffsetafter",
			"display name":"CharOffsetAfter",
			"library":"oxt_builder",
			"type":"operator",
			"syntax":[
				"the ( first | last ) offset of <Needle> after <After> in <Target>"
			],
			"display syntax":[
				"the ( first | last ) offset of <i>Needle</i> after <i>After</i> in <i>Target</i>"
			],
			"associations":["com.livecode.char"],
			"summary":"Finds the first or last occurrence of <Needle> after a specified index in <Target>",
			"parameters":[{
				"name":"Needle",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a string."
			},{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a string."
			},{
				"name":"After",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a valid integer index of Target."
			}],
			"examples":[{
				"script":"variable tVar as Number\nput the offset of \"nse\" after 4 in \"nonsense\" into tVar -- tVar contains 2"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"Returns the offset of <Needle> after <After> in <Target>."
			}],
			"description":"The first (respectively last) offset of <Needle> in <Target> is number of chars between the first char of the substring of <Target> beginning at char <After> + 1, and the first (respectively last) occurrence of <Needle> in the substring. If neither first or last is specified, then the first offset is found. If <Needle> does not occur in the given substring of <Target>, then the output is 0.",
			"tags":["strings"]
		},{
			"id":"oxt_builder-185",
			"name":"charoffsetbefore",
			"display name":"CharOffsetBefore",
			"library":"oxt_builder",
			"type":"operator",
			"syntax":[
				"the ( first | last ) offset of <Needle> before <Before> in <Target>"
			],
			"display syntax":[
				"the ( first | last ) offset of <i>Needle</i> before <i>Before</i> in <i>Target</i>"
			],
			"associations":["com.livecode.char"],
			"summary":"Finds the first or last occurrence of <Needle> before a specified index in <Target>.",
			"parameters":[{
				"name":"Needle",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a string."
			},{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a string."
			},{
				"name":"Before",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a valid integer index of Target."
			}],
			"examples":[{
				"script":"variable tVar as Number\nvariable tLastDot as Number\nvariable tAddress as String\nvariable tTLD as String\nput \"http://www.livecode.com/index.html\" into tAddress\nput the last offset of \".\" in tAddress into tLastDot\nput the offset of \".\" before tLastDot in tAddress into tVar\nput char tVar + 1 to tVar + 3 of tAddress into tTLD -- tTLD contains \"com\""
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"Returns the offset of <Needle> before <Before> in <Target>."
			}],
			"description":"The first (respectively last) offset of <Needle> in <Target> is number of chars between the first char of <Target>, and the first (respectively last) occurrence of <Needle> in the substring of <Target> ending at char <Before> - 1. If neither first or last is specified, then the last offset is found. If <Needle> does not occur in the given substring of <Target>, then the output is 0.",
			"tags":["strings"]
		},{
			"id":"oxt_builder-186",
			"name":"stringendswithstring",
			"display name":"StringEndsWithString",
			"library":"oxt_builder",
			"type":"operator",
			"syntax":[
				"<Source> ends with <Suffix>"
			],
			"display syntax":[
				"<i>Source</i> ends with <i>Suffix</i>"
			],
			"associations":["com.livecode.char"],
			"summary":"Determines whether <Source> ends with <Suffix>",
			"parameters":[{
				"name":"Suffix",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a string."
			},{
				"name":"Source",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a string."
			}],
			"examples":[{
				"script":"variable tVar as String\nvariable tResult as String\nput \"abcde\" into tVar\nif tVar ends with \"cde\" then\n\tput \"success\" into tResult\nend if\t"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"Returns true if <Source> ends with <Suffix>."
			}],
			"description":"<Source> ends with <Suffix> if and only if the chars of <Suffix> occur as a final subsequence of the chars of <Source>.\n\n>*Note:* Since \"\" is a final substring of every string, every string ends with the empty string.",
			"tags":["strings"]
		},{
			"id":"oxt_builder-187",
			"name":"codeofchar",
			"display name":"CodeOfChar",
			"library":"oxt_builder",
			"type":"operator",
			"syntax":[
				"the code of <Target>"
			],
			"display syntax":[
				"the code of <i>Target</i>"
			],
			"associations":["com.livecode.char"],
			"summary":"Get the numeric value of a single char",
			"parameters":[{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"A string containing one character"
			}],
			"description":"Returns the Unicode codepoint index of a single character.",
			"tags":["strings"]
		},{
			"id":"oxt_builder-188",
			"name":"singletoncharof",
			"display name":"SingletonCharOf",
			"library":"oxt_builder",
			"type":"operator",
			"syntax":[
				"char <Index> of <Target>"
			],
			"display syntax":[
				"char <i>Index</i> of <i>Target</i>"
			],
			"associations":["com.livecode.char"],
			"summary":"Designates the char at index <Index> in <Target>.",
			"parameters":[{
				"name":"Index",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a valid integer index of <Target>."
			},{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a string."
			}],
			"examples":[{
				"script":"put the empty string into char 5 of tString // Locates char 5 and removes it from tString"
			},{
				"script":"get char 5 of tString // Evaluates char 5"
			}],
			"description":"Either locates the char at the given index for use as the target container of another operation, or evaluates the char at the given index as the source of another operation.\n\n>*Note:* It is an error if <Index> is out of range.",
			"tags":["strings"]
		},{
			"id":"oxt_builder-189",
			"name":"containschars",
			"display name":"ContainsChars",
			"library":"oxt_builder",
			"type":"operator",
			"syntax":[
				"<Source> contains <Needle>"
			],
			"display syntax":[
				"<i>Source</i> contains <i>Needle</i>"
			],
			"associations":["com.livecode.char"],
			"summary":"Determines whether <Source> contains <Needle>.",
			"parameters":[{
				"name":"Needle",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a string."
			},{
				"name":"Source",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a string."
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"Returns true if <Source> contains <Needle>."
			}],
			"description":"<Source> contains <Needle> if and only if the chars of <Needle> occur as a subsequence of the chars of <Source>.\n\n>*Note:* Since \"\" is a substring of every string, every string contains the empty string.",
			"tags":["strings"]
		},{
			"id":"oxt_builder-190",
			"name":"deletefirstcharof",
			"display name":"DeleteFirstCharOf",
			"library":"oxt_builder",
			"type":"statement",
			"syntax":[
				"delete the first char of <Target>"
			],
			"display syntax":[
				"delete the first char of <i>Target</i>"
			],
			"associations":["com.livecode.char"],
			"summary":"Deletes the first char in <Target>.",
			"parameters":[{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"A string container."
			}],
			"examples":[{
				"script":"variable tVar as String\nput \"seven\" into tVar\ndelete the first char of tVar -- tVar contains \"even\""
			}],
			"description":"Replaces the first char in <Target> with the empty string.\n\n>*Note:* It is an error if <Target> is the empty string.",
			"tags":["strings"]
		},{
			"id":"oxt_builder-191",
			"name":"charwithcode",
			"display name":"CharWithCode",
			"library":"oxt_builder",
			"type":"operator",
			"syntax":[
				"the char with code <Index>"
			],
			"display syntax":[
				"the char with code <i>Index</i>"
			],
			"associations":["com.livecode.char"],
			"summary":"Create a 1-char string from a number",
			"parameters":[{
				"name":"Value",
				"type":"",
				"refparam":"false",
				"description":"A Unicode codepoint index"
			}],
			"description":"Returns a string containing one Unicode character created using the\ngiven value.",
			"tags":["strings"]
		},{
			"id":"oxt_builder-192",
			"name":"com.livecode.widget.gradientrampeditor",
			"display name":"com.livecode.widget.gradientrampeditor",
			"library":"oxt_builder",
			"type":"widget",
			"display syntax":[
				"com.livecode.widget.gradientrampeditor"
			],
			"associations":["com.livecode.widget.gradientrampeditor"],
			"summary":"This widget is displays a gradient according to the value of its *gradientStops* property.",
			"description":"This widget is displays a gradient according to the value of its *gradientStops* property."
		},{
			"id":"oxt_builder-193",
			"name":"gradientstopschanged",
			"display name":"gradientStopsChanged",
			"library":"oxt_builder",
			"type":"message",
			"syntax":[
				"gradientStopsChanged"
			],
			"display syntax":[
				"gradientStopsChanged"
			],
			"associations":["com.livecode.widget.gradientrampeditor"],
			"summary":"Sent when the gradientStops property of the widget changes",
			"examples":[{
				"script":"    on gradientStopsChanged\n        set the fillGradient[\"ramp\"] of graphic 1 to \\\n           the gradientStops of the target\n    end gradientStopsChanged"
			}],
			"description":"Handle the <gradientStopsChanged> message to perform an operation when \nthe gradientStops property of a gradient ramp editor widget changes."
		},{
			"id":"oxt_builder-194",
			"name":"selectedstopchanged",
			"display name":"selectedStopChanged",
			"library":"oxt_builder",
			"type":"message",
			"syntax":[
				"on selectedStopChanged <pIndex>"
			],
			"display syntax":[
				"on selectedStopChanged <i>pIndex</i>"
			],
			"associations":["com.livecode.widget.gradientrampeditor"],
			"summary":"Sent when a new gradient stop is selected",
			"parameters":[{
				"name":"pIndex",
				"type":"",
				"refparam":"false",
				"description":"The new selected stop index, or 0 if no stop is selected."
			}],
			"examples":[{
				"script":"    on selectedStopChanged pIndex\n        if pIndex is 0 then\n            exit selectedStopChanged\n        end if\n\n        answer color\n        if the result is not \"cancel\" then\n            local tStops\n            put the gradientStops of the target into tStops\n            put it into item 2 to 4 of line pIndex of tStops\n            set the gradientStops of the target to tStops\n        end if\n\n    end selectedStopChanged"
			}],
			"description":"Handle the <selectedStopChanged> message to perform an operation when \nthe selectedStop property of a gradient ramp editor widget changes."
		},{
			"id":"oxt_builder-195",
			"name":"selectedstop",
			"display name":"selectedStop",
			"library":"oxt_builder",
			"type":"property",
			"syntax":[
				"get the selectedStop of <widget>",
				"set the selectedStop of <widget> to <pIndex>"
			],
			"display syntax":[
				"get the selectedStop of <i>widget</i>"
			],
			"associations":["com.livecode.widget.gradientrampeditor"],
			"summary":"The <selectedStop> property controls which gradient stop (if any) is selected.",
			"parameters":[{
				"name":"pIndex",
				"type":"",
				"refparam":"false",
				"description":"An integer between 0 and the current number of gradient stops"
			}],
			"examples":[{
				"script":"    -- Create 10 equally spaced stops with random color values\n    local tGradientStops, tStop\n    repeat with x = 1 to 10\n        put x/10 & comma & random(255) & comma & random(255) & comma & random(255) & comma & random(255) into tStop\n        if tGradientStops is empty then\n            put tStop into tGradientStops\n        else\n            put return & tStop after tGradientStops\n        end if\n    end repeat\n    set the gradientStops of widget \"Gradient Ramp Editor\" to tGradientStops\n\n    -- if no stop is selected, select the first one\n    if the selectedStop of widget \"Gradient Ramp Editor\" is 0 then\n        set the selectedStop of widget \"Gradient Ramp Editor\" to 1\n    end if"
			}],
			"description":"If any gradient stop is selected, its index is returned by the <selectedStop>\nproperty. Otherwise the property returns 0. Setting the <selectedStop> property\nto 0 causes the currently selected gradient stop to be deselected."
		},{
			"id":"oxt_builder-196",
			"name":"gradientstops",
			"display name":"gradientStops",
			"library":"oxt_builder",
			"type":"property",
			"syntax":[
				"get the gradientStops of <widget>",
				"set the gradientStops of <widget> to <pGradientStops>"
			],
			"display syntax":[
				"get the gradientStops of <i>widget</i>"
			],
			"associations":["com.livecode.widget.gradientrampeditor"],
			"summary":"The <gradientStops> property controls the offset and color of each division of the gradient.",
			"parameters":[{
				"name":"pGradientStops",
				"type":"",
				"refparam":"false",
				"description":"A list, one per line, of comma-delimited strings consisting of the offset of the gradient stop, followed by the color and alpha."
			}],
			"examples":[{
				"script":"    -- Create 10 equally spaced stops with random color values\n    local tGradientStops, tStop\n    repeat with x = 1 to 10\n        put x/10 & comma & random(255) & comma & random(255) & comma & random(255) & comma & random(255) into tStop\n        if tGradientStops is empty then\n            put tStop into tGradientStops\n        else\n            put return & tStop after tGradientStops\n        end if\n    end repeat\n    set the gradientStops of widget \"Gradient Ramp Editor\" to tGradientStops"
			}],
			"description":"Color gradients are smooth transitions between the colors defined at consecutive offsets. The <gradientStops> property represents the offset and color of each of these stops.\n"
		},{
			"id":"oxt_builder-197",
			"name":"absoperator",
			"display name":"AbsOperator",
			"library":"oxt_builder",
			"type":"operator",
			"syntax":[
				"the abs of <Operand>"
			],
			"display syntax":[
				"the abs of <i>Operand</i>"
			],
			"associations":["com.livecode.math"],
			"summary":"Absolute value operator.",
			"parameters":[{
				"name":"Operand",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a number."
			}],
			"examples":[{
				"script":"variable tVar as Number\nput the trunc of 3.9 into tVar -- tVar contains 3"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"The absolute value of <Operand>."
			}],
			"description":"The absolute value of <Operand> is the value of <Operand> if it is greater than or equal to 0, or the negation of the value of <Operand> if it is less than zero.",
			"tags":["math"]
		},{
			"id":"oxt_builder-198",
			"name":"baseelogoperator",
			"display name":"BaseELogOperator",
			"library":"oxt_builder",
			"type":"operator",
			"syntax":[
				"ln(<Operand>)"
			],
			"display syntax":[
				"ln(<i>Operand</i>)"
			],
			"associations":["com.livecode.math"],
			"summary":"Natural log operator.",
			"parameters":[{
				"name":"Operand",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a number."
			}],
			"examples":[{
				"script":"variable tVar as Number\nput ln(exp(3)) into tVar -- tVar contains approximately 3"
			}],
			"description":"Natural log operator.",
			"tags":["math"]
		},{
			"id":"oxt_builder-199",
			"name":"maxlistoperator",
			"display name":"MaxListOperator",
			"library":"oxt_builder",
			"type":"operator",
			"syntax":[
				"the maximum value of <ValueList>"
			],
			"display syntax":[
				"the maximum value of <i>ValueList</i>"
			],
			"associations":["com.livecode.math"],
			"summary":"Max operator.\nList:An expression that evaluates to a list.",
			"value":[{
				"name":"return",
				"type":"",
				"description":"The maximum value attained by the elements of <List>."
			}],
			"description":">*Note:* It is an error if any element of <List> is non-numeric.",
			"tags":["math"]
		},{
			"id":"oxt_builder-200",
			"name":"baseconvert",
			"display name":"BaseConvert",
			"library":"oxt_builder",
			"type":"operator",
			"syntax":[
				"<Operand> converted from base <Source> to base <Target>"
			],
			"display syntax":[
				"<i>Operand</i> converted from base <i>Source</i> to base <i>Target</i>"
			],
			"associations":["com.livecode.math"],
			"summary":"Converts the base of <Operand>",
			"parameters":[{
				"name":"Operand",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a string."
			},{
				"name":"Source",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to an integer."
			},{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to an integer."
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"A string representation <Operand> interpreted as a number in base <From>, converted to base <To>."
			}],
			"description":"Interprets a string in the desired source base and converts it to the desired target base, and returns a string representation.\n\n>*Note:* The source and destination bases must be integers between 2 and 32.",
			"tags":["math"]
		},{
			"id":"oxt_builder-201",
			"name":"minlistoperator",
			"display name":"MinListOperator",
			"library":"oxt_builder",
			"type":"operator",
			"syntax":[
				"the minimum value of <ValueList>"
			],
			"display syntax":[
				"the minimum value of <i>ValueList</i>"
			],
			"associations":["com.livecode.math"],
			"summary":"Min operator.\nList:An expression that evaluates to a list.",
			"value":[{
				"name":"return",
				"type":"",
				"description":"The minimal value attained by the elements of <List>."
			}],
			"description":">*Note:* It is an error if any element of <List> is non-numeric.",
			"tags":["math"]
		},{
			"id":"oxt_builder-202",
			"name":"expoperator",
			"display name":"ExpOperator",
			"library":"oxt_builder",
			"type":"operator",
			"syntax":[
				"exp(<Operand>)"
			],
			"display syntax":[
				"exp(<i>Operand</i>)"
			],
			"associations":["com.livecode.math"],
			"summary":"Exponentiation operator.",
			"parameters":[{
				"name":"Operand",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a number."
			}],
			"examples":[{
				"script":"variable tVar as Number\nput the exp(ln(100)) into tVar -- tVar contains approximately 100"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"e to the power of <Operand>"
			}],
			"description":"Exponentiation operator.",
			"tags":["math"]
		},{
			"id":"oxt_builder-203",
			"name":"baseconvertto",
			"display name":"BaseConvertTo",
			"library":"oxt_builder",
			"type":"operator",
			"syntax":[
				"<Operand> converted to base <Target>"
			],
			"display syntax":[
				"<i>Operand</i> converted to base <i>Target</i>"
			],
			"associations":["com.livecode.math"],
			"summary":"Converts the base of <Operand>",
			"parameters":[{
				"name":"Operand",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to an integer."
			},{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to an integer."
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"A string representation of <Operand> in base <Target>."
			}],
			"description":"Converts a decimal into the desired base, and returns a string representation.\n\n>*Note:* The destination base must be an integer between 2 and 32.",
			"tags":["math"]
		},{
			"id":"oxt_builder-204",
			"name":"base10logoperator",
			"display name":"Base10LogOperator",
			"library":"oxt_builder",
			"type":"operator",
			"syntax":[
				"log(<Operand>)"
			],
			"display syntax":[
				"log(<i>Operand</i>)"
			],
			"associations":["com.livecode.math"],
			"summary":"Base 10 log operator.",
			"parameters":[{
				"name":"Operand",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a number."
			}],
			"examples":[{
				"script":"variable tVar as Number\nput the log of 10000 into tVar -- tVar contains 5"
			}],
			"description":"Base 10 log operator.",
			"tags":["math"]
		},{
			"id":"oxt_builder-205",
			"name":"squarerootoperator",
			"display name":"SquareRootOperator",
			"library":"oxt_builder",
			"type":"operator",
			"syntax":[
				"sqrt(<Operand>)"
			],
			"display syntax":[
				"sqrt(<i>Operand</i>)"
			],
			"associations":["com.livecode.math"],
			"summary":"Square root operator.",
			"parameters":[{
				"name":"Operand",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a number."
			}],
			"examples":[{
				"script":"variable tVar as Number\nput sqrt(9) into tVar -- tVar contains 3"
			},{
				"script":"variable tVar as Number\nput the square root of 4 into tVar -- tVar contains 2"
			}],
			"description":"The square root of a number is the number which must be\nsquared to obtain number : sqrt(number)^2 is equal to number.",
			"tags":["math"]
		},{
			"id":"oxt_builder-206",
			"name":"binaryarctanoperator",
			"display name":"BinaryArctanOperator",
			"library":"oxt_builder",
			"type":"operator",
			"syntax":[
				"atan2(<yCoord>,<xCoord>)"
			],
			"display syntax":[
				"atan2(<i>yCoord</i>,<i>xCoord</i>)"
			],
			"associations":["com.livecode.math"],
			"summary":"Binary arctan operator.",
			"parameters":[{
				"name":"yCoord",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a number."
			},{
				"name":"xCoord",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a number."
			}],
			"examples":[{
				"script":"    variable tVar as Number\n    put atan2(-1,-1) into tVar --tVar contains ‚àí3œÄ/4."
			},{
				"script":"    variable tVar as Number\n    put the binary arctangent of -1 and -1 into tVar --tVar contains ‚àí3œÄ/4."
			}],
			"description":"The binary arctan operator returns the angle in radians between the x-axis and the line from the origin to the point (xCoord, yCoord).\nThe angle returned has absolute value less than pi: ‚àíœÄ < arctan2(y, x) ‚â§ œÄ.",
			"tags":["math"]
		},{
			"id":"oxt_builder-207",
			"name":"arcsinoperator",
			"display name":"ArcsinOperator",
			"library":"oxt_builder",
			"type":"operator",
			"syntax":[
				"asin(<Operand>)"
			],
			"display syntax":[
				"asin(<i>Operand</i>)"
			],
			"associations":["com.livecode.math"],
			"summary":"Arcsin operator.",
			"parameters":[{
				"name":"Operand",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a number."
			}],
			"examples":[{
				"script":"variable tVar as Number\nput the asin(-1) into tVar -- tVar contains -pi/2"
			},{
				"script":"variable tVar as Number\nput the arcsine of 1 into tVar -- tVar contains pi/2"
			}],
			"description":"The inverse of the sin operator.",
			"tags":["math"]
		},{
			"id":"oxt_builder-208",
			"name":"truncoperator",
			"display name":"TruncOperator",
			"library":"oxt_builder",
			"type":"operator",
			"syntax":[
				"the trunc of <Operand>"
			],
			"display syntax":[
				"the trunc of <i>Operand</i>"
			],
			"associations":["com.livecode.math"],
			"summary":"Truncation operator.",
			"parameters":[{
				"name":"Operand",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a number."
			}],
			"examples":[{
				"script":"variable tVar as Number\nput the trunc of 3.9 into tVar -- tVar contains 3"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"<Operand> truncated."
			}],
			"description":"The trunc of <Operand> is the integer part of the decimal representation of <Operand>.",
			"tags":["math"]
		},{
			"id":"oxt_builder-209",
			"name":"com.livecode.math",
			"display name":"com.livecode.math",
			"library":"oxt_builder",
			"type":"module",
			"display syntax":[
				"com.livecode.math"
			],
			"associations":["com.livecode.math"],
			"summary":"This library consists of the mathematical operations included in the standard library of LiveCode Builder.",
			"description":"This library consists of the mathematical operations included in the standard library of LiveCode Builder."
		},{
			"id":"oxt_builder-210",
			"name":"sinoperator",
			"display name":"SinOperator",
			"library":"oxt_builder",
			"type":"operator",
			"syntax":[
				"sin(<Operand>)"
			],
			"display syntax":[
				"sin(<i>Operand</i>)"
			],
			"associations":["com.livecode.math"],
			"summary":"Sin operator.",
			"parameters":[{
				"name":"Operand",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a number."
			}],
			"examples":[{
				"script":"variable tVar as Number\nput sin(pi / 2) into tVar -- tVar contains 1"
			},{
				"script":"variable tVar as Number\nput the sine of pi into tVar -- tVar contains 0"
			}],
			"description":"Sin operator.",
			"tags":["math"]
		},{
			"id":"oxt_builder-211",
			"name":"arctanoperator",
			"display name":"ArctanOperator",
			"library":"oxt_builder",
			"type":"operator",
			"syntax":[
				"atan(<Operand>)"
			],
			"display syntax":[
				"atan(<i>Operand</i>)"
			],
			"associations":["com.livecode.math"],
			"summary":"Arctan operator.",
			"parameters":[{
				"name":"Operand",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a number."
			}],
			"examples":[{
				"script":"variable tVar as Number\nput atan(-1) into tVar -- tVar contains -pi / 4"
			},{
				"script":"variable tVar as Number\nput the arctangent of 1 into tVar -- tVar contains pi / 4"
			}],
			"description":"The inverse of the tan operator.",
			"tags":["math"]
		},{
			"id":"oxt_builder-212",
			"name":"cosoperator",
			"display name":"CosOperator",
			"library":"oxt_builder",
			"type":"operator",
			"syntax":[
				"cos(<Operand>)"
			],
			"display syntax":[
				"cos(<i>Operand</i>)"
			],
			"associations":["com.livecode.math"],
			"summary":"Cos operator.",
			"parameters":[{
				"name":"Operand",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a number."
			}],
			"examples":[{
				"script":"variable tVar as Number\nput cos(pi) into tVar -- tVar contains -1"
			}],
			"description":"Cos operator.",
			"tags":["math"]
		},{
			"id":"oxt_builder-213",
			"name":"maxoperator",
			"display name":"MaxOperator",
			"library":"oxt_builder",
			"type":"operator",
			"syntax":[
				"the maximum of <Left> and <Right>"
			],
			"display syntax":[
				"the maximum of <i>Left</i> and <i>Right</i>"
			],
			"associations":["com.livecode.math"],
			"summary":"Max operator.",
			"parameters":[{
				"name":"Left",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a number."
			},{
				"name":"Right",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a number."
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"The value of <Left>, if it is greater than the value of <Right>, and the value of <Right> otherwise."
			}],
			"description":"Max operator.",
			"tags":["math"]
		},{
			"id":"oxt_builder-214",
			"name":"arccosoperator",
			"display name":"ArccosOperator",
			"library":"oxt_builder",
			"type":"operator",
			"syntax":[
				"acos(<Operand>)"
			],
			"display syntax":[
				"acos(<i>Operand</i>)"
			],
			"associations":["com.livecode.math"],
			"summary":"Arccos operator.",
			"parameters":[{
				"name":"Operand",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a number."
			}],
			"examples":[{
				"script":"variable tVar as Number\nput acos(0) into tVar -- tVar contains pi/2"
			},{
				"script":"variable tVar as Number\nput the arccosine of -1 into tVar -- tVar contains pi"
			}],
			"description":"The inverse of the cos operator.",
			"tags":["math"]
		},{
			"id":"oxt_builder-215",
			"name":"minoperator",
			"display name":"MinOperator",
			"library":"oxt_builder",
			"type":"operator",
			"syntax":[
				"the minimum of <Left> and <Right>"
			],
			"display syntax":[
				"the minimum of <i>Left</i> and <i>Right</i>"
			],
			"associations":["com.livecode.math"],
			"summary":"Min operator.",
			"parameters":[{
				"name":"Left",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a number."
			},{
				"name":"Right",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a number."
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"The value of <Left>, if it is less than the value of <Right>, and the value of <Right> otherwise."
			}],
			"description":"Min operator.",
			"tags":["math"]
		},{
			"id":"oxt_builder-216",
			"name":"randomnumber",
			"display name":"RandomNumber",
			"library":"oxt_builder",
			"type":"expression",
			"syntax":[
				"any number"
			],
			"display syntax":[
				"any number"
			],
			"associations":["com.livecode.math"],
			"summary":"Generates a pseudo-random number.",
			"examples":[{
				"script":"variable tVar as Number\nput any number into tVar -- 0 <= tVar <= 1"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"A real between 0.0 and 1.0."
			}],
			"description":"Generates a pseudo-random number.",
			"tags":["math"]
		},{
			"id":"oxt_builder-217",
			"name":"baseconvertfrom",
			"display name":"BaseConvertFrom",
			"library":"oxt_builder",
			"type":"operator",
			"syntax":[
				"<Operand> converted from base <Source>"
			],
			"display syntax":[
				"<i>Operand</i> converted from base <i>Source</i>"
			],
			"associations":["com.livecode.math"],
			"summary":"Converts the base of <Operand>",
			"parameters":[{
				"name":"Operand",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a string."
			},{
				"name":"Source",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to an integer."
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"<Operand> converted to base 10."
			}],
			"description":"Interprets a string in the desired base and converts it to decimal.\n\n>*Note:* The source base must be an integer between 2 and 32.",
			"tags":["math"]
		},{
			"id":"oxt_builder-218",
			"name":"powoperator",
			"display name":"PowOperator",
			"library":"oxt_builder",
			"type":"operator",
			"syntax":[
				"<Left> ^ <Right>"
			],
			"display syntax":[
				"<i>Left</i> ^ <i>Right</i>"
			],
			"associations":["com.livecode.math"],
			"summary":"Binary exponentiation operation.",
			"parameters":[{
				"name":"Left",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a number."
			},{
				"name":"Right",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a number."
			}],
			"examples":[{
				"script":"variable tVar as Number\nput 5^2 into tVar -- tVar contains 25"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"The result of raising <Left> to the power <Right>."
			}],
			"description":"Binary exponentiation operation.",
			"tags":["math"]
		},{
			"id":"oxt_builder-219",
			"name":"tanoperator",
			"display name":"TanOperator",
			"library":"oxt_builder",
			"type":"operator",
			"syntax":[
				"tan(<Operand>)"
			],
			"display syntax":[
				"tan(<i>Operand</i>)"
			],
			"associations":["com.livecode.math"],
			"summary":"Tan operator.",
			"parameters":[{
				"name":"Operand",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a number."
			}],
			"examples":[{
				"script":"variable tVar as Number\nput the tan(pi) into tVar -- tVar contains 0"
			},{
				"script":"variable tVar as Number\nput the tangent of pi /4 into tVar -- tVar contains approximately 1"
			}],
			"description":"Tan operator.",
			"tags":["math"]
		},{
			"id":"oxt_builder-220",
			"name":"canvassetcolor",
			"display name":"canvasSetColor",
			"library":"oxt_builder",
			"type":"handler",
			"syntax":[
				"canvasSetColor(<pRed>,<pGreen>,<pBlue>,<pAlpha>)"
			],
			"display syntax":[
				"canvasSetColor(<i>pRed</i>,<i>pGreen</i>,<i>pBlue</i>,<i>pAlpha</i>)"
			],
			"associations":["com.livecode.library.canvas"],
			"summary":"Sets the current color of the canvas to the given RGBA value.",
			"parameters":[{
				"name":"pRed",
				"type":"",
				"refparam":"false",
				"description":"The red component of the color to set."
			},{
				"name":"pGreen",
				"type":"",
				"refparam":"false",
				"description":"The green component of the color to set."
			},{
				"name":"pBlue",
				"type":"",
				"refparam":"false",
				"description":"The blue component of the color to set."
			},{
				"name":"pAlpha",
				"type":"",
				"refparam":"false",
				"description":"The alpha value of the color to set."
			}],
			"description":"Sets the current color of the canvas to the given RGBA value.\n",
			"tags":["canvas library"]
		},{
			"id":"oxt_builder-221",
			"name":"canvasapplytoimage",
			"display name":"canvasApplyToImage",
			"library":"oxt_builder",
			"type":"handler",
			"syntax":[
				"canvasApplyToImage(<pObjectId>)"
			],
			"display syntax":[
				"canvasApplyToImage(<i>pObjectId</i>)"
			],
			"associations":["com.livecode.library.canvas"],
			"summary":"Copies the current contents of the canvas to the specified image object.",
			"parameters":[{
				"name":"pObjectId",
				"type":"",
				"refparam":"false",
				"description":"A string which is an object chunk referring to an image."
			}],
			"description":"This handler copies the current contents of the canvas to the specified image object.",
			"tags":["canvas library"]
		},{
			"id":"oxt_builder-222",
			"name":"canvascomputeboundingboxofpath",
			"display name":"canvasComputeBoundingBoxOfPath",
			"library":"oxt_builder",
			"type":"handler",
			"syntax":[
				"canvasComputeBoundingBoxOfPath(<pPathString>)"
			],
			"display syntax":[
				"canvasComputeBoundingBoxOfPath(<i>pPathString</i>)"
			],
			"associations":["com.livecode.library.canvas"],
			"summary":"Returns the bounding box of an SVG path.",
			"parameters":[{
				"name":"pPathString",
				"type":"",
				"refparam":"false",
				"description":"The SVG Path string to process"
			}],
			"description":"Parses the SVG path string and computes the tight bounding box.",
			"tags":["canvas library"]
		},{
			"id":"oxt_builder-223",
			"name":"canvasdestroy",
			"display name":"canvasDestroy",
			"library":"oxt_builder",
			"type":"handler",
			"syntax":[
				"canvasDestroy()"
			],
			"display syntax":[
				"canvasDestroy()"
			],
			"associations":["com.livecode.library.canvas"],
			"summary":"Destroys the canvas",
			"description":"Destroys the canvas by simply assigning nothing to the canvas variable.",
			"tags":["canvas library"]
		},{
			"id":"oxt_builder-224",
			"name":"canvasfillcircle",
			"display name":"canvasFillCircle",
			"library":"oxt_builder",
			"type":"handler",
			"syntax":[
				"canvasFillCircle(<pX>,<pY>,<pRadius>)"
			],
			"display syntax":[
				"canvasFillCircle(<i>pX</i>,<i>pY</i>,<i>pRadius</i>)"
			],
			"associations":["com.livecode.library.canvas"],
			"summary":"Draws a filled circle.",
			"parameters":[{
				"name":"pX",
				"type":"",
				"refparam":"false",
				"description":"The x-coordinate of the centre of the circle."
			},{
				"name":"pY",
				"type":"",
				"refparam":"false",
				"description":"The y-coordinate of the centre of the circle."
			},{
				"name":"pRadius",
				"type":"",
				"refparam":"false",
				"description":"The radius of the circle."
			}],
			"description":"Fills a circle of the given radius at the given position in the canvas.",
			"tags":["canvas library"]
		},{
			"id":"oxt_builder-225",
			"name":"canvascreate",
			"display name":"canvasCreate",
			"library":"oxt_builder",
			"type":"handler",
			"syntax":[
				"canvasCreate(<pWidth>,<pHeight>)"
			],
			"display syntax":[
				"canvasCreate(<i>pWidth</i>,<i>pHeight</i>)"
			],
			"associations":["com.livecode.library.canvas"],
			"summary":"Creates a canvas of the given size for the other handlers to use.",
			"parameters":[{
				"name":"pWidth",
				"type":"",
				"refparam":"false",
				"description":"The width of the created canvas."
			},{
				"name":"pHeight",
				"type":"",
				"refparam":"false",
				"description":"The height of the created canvas."
			}],
			"description":"Creates a canvas of the given size for the other handlers to use.",
			"tags":["canvas library"]
		},{
			"id":"oxt_builder-226",
			"name":"com.livecode.library.canvas",
			"display name":"com.livecode.library.canvas",
			"library":"oxt_builder",
			"type":"library",
			"display syntax":[
				"com.livecode.library.canvas"
			],
			"associations":["com.livecode.library.canvas"],
			"summary":"Gives access to the LiveCode Builder canvas syntax from LiveCode Script",
			"description":"This library wraps a few simple handlers of the LiveCode Builder Canvas\nmodule to provide access to the syntax for creating and manipulating\ncanvas objects.\n\nFor example:\n\n    canvasCreate 100, 100\n\tcanvasSetColor 1, 0, 0, 1\n\tcanvasFillCircle 50, 50, 25\n\tcanvasApplyToImage \"image 1\"\n    canvasDestroy\n\nThis creates a canvas of size 100x100, fills a circle of radius 25 at\nthe centre, then copies the contents of the canvas to 'image 1' (which\nmust already exist)."
		},{
			"id":"oxt_builder-227",
			"name":"itemlabels",
			"display name":"itemLabels",
			"library":"oxt_builder",
			"type":"property",
			"syntax":[
				"get the itemLabels of <widget>",
				"set the itemLabels of <widget> to <labelList>"
			],
			"display syntax":[
				"get the itemLabels of <i>widget</i>"
			],
			"associations":["com.livecode.widget.segmented"],
			"summary":"The labels displayed by each segment",
			"value":[{
				"name":"value",
				"type":"",
				"description":"A comma-delimited list of labels for the segments."
			}],
			"description":"The labels of each segment in the control.  The <itemLabels> are\ndisplayed by the widget when the <itemStyle> is set to show labels.\n\nIf any of the <itemLabels> are empty, those segments have no label.\n\nWhen you set the <itemLabels> to a string that has fewer labels than\nthe <itemCount>, the remaining segments' labels are set to empty.\n\nWhen you set the <itemLabels> to a string that has more labels than\nthe <itemCount>, the extra labels are ignored.",
			"references":{
				"property":["itemCount","itemStyle","foreColor"]
			}
		},{
			"id":"oxt_builder-228",
			"name":"hiliteditems",
			"display name":"hilitedItems",
			"library":"oxt_builder",
			"type":"property",
			"syntax":[
				"get the hilitedItems of <widget>",
				"set the hilitedItems of <widget> to <indexList>"
			],
			"display syntax":[
				"get the hilitedItems of <i>widget</i>"
			],
			"associations":["com.livecode.widget.segmented"],
			"summary":"The currently highlighted segment indices",
			"value":[{
				"name":"value",
				"type":"",
				"description":"A comma-delimited list of segment indices."
			}],
			"description":"The segment numbers of the highlighted segments of the control.  Each\nitem in the <hilitedItems> is a positive integer.\n\nIf the <multipleHilites> is `false` when setting the <hilitedItems>,\nthen the first index in the <hilitedItems> determines which segment is\nhighlighted, and the remainder of the <hilitedItems> are ignored.\n\nThe <hiliteChanged> message is sent when setting the <hilitedItems>,\nunless it doesn't change which segments are highlighted.",
			"references":{
				"property":["hilitedItemNames","multipleHilites"],
				"message":["hiliteChanged"]
			}
		},{
			"id":"oxt_builder-229",
			"name":"hilitecolor",
			"display name":"hiliteColor",
			"library":"oxt_builder",
			"type":"property",
			"syntax":[
				"get the hiliteColor of <widget>",
				"set the hiliteColor of <widget> to <color>"
			],
			"display syntax":[
				"get the hiliteColor of <i>widget</i>"
			],
			"associations":["com.livecode.widget.segmented"],
			"summary":"The background color of highlighted segments",
			"description":"The <hiliteColor> property controls the background color\nof the segments that are currently highlighted.",
			"references":{
				"property":["hilitedItems","hilitedItemNames","backColor"]
			}
		},{
			"id":"oxt_builder-230",
			"name":"hiliteditemicons",
			"display name":"hilitedItemIcons",
			"library":"oxt_builder",
			"type":"property",
			"syntax":[
				"get the hilitedItemIcons of <widget>",
				"set the hilitedItemIcons of <widget> to <iconNames>"
			],
			"display syntax":[
				"get the hilitedItemIcons of <i>widget</i>"
			],
			"associations":["com.livecode.widget.segmented"],
			"summary":"The icons displayed by each segment when highlighted",
			"value":[{
				"name":"value",
				"type":"",
				"description":"A comma-delimited list of icon names for the segments"
			}],
			"description":"The icons displayed for each segment in the control when highlighted.\nThe <hilitedItemIcons> are displayed by the widget when the\n<itemStyle> is set to show icons.\n\nEach icon name must be one of the predefined graphics provided by the\n\"IconSVG\" library.  You can get a list of available predefined path\nnames by running `put iconNames()` in the Message Box.  If any of the\n<hilitedItemIcons> are empty, those segments have no icon when\nhilited.\n\nWhen you set the <hilitedItemIcons> to a string that has fewer icon\nnames than the <itemCount>, the remaining segments' icons are set to\nempty (no icon).\n\nWhen you set the <hilitedItemIcons> to a string that has more icon\nnames than the <itemCount>, the extra icons are ignored.",
			"references":{
				"property":["itemCount","itemStyle","itemIcons","foreColor","hilitedItems"]
			}
		},{
			"id":"oxt_builder-231",
			"name":"hilitechanged",
			"display name":"hiliteChanged",
			"library":"oxt_builder",
			"type":"message",
			"syntax":[
				"hiliteChanged"
			],
			"display syntax":[
				"hiliteChanged"
			],
			"associations":["com.livecode.widget.segmented"],
			"summary":"Sent when the hilite of the segmented control widget changes",
			"description":"Handle the <hiliteChanged> message in order to respond to a change in the hilited items\nof the segmented control."
		},{
			"id":"oxt_builder-232",
			"name":"com.livecode.widget.segmented",
			"display name":"com.livecode.widget.segmented",
			"library":"oxt_builder",
			"type":"widget",
			"display syntax":[
				"com.livecode.widget.segmented"
			],
			"associations":["com.livecode.widget.segmented"],
			"summary":"A widget that shows a row of selectable horizontal segments.\n\nA segmented control is a horizontal control that is made up of\nmultiple segments, where each segment functions as a discrete button.\nEach segment can either show a <itemLabels|label> or an\n<itemIcons|icon>.\n\nOne or more of the segments can be <hilitedItems|highlighted> by\nclicking on them.  By default, only one segment at a time can be\nhighlighted, but it is possible to\n<multipleHilites|allow multiple segments to be highlighted>.\n\nThe segmented control is great for:\n\n- displaying a set of different options in a settings window (for\n  example, it is used to display text alignment in the LiveCode\n  property inspector)\n- switching between different cards in a stack\n- displaying a set of toggleable settings",
			"description":"A widget that shows a row of selectable horizontal segments.\n\nA segmented control is a horizontal control that is made up of\nmultiple segments, where each segment functions as a discrete button.\nEach segment can either show a <itemLabels|label> or an\n<itemIcons|icon>.\n\nOne or more of the segments can be <hilitedItems|highlighted> by\nclicking on them.  By default, only one segment at a time can be\nhighlighted, but it is possible to\n<multipleHilites|allow multiple segments to be highlighted>.\n\nThe segmented control is great for:\n\n- displaying a set of different options in a settings window (for\n  example, it is used to display text alignment in the LiveCode\n  property inspector)\n- switching between different cards in a stack\n- displaying a set of toggleable settings",
			"references":{
				"property":["itemLabels","itemIcons","hilitedItems","multipleHilites"]
			}
		},{
			"id":"oxt_builder-233",
			"name":"backcolor",
			"display name":"backColor",
			"library":"oxt_builder",
			"type":"property",
			"syntax":[
				"get the backColor of <widget>",
				"set the backColor of <widget> to <color>"
			],
			"display syntax":[
				"get the backColor of <i>widget</i>"
			],
			"associations":["com.livecode.widget.segmented"],
			"summary":"The default background color",
			"description":"The <backColor> property controls the background color of segments\nwhen they are not highlighted.",
			"references":{
				"property":["hiliteColor"]
			}
		},{
			"id":"oxt_builder-234",
			"name":"forecolor",
			"display name":"foreColor",
			"library":"oxt_builder",
			"type":"property",
			"syntax":[
				"get the foreColor of <widget>",
				"set the foreColor of <widget> to <color>"
			],
			"display syntax":[
				"get the foreColor of <i>widget</i>"
			],
			"associations":["com.livecode.widget.segmented"],
			"summary":"The default label or icon color",
			"description":"The <foreColor> property controls the color used to draw segments'\nlabels or icons when they are not highlighted.",
			"references":{
				"property":["hilitedTextColor"]
			}
		},{
			"id":"oxt_builder-235",
			"name":"cornerradius",
			"display name":"cornerRadius",
			"library":"oxt_builder",
			"type":"property",
			"syntax":[
				"get the cornerRadius of <widget>",
				"set the cornerRadius of <widget> to <value>"
			],
			"display syntax":[
				"get the cornerRadius of <i>widget</i>"
			],
			"associations":["com.livecode.widget.segmented"],
			"summary":"The corner radius of the widget",
			"description":"The cornerRadius is the radius (in pixels) of the corner curve of the <widget>. The default value is usually suitable for horizantal orientations, however with a vertical orientation, depending on the size of the labels, you may wish to adjust."
		},{
			"id":"oxt_builder-236",
			"name":"hilitedtextcolor",
			"display name":"hilitedTextColor",
			"library":"oxt_builder",
			"type":"property",
			"syntax":[
				"get the hilitedTextColor of <widget>",
				"set the hilitedTextColor of <widget> to <pColor>"
			],
			"display syntax":[
				"get the hilitedTextColor of <i>widget</i>"
			],
			"associations":["com.livecode.widget.segmented"],
			"summary":"The label or icon color for highlighted segments",
			"description":"The <hilitedTextColor> property controls the color used to draw\nsegments' labels or icons when they are highlighted.",
			"references":{
				"property":["foreColor"]
			}
		},{
			"id":"oxt_builder-237",
			"name":"itemcount",
			"display name":"itemCount",
			"library":"oxt_builder",
			"type":"property",
			"syntax":[
				"get the itemCount of <widget>",
				"set the itemCount of <widget> to <number>"
			],
			"display syntax":[
				"get the itemCount of <i>widget</i>"
			],
			"associations":["com.livecode.widget.segmented"],
			"summary":"The number of segments shown",
			"description":"The <itemCount> property can be used to obtain or to set the number of\nsegments shown by the segmented control.\n\nWhen you set the <itemCount> to a number larger than the current\nnumber of segments in the control, new segments are added to the end\nof the control with unique <itemNames|names> and <itemLabels|labels>.\n\nWhen you set the <itemCount> to a number smaller than the current\nnumber of segments in the control, segments are discarded from the end\nof the control.  If this results in discarding a segment that's\ncurrently highlighted, the <hiliteChanged> message may be sent.\n\nThe segmented control must always have at least one segment.",
			"references":{
				"property":["itemNames","itemLabels"],
				"message":["hiliteChanged"]
			}
		},{
			"id":"oxt_builder-238",
			"name":"showborder",
			"display name":"showBorder",
			"library":"oxt_builder",
			"type":"property",
			"syntax":[
				"get the showBorder of <widget>",
				"set the showBorder of <widget> to { true | false }"
			],
			"display syntax":[
				"get the showBorder of <i>widget</i>"
			],
			"associations":["com.livecode.widget.segmented"],
			"summary":"Whether the widget has a border or not",
			"description":"If the <showBorder> property is `true`, the segmented control is drawn\nwith an outline.",
			"references":{
				"property":["borderColor"]
			}
		},{
			"id":"oxt_builder-239",
			"name":"multiplehilites",
			"display name":"multipleHilites",
			"library":"oxt_builder",
			"type":"property",
			"syntax":[
				"get the multipleHilites of <widget>",
				"set the multipleHilites of <widget> to { true | false }"
			],
			"display syntax":[
				"get the multipleHilites of <i>widget</i>"
			],
			"associations":["com.livecode.widget.segmented"],
			"summary":"Whether multiple segments may be highlighted simultaneously",
			"description":"When the <multipleHilites> property is `true`, more than one segemnt\ncan be highlighted at once.  If it is `false`, then highlighting a\nsegment removes the highlight from all other segments.\n\nIf the <multipleHilites> is set to `false` while there is more than\none segment highlighted, then all segments are immediately\ndehighlighted and the <hiliteChanged> message is sent.",
			"references":{
				"property":["hilitedItems","hilitedItemNames"],
				"message":["hiliteChanged"]
			}
		},{
			"id":"oxt_builder-240",
			"name":"itemstyle",
			"display name":"itemStyle",
			"library":"oxt_builder",
			"type":"property",
			"syntax":[
				"get the itemStyle of <widget>",
				"set the itemStyle of <widget> to <segmentStyle>"
			],
			"display syntax":[
				"get the itemStyle of <i>widget</i>"
			],
			"associations":["com.livecode.widget.segmented"],
			"summary":"The segment display style",
			"value":[{
				"name":"value",
				"type":"",
				"description":"The way that segments are displayed\n- \"icons\": Show the icons\n- \"text\": Show the labels"
			}],
			"description":"Determines whether segments of the segmented control are displayed\nwith their <itemIcons|icons> or their <itemLabels|labels>.",
			"references":{
				"property":["itemIcons","hilitedItemIcons","itemLabels"]
			}
		},{
			"id":"oxt_builder-241",
			"name":"itemnames",
			"display name":"itemNames",
			"library":"oxt_builder",
			"type":"property",
			"syntax":[
				"get the itemNames of <widget>",
				"set the itemNames of <widget> to <nameList>"
			],
			"display syntax":[
				"get the itemNames of <i>widget</i>"
			],
			"associations":["com.livecode.widget.segmented"],
			"summary":"The names used to identify segments",
			"value":[{
				"name":"value",
				"type":"",
				"description":"A comma-delimited list of names for the segments."
			}],
			"description":"The names of each segment in the control.  The <itemNames> can be a\nmore convenient way to identify the segments than by their positions.\n\nYou are recommended to use a non-empty, unique name for each segment.\n\nWhen you set the <itemNames> to a string that has fewer names than\nthe <itemCount>, the remaining segments' names are set to empty.\n\nWhen you set the <itemNames> to a string that that has more names than\nthe <itemCount>, the extra names are ignored.",
			"references":{
				"property":["itemLabels","hilitedItemNames"]
			}
		},{
			"id":"oxt_builder-242",
			"name":"togglehilites",
			"display name":"toggleHilites",
			"library":"oxt_builder",
			"type":"property",
			"syntax":[
				"get the toggleHilites of <widget>",
				"set the toggleHilites of <widget> to {true | false}"
			],
			"display syntax":[
				"get the toggleHilites of <i>widget</i>"
			],
			"associations":["com.livecode.widget.segmented"],
			"summary":"Whether a segment can be unhighlighted by clicking",
			"description":"The <toggleHilites> property controls whether a click on\na highlighted segment causes it to be unhighlighted or not."
		},{
			"id":"oxt_builder-243",
			"name":"horizontal",
			"display name":"horizontal",
			"library":"oxt_builder",
			"type":"property",
			"syntax":[
				"get the horizontal of <widget>",
				"set the horizontal of <widget> to {true | false}"
			],
			"display syntax":[
				"get the horizontal of <i>widget</i>"
			],
			"associations":["com.livecode.widget.segmented"],
			"summary":"Whether the segmented widget is horizontal or not",
			"description":"Use the <horizontal> property to control whether the segmented widget\nis laid out horizontally or vertically."
		},{
			"id":"oxt_builder-244",
			"name":"bordercolor",
			"display name":"borderColor",
			"library":"oxt_builder",
			"type":"property",
			"syntax":[
				"get the borderColor of <widget>",
				"set the borderColor of <widget> to <color>"
			],
			"display syntax":[
				"get the borderColor of <i>widget</i>"
			],
			"associations":["com.livecode.widget.segmented"],
			"summary":"The border color",
			"description":"The <borderColor> property controls the color used to draw the\nsegmented control's background and the color of the dividers between\nthe segments.",
			"references":{
				"property":["showBorder"]
			}
		},{
			"id":"oxt_builder-245",
			"name":"itemminextents",
			"display name":"itemMinExtents",
			"library":"oxt_builder",
			"type":"property",
			"syntax":[
				"get the itemMinExtents of <widget>",
				"set the itemMinExtents of <widget> to <numberList>"
			],
			"display syntax":[
				"get the itemMinExtents of <i>widget</i>"
			],
			"associations":["com.livecode.widget.segmented"],
			"summary":"The minimum width of each segment",
			"value":[{
				"name":"value",
				"type":"",
				"description":"A comma-delimited list of positive numbers."
			}],
			"description":"The minimum width of each segment in the control.  Each of the\n<itemMinExtents> must be a positive number.\n\nWhen you set the <itemMinExtents> to a string that has fewer than\n<itemCount> numbers in it, the remaining segments are given a minimum\na width of 0.\n\nWhen you set the <itemMinExtents> to a string that has more than\n<itemCount> numbers in it, the extra numbers are ignored.",
			"references":{
				"property":["itemCount"]
			}
		},{
			"id":"oxt_builder-246",
			"name":"itemicons",
			"display name":"itemIcons",
			"library":"oxt_builder",
			"type":"property",
			"syntax":[
				"get the itemIcons of <widget>",
				"set the itemIcons of <widget> to <iconNames>"
			],
			"display syntax":[
				"get the itemIcons of <i>widget</i>"
			],
			"associations":["com.livecode.widget.segmented"],
			"summary":"The icons displayed by each segment",
			"value":[{
				"name":"value",
				"type":"",
				"description":"A comma-delimited list of icon names for the segments"
			}],
			"description":"The icons displayed for each segment in the control when not\nhighlighted.  The <itemIcons> are displayed by the widget when the\n<itemStyle> is set to show icons.\n\nThe <itemIcons> must each be one of the predefined graphics provided\nby the \"IconSVG\" library.  You can get a list of available predefined\npath names by running `put iconNames()` in the Message Box.  If any of\nthe <itemIcons> are empty, those segments have no icon when not\nhilited.\n\nWhen you set the <itemIcons> to a string that has fewer icon names\nthan the <itemCount>, the remaining segments' icons are set to empty\n(no icon).\n\nWhen you set the <itemIcons> to a string that has more icon names than\nthe <itemCount>, the extra icons are ignored.",
			"references":{
				"property":["itemCount","itemStyle","itemHilitedIcons","foreColor","hilitedItems"]
			}
		},{
			"id":"oxt_builder-247",
			"name":"hiliteditemnames",
			"display name":"hilitedItemNames",
			"library":"oxt_builder",
			"type":"property",
			"syntax":[
				"get the hilitedItemNames of <widget>",
				"set the hilitedItemNames of <widget> to <nameList>"
			],
			"display syntax":[
				"get the hilitedItemNames of <i>widget</i>"
			],
			"associations":["com.livecode.widget.segmented"],
			"summary":"The currently highlighted segment names",
			"value":[{
				"name":"value",
				"type":"",
				"description":"A comma-delimited list of segment names."
			}],
			"description":"The names of the highlighted segments of the control.  Each item in\nthe <hilitedItemNames> is a segment <itemNames|name>.\n\nIf the <multipleHilites> is `false` when setting the\n<hilitedItemNames>, then the first name in the <hilitedItemNames>\ndetermines which segment is highlighted, and the remainder of the\n<hilitedItemNames> are ignored.\n\nThe <hiliteChanged> message is sent when setting the\n<hilitedItemNames>, unless it doesn't change which segments are\nhighlighted.",
			"references":{
				"property":["hilitedItems","itemNames","multipleHilites"],
				"message":["hiliteChanged"]
			}
		},{
			"id":"oxt_builder-248",
			"name":"lowercasestring",
			"display name":"LowercaseString",
			"library":"oxt_builder",
			"type":"operator",
			"syntax":[
				"the lower of <Source>"
			],
			"display syntax":[
				"the lower of <i>Source</i>"
			],
			"associations":["com.livecode.string"],
			"summary":"Lowercases <Source>.",
			"parameters":[{
				"name":"Source",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a string."
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"<Source> with each of its chars lowercased."
			}],
			"description":"Uppercase letters, including special characters with diacritical marks, are converted to the lowercase equivalents. All other characters, including lowercase letters, numbers, punctuation, and special characters with no upper or lower case, are left unchanged.",
			"tags":["strings"]
		},{
			"id":"oxt_builder-249",
			"name":"putstringbefore",
			"display name":"PutStringBefore",
			"library":"oxt_builder",
			"type":"statement",
			"syntax":[
				"put <Source> before <Target>"
			],
			"display syntax":[
				"put <i>Source</i> before <i>Target</i>"
			],
			"associations":["com.livecode.string"],
			"summary":"Prepends <Source> to <Target>.",
			"parameters":[{
				"name":"Source",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a string."
			},{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a string container."
			}],
			"examples":[{
				"script":"variable tVar as String\nput \"\" into tVar\nput \"abc\" before tVar -- tVar contains \"abc\"\nput \"lpha\" before char 2 of tVar\nput \"eti\" before char -1 of tVar -- tVar contains \"alphabetic\""
			}],
			"description":"Use to insert a string without replacement. Can be used either with a chunk expression to insert at a specified location, or without to prepend to the target string.",
			"tags":["strings"]
		},{
			"id":"oxt_builder-250",
			"name":"stringisstring",
			"display name":"StringIsString",
			"library":"oxt_builder",
			"type":"operator",
			"syntax":[
				"<Left> is <Right>"
			],
			"display syntax":[
				"<i>Left</i> is <i>Right</i>"
			],
			"associations":["com.livecode.string"],
			"summary":"Determines whether <Left> and <Right> are equal or not.",
			"parameters":[{
				"name":"Left",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a string."
			},{
				"name":"Right",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a string."
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"Returns true if <Left> is identical to <Right>."
			}],
			"description":"The ```is``` operator is case sensitive.",
			"tags":["strings"]
		},{
			"id":"oxt_builder-251",
			"name":"emptystring",
			"display name":"EmptyString",
			"library":"oxt_builder",
			"type":"expression",
			"syntax":[
				"the empty string"
			],
			"display syntax":[
				"the empty string"
			],
			"associations":["com.livecode.string"],
			"summary":"Designates the string of length zero.",
			"examples":[{
				"script":"variable tVar as String\nvariable tCount as Number\nput the empty string into tVar\nput the number of chars in tVar into tCount -- tCount is 0"
			}],
			"description":"Use ```the empty string``` to initialise a string variable. The empty string is synonymous with the string literal \"\"",
			"tags":["strings"]
		},{
			"id":"oxt_builder-252",
			"name":"stringisgreaterthanstring",
			"display name":"StringIsGreaterThanString",
			"library":"oxt_builder",
			"type":"operator",
			"syntax":[
				"<Left> &gt; <Right>"
			],
			"display syntax":[
				"<i>Left</i> &gt; <i>Right</i>"
			],
			"associations":["com.livecode.string"],
			"summary":"Determines whether <Left> is greater than <Right> under a char by char comparison",
			"parameters":[{
				"name":"Left",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a string."
			},{
				"name":"Right",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a string."
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"Returns true if <Left> is greater than <Right>."
			}],
			"description":"<Left> is greater than <Right> if and only if <Left> and <Right> are not equal, and the unicode codepoint of the first char in <Left> that is not equal to the corresponding char in <Right> is of greater value.",
			"tags":["strings"]
		},{
			"id":"oxt_builder-253",
			"name":"uppercasestring",
			"display name":"UppercaseString",
			"library":"oxt_builder",
			"type":"operator",
			"syntax":[
				"the upper of <Source>"
			],
			"display syntax":[
				"the upper of <i>Source</i>"
			],
			"associations":["com.livecode.string"],
			"summary":"Uppercases <Source>.",
			"parameters":[{
				"name":"Source",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a string."
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"<Source> with each of its chars uppercased."
			}],
			"description":"Lowercase letters, including special characters with diacritical marks, are converted to the uppercase equivalents. All other characters, including uppercase letters, numbers, punctuation, and special characters with no upper or lower case, are left unchanged.",
			"tags":["strings"]
		},{
			"id":"oxt_builder-254",
			"name":"putstringafter",
			"display name":"PutStringAfter",
			"library":"oxt_builder",
			"type":"statement",
			"syntax":[
				"put <Source> after <Target>"
			],
			"display syntax":[
				"put <i>Source</i> after <i>Target</i>"
			],
			"associations":["com.livecode.string"],
			"summary":"Appends <Source> to <Target>.",
			"parameters":[{
				"name":"Source",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a string."
			},{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a string container."
			}],
			"examples":[{
				"script":"variable tVar as String\nput \"\" into tVar\nput \"rent\" after tVar -- tVar contains \"rent\"\nput \"placeme\" after char 2 of tVar -- tVar contains \"replacement\""
			}],
			"description":"Use to insert a string without replacement. Can be used either with a chunk expression to insert at a specified location, or without to append to the target string.",
			"tags":["strings"]
		},{
			"id":"oxt_builder-255",
			"name":"stringislessthanstring",
			"display name":"StringIsLessThanString",
			"library":"oxt_builder",
			"type":"operator",
			"syntax":[
				"<Left> &lt; <Right>"
			],
			"display syntax":[
				"<i>Left</i> &lt; <i>Right</i>"
			],
			"associations":["com.livecode.string"],
			"summary":"Determines whether <Left> is less than <Right> under a char by char comparison",
			"parameters":[{
				"name":"Left",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a string."
			},{
				"name":"Right",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a string."
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"Returns true if <Left> is less than <Right>"
			}],
			"description":"<Left> is greater than <Right> if and only if <Left> and <Right> are not equal, and the unicode codepoint of the first char in <Left> that is not equal to the corresponding char in <Right> is of greater value.",
			"tags":["strings"]
		},{
			"id":"oxt_builder-256",
			"name":"replacestring",
			"display name":"ReplaceString",
			"library":"oxt_builder",
			"type":"statement",
			"syntax":[
				"replace <Pattern> with <Replacement> in <Target>"
			],
			"display syntax":[
				"replace <i>Pattern</i> with <i>Replacement</i> in <i>Target</i>"
			],
			"associations":["com.livecode.string"],
			"summary":"Replaces occurrences of <Pattern> within <Target> in <Replacement>\nSource:An expression which evaluates to a string.",
			"parameters":[{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a string container."
			},{
				"name":"Replacement",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a string."
			}],
			"examples":[{
				"script":"variable tString as String\nput \"purple\" into tString\nreplace \"p\" with \"t\" in tString -- tString is \"turtle\""
			}],
			"description":"Replaces each occurrence of the string <Pattern> in <Target> with <Replacement>.",
			"tags":["strings"]
		},{
			"id":"oxt_builder-257",
			"name":"stringisnotstring",
			"display name":"StringIsNotString",
			"library":"oxt_builder",
			"type":"operator",
			"syntax":[
				"<Left> is not <Right>"
			],
			"display syntax":[
				"<i>Left</i> is not <i>Right</i>"
			],
			"associations":["com.livecode.string"],
			"summary":"Determines whether <Left> and <Right> are equal or not.",
			"parameters":[{
				"name":"Left",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a string."
			},{
				"name":"Right",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a string."
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"Returns true if <Left> is not identical to <Right>."
			}],
			"description":"The ```is not``` operator is case sensitive.",
			"tags":["strings"]
		},{
			"id":"oxt_builder-258",
			"name":"com.livecode.string",
			"display name":"com.livecode.string",
			"library":"oxt_builder",
			"type":"module",
			"display syntax":[
				"com.livecode.string"
			],
			"associations":["com.livecode.string"],
			"summary":"This library consists of the operations on strings included in the standard library of LiveCode Builder.",
			"description":"This library consists of the operations on strings included in the standard library of LiveCode Builder."
		},{
			"id":"oxt_builder-259",
			"name":"concatenatestringswithspace",
			"display name":"ConcatenateStringsWithSpace",
			"library":"oxt_builder",
			"type":"operator",
			"syntax":[
				"<Left> && <Right>"
			],
			"display syntax":[
				"<i>Left</i> && <i>Right</i>"
			],
			"associations":["com.livecode.string"],
			"summary":"Concatenates <Left> and <Right> with a space between.",
			"parameters":[{
				"name":"Left",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a string."
			},{
				"name":"Right",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a string."
			}],
			"examples":[{
				"script":"variable tVar as String\nput \"This\" && \"is\" && \"a\" && \"sentence.\" into tVar -- tVar contains \"This is a sentence.\""
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"The result of concatenating <Left> and <Right> with a space between."
			}],
			"description":"The result consists of the chars of <Left> followed by a space, and then the chars of <Right>.",
			"tags":["strings"]
		},{
			"id":"oxt_builder-260",
			"name":"concatenatestrings",
			"display name":"ConcatenateStrings",
			"library":"oxt_builder",
			"type":"operator",
			"syntax":[
				"<Left> & <Right>"
			],
			"display syntax":[
				"<i>Left</i> & <i>Right</i>"
			],
			"associations":["com.livecode.string"],
			"summary":"Concatenates <Left> and <Right>.",
			"parameters":[{
				"name":"Left",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a string."
			},{
				"name":"Right",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a string."
			}],
			"examples":[{
				"script":"variable tVar as String\nput \"car\" & \"pet\" into tVar -- tVar contains \"carpet\""
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"The result of concatenating <Left> and <Right>."
			}],
			"description":"The result consists of the chars of <Left> followed by those of <Right>.",
			"tags":["strings"]
		},{
			"id":"oxt_builder-261",
			"name":"putbytesafter",
			"display name":"PutBytesAfter",
			"library":"oxt_builder",
			"type":"statement",
			"syntax":[
				"put <Source> after <Target>"
			],
			"display syntax":[
				"put <i>Source</i> after <i>Target</i>"
			],
			"associations":["com.livecode.binary"],
			"summary":"Appends <Source> bytes to <Target> bytes.",
			"parameters":[{
				"name":"Source",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to binary data."
			},{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a binary container."
			}],
			"description":"Use to insert bytes into data without replacement. Can be used either with a chunk expression to insert at a specified location, or without to append to the target data.",
			"tags":["binary"]
		},{
			"id":"oxt_builder-262",
			"name":"putbytesbefore",
			"display name":"PutBytesBefore",
			"library":"oxt_builder",
			"type":"statement",
			"syntax":[
				"put <Source> before <Target>"
			],
			"display syntax":[
				"put <i>Source</i> before <i>Target</i>"
			],
			"associations":["com.livecode.binary"],
			"summary":"Prepends <Source> bytes to <Target> bytes.",
			"parameters":[{
				"name":"Source",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to binary data."
			},{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a binary container."
			}],
			"description":"Use to insert bytes into data without replacement. Can be used either with a chunk expression to insert at a specified location, or without to prepend to the target data.",
			"tags":["binary"]
		},{
			"id":"oxt_builder-263",
			"name":"emptydata",
			"display name":"EmptyData",
			"library":"oxt_builder",
			"type":"expression",
			"syntax":[
				"the empty data"
			],
			"display syntax":[
				"the empty data"
			],
			"associations":["com.livecode.binary"],
			"summary":"Designates data of length 0.",
			"examples":[{
				"script":"variable tVar as Data\nvariable tCount as Number\nput the empty data into tVar\nput the number of bytes in tVar into tCount -- tCount is 0"
			}],
			"description":"Use ```the empty data``` to initialise a data variable.",
			"tags":["binary"]
		},{
			"id":"oxt_builder-264",
			"name":"dataislessthandata",
			"display name":"DataIsLessThanData",
			"library":"oxt_builder",
			"type":"operator",
			"syntax":[
				"<Left> &lt; <Right>"
			],
			"display syntax":[
				"<i>Left</i> &lt; <i>Right</i>"
			],
			"associations":["com.livecode.binary"],
			"summary":"Determines whether <Left> is less than <Right> under a byte by byte comparison",
			"parameters":[{
				"name":"Left",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to binary data."
			},{
				"name":"Right",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to binary data."
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"True if <Left> is less than <Right>, and false otherwise."
			}],
			"description":"<Left> is less than <Right> if they are not equal, and the first byte in <Right> that is not equal to the corresponding byte in <Left> is of greater value.",
			"tags":["binary"]
		},{
			"id":"oxt_builder-265",
			"name":"concatenatebytes",
			"display name":"ConcatenateBytes",
			"library":"oxt_builder",
			"type":"operator",
			"syntax":[
				"<Left> & <Right>"
			],
			"display syntax":[
				"<i>Left</i> & <i>Right</i>"
			],
			"associations":["com.livecode.binary"],
			"summary":"Concatenates <Left> and <Right>.",
			"parameters":[{
				"name":"Left",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to binary data."
			},{
				"name":"Right",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to binary data."
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"Binary data consisting of the value of the left hand expression with the value of the right hand expression appended to the end."
			}],
			"description":"The result consists of the bytes of <Left> followed by those of <Right>.",
			"tags":["binary"]
		},{
			"id":"oxt_builder-266",
			"name":"dataisnotdata",
			"display name":"DataIsNotData",
			"library":"oxt_builder",
			"type":"operator",
			"syntax":[
				"<Left> is not <Right>"
			],
			"display syntax":[
				"<i>Left</i> is not <i>Right</i>"
			],
			"associations":["com.livecode.binary"],
			"summary":"Determines whether <Left> and <Right> are equal or not.",
			"parameters":[{
				"name":"Left",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to binary data."
			},{
				"name":"Right",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to binary data."
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"Returns false if the result of evaluating <Left> is the same as that of <Right>, and true otherwise."
			}],
			"description":"Performs a byte by byte comparison of <Left> and <Right>, returning true if there is any difference.",
			"tags":["binary"]
		},{
			"id":"oxt_builder-267",
			"name":"dataisdata",
			"display name":"DataIsData",
			"library":"oxt_builder",
			"type":"operator",
			"syntax":[
				"<Left> is <Right>"
			],
			"display syntax":[
				"<i>Left</i> is <i>Right</i>"
			],
			"associations":["com.livecode.binary"],
			"summary":"Determines whether <Left> and <Right> are equal or not.",
			"parameters":[{
				"name":"Left",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to binary data."
			},{
				"name":"Right",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to binary data."
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"Returns true if the result of evaluating <Left> is the same as that of <Right>, and false otherwise."
			}],
			"description":"Performs a byte by byte comparison of <Left> and <Right>, returning false if there is any difference.",
			"tags":["binary"]
		},{
			"id":"oxt_builder-268",
			"name":"dataisgreaterthandata",
			"display name":"DataIsGreaterThanData",
			"library":"oxt_builder",
			"type":"operator",
			"syntax":[
				"<Left> &gt; <Right>"
			],
			"display syntax":[
				"<i>Left</i> &gt; <i>Right</i>"
			],
			"associations":["com.livecode.binary"],
			"summary":"Determines whether <Left> is greater than <Right> under a byte by byte comparison",
			"parameters":[{
				"name":"Left",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to binary data."
			},{
				"name":"Right",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to binary data."
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"True if <Left> is greater than <Right>, and false otherwise."
			}],
			"description":"<Left> is greater than <Right> if they are not equal, and the first byte in <Left> that is not equal to the corresponding byte in <Right> is of greater value.",
			"tags":["binary"]
		},{
			"id":"oxt_builder-269",
			"name":"com.livecode.binary",
			"display name":"com.livecode.binary",
			"library":"oxt_builder",
			"type":"module",
			"display syntax":[
				"com.livecode.binary"
			],
			"associations":["com.livecode.binary"],
			"summary":"This library consists of the operations on binary strings provided by the standard library of LiveCode Builder.",
			"description":"This library consists of the operations on binary strings provided by the standard library of LiveCode Builder."
		},{
			"id":"oxt_builder-270",
			"name":"isnotnothing",
			"display name":"IsNotNothing",
			"library":"oxt_builder",
			"type":"operator",
			"syntax":[
				"<Target> is not nothing"
			],
			"display syntax":[
				"<i>Target</i> is not nothing"
			],
			"associations":["com.livecode.type"],
			"summary":"Determines whether <Target> is nothing or not.",
			"parameters":[{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"Any expression"
			}],
			"examples":[{
				"script":"public handler CanBeNumber(in pString as String) returns Boolean\n    variable tNum as optional Number\n    put pString parsed as number into tNum\n    return tNum is not nothing\nend handler"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"Returns false if the given expression <Target> is nothing, and true otherwise."
			}],
			"description":"Use the <IsNotNothing> operator to test if operators or handlers have returned anything."
		},{
			"id":"oxt_builder-271",
			"name":"isnotempty",
			"display name":"IsNotEmpty",
			"library":"oxt_builder",
			"type":"operator",
			"syntax":[
				"<Target> is not empty"
			],
			"display syntax":[
				"<i>Target</i> is not empty"
			],
			"associations":["com.livecode.type"],
			"summary":"Determines whether <Target> is empty or not.",
			"parameters":[{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"Any expression"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"Returns false if the given expression <Target> evaluates to the empty value of that type, and true otherwise."
			}],
			"description":"Determines whether <Target> is empty or not."
		},{
			"id":"oxt_builder-272",
			"name":"isanumber",
			"display name":"IsANumber",
			"library":"oxt_builder",
			"type":"operator",
			"syntax":[
				"<Target> is a number"
			],
			"display syntax":[
				"<i>Target</i> is a number"
			],
			"associations":["com.livecode.type"],
			"summary":"Determines whether <Target> is a number or not.",
			"parameters":[{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"Any expression"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"Returns true if the given expression <Target> is a number, and false if not."
			}],
			"description":"Determines whether <Target> is a number or not."
		},{
			"id":"oxt_builder-273",
			"name":"isastring",
			"display name":"IsAString",
			"library":"oxt_builder",
			"type":"operator",
			"syntax":[
				"<Target> is a string"
			],
			"display syntax":[
				"<i>Target</i> is a string"
			],
			"associations":["com.livecode.type"],
			"summary":"Determines whether <Target> is a string or not.",
			"parameters":[{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"Any expression"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"Returns true if the given expression <Target> is a string, and false if not."
			}],
			"description":"Determines whether <Target> is a string or not."
		},{
			"id":"oxt_builder-274",
			"name":"isempty",
			"display name":"IsEmpty",
			"library":"oxt_builder",
			"type":"operator",
			"syntax":[
				"<Target> is empty"
			],
			"display syntax":[
				"<i>Target</i> is empty"
			],
			"associations":["com.livecode.type"],
			"summary":"Determines whether <Target> is empty or not.",
			"parameters":[{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"Any expression"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"Returns true if the given expression <Target> evaluates to the empty value of that type, and false otherwise."
			}],
			"description":"Determines whether <Target> is empty or not."
		},{
			"id":"oxt_builder-275",
			"name":"isnothing",
			"display name":"IsNothing",
			"library":"oxt_builder",
			"type":"operator",
			"syntax":[
				"<Target> is nothing"
			],
			"display syntax":[
				"<i>Target</i> is nothing"
			],
			"associations":["com.livecode.type"],
			"summary":"Determines whether <Target> is nothing or not.",
			"parameters":[{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"Any expression"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"Returns true if the given expression <Target> is nothing, and false otherwise."
			}],
			"description":"Use the <IsNothing> operator to test if operators or handlers have returned anything."
		},{
			"id":"oxt_builder-276",
			"name":"isalist",
			"display name":"IsAList",
			"library":"oxt_builder",
			"type":"operator",
			"syntax":[
				"<Target> is a list"
			],
			"display syntax":[
				"<i>Target</i> is a list"
			],
			"associations":["com.livecode.type"],
			"summary":"Determines whether <Target> is a list or not.",
			"parameters":[{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"Any expression"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"Returns true if the given expression <Target> is a list, and false if not."
			}],
			"description":"Determines whether <Target> is a list or not."
		},{
			"id":"oxt_builder-277",
			"name":"isaboolean",
			"display name":"IsABoolean",
			"library":"oxt_builder",
			"type":"operator",
			"syntax":[
				"<Target> is a boolean"
			],
			"display syntax":[
				"<i>Target</i> is a boolean"
			],
			"associations":["com.livecode.type"],
			"summary":"Determines whether <Target> is a boolean or not.",
			"parameters":[{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"Any expression"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"Returns true if the given expression <Target> is a boolean, and false if not."
			}],
			"description":"Determines whether <Target> is a boolean or not."
		},{
			"id":"oxt_builder-278",
			"name":"isadata",
			"display name":"IsAData",
			"library":"oxt_builder",
			"type":"operator",
			"syntax":[
				"<Target> is a data"
			],
			"display syntax":[
				"<i>Target</i> is a data"
			],
			"associations":["com.livecode.type"],
			"summary":"Determines whether <Target> is data or not.",
			"parameters":[{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"Any expression"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"Returns true if the given expression <Target> is data, and false if not."
			}],
			"description":"Determines whether <Target> is data or not."
		},{
			"id":"oxt_builder-279",
			"name":"isanarray",
			"display name":"IsAnArray",
			"library":"oxt_builder",
			"type":"operator",
			"syntax":[
				"<Target> is an array"
			],
			"display syntax":[
				"<i>Target</i> is an array"
			],
			"associations":["com.livecode.type"],
			"summary":"Determines whether <Target> is an array or not.",
			"parameters":[{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"Any expression"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"Returns true if the given expression <Target> is an array, and false if not.\n"
			}],
			"description":"Determines whether <Target> is an array or not."
		},{
			"id":"oxt_builder-280",
			"name":"com.livecode.type",
			"display name":"com.livecode.type",
			"library":"oxt_builder",
			"type":"module",
			"display syntax":[
				"com.livecode.type"
			],
			"associations":["com.livecode.type"],
			"summary":"This library consists of the general operations on types provided by the standard library of Builder.",
			"description":"This library consists of the general operations on types provided by the standard library of Builder."
		},{
			"id":"oxt_builder-281",
			"name":"androidpermissionexists",
			"display name":"AndroidPermissionExists",
			"library":"oxt_builder",
			"type":"handler",
			"syntax":[
				"AndroidPermissionExists(<pPermission>)"
			],
			"display syntax":[
				"AndroidPermissionExists(<i>pPermission</i>)"
			],
			"associations":["com.livecode.library.androidutils"],
			"summary":"Returns true if <pPermission> is a valid Android permission name",
			"OS":["android"],
			"parameters":[{
				"name":"pPermission",
				"type":"",
				"refparam":"false",
				"description":"The name of the permission to check."
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"True if <pPermission> is a valid Android permission name, false otherwise."
			}],
			"description":"Use the <AndroidPermissionExists> function to check if <pPermission> is a valid\nAndroid permission name.\n\n>*Note:* Permission names are case sensitive."
		},{
			"id":"oxt_builder-282",
			"name":"androidunregisterlifecyclelistener",
			"display name":"AndroidUnregisterLifecycleListener",
			"library":"oxt_builder",
			"type":"handler",
			"syntax":[
				"AndroidUnregisterLifecycleListener(<pListener>)"
			],
			"display syntax":[
				"AndroidUnregisterLifecycleListener(<i>pListener</i>)"
			],
			"associations":["com.livecode.library.androidutils"],
			"summary":"Unregister an object that is listening on application lifecycle events.",
			"OS":["android"],
			"parameters":[{
				"name":"pListener",
				"type":"",
				"refparam":"false",
				"description":"The listener object to be unregistered"
			}],
			"examples":[{
				"script":"private variable mLifecycleListener as optional JObject\n\npublic handler OnOpen() returns nothing\n    put AndroidRegisterLifecycleListener(OnMyWidgetPaused, OnMyWidgetResumed) into mLifecycleListener\nend handler\n\npublic handler OnClose() returns nothing\n    AndroidUnregisterLifecycleListener(mLifecycleListener)\n    put nothing into mLifecycleListener\nend handler"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"True if the listener object was previously registered and has been successfully\nunregistered."
			}],
			"description":"Use the <AndroidUnregisterLifecycleListener> handler to unregister an object\ncreated with <AndroidRegisterLifecycleListener> that is listening to application\nlifecycle events. This will have the effect that any handlers that the listener\nobject is wrapping will no longer be called."
		},{
			"id":"oxt_builder-283",
			"name":"androidrequestpermission",
			"display name":"AndroidRequestPermission",
			"library":"oxt_builder",
			"type":"handler",
			"syntax":[
				"AndroidRequestPermission(<pPermission>)"
			],
			"display syntax":[
				"AndroidRequestPermission(<i>pPermission</i>)"
			],
			"associations":["com.livecode.library.androidutils"],
			"summary":"Displays a dialog showing a permission request for <pPermission>. If a user\nhas already granted permission for <pPermission>, this function does nothing.\n\nReturns true if permission <pPermission> has been granted by the user.",
			"OS":["android"],
			"parameters":[{
				"name":"pPermission",
				"type":"",
				"refparam":"false",
				"description":"The name of the permission to request.\n\n-   \"android.permission.READ_CALENDAR\": permission to allow an application to read the device's calendar.\n-   \"android.permission.WRITE_CALENDAR\": permission to allow an application to write to the device's calendar.\n-   \"android.permission.CAMERA\": permission to allow an application to access the device's camera.\n-   \"android.permission.ACCESS_COARSE_LOCATION\": permission to allow an application to access the device's coarse location.\n-   \"android.permission.ACCESS_FINE_LOCATION\": permission to allow an application to access the device's fine location.\n-   \"android.permission.READ_CONTACTS\": permission to allow an application to read data from the device's contacts.\n-   \"android.permission.WRITE_CONTACTS\": permission to allow an application to write date to the device's contacts.\n-   \"android.permission.GET_ACCOUNTS\": permission to allow an application to access to the list of accounts in the Accounts Service.\n-   \"android.permission.RECORD_AUDIO\": permission to allow an application to allow an application to record audio.\n-   \"android.permission.READ_EXTERNAL_STORAGE\": permission to allow an application to read data from the device's external storage.\n-   \"android.permission.WRITE_EXTERNAL_STORAGE\": permission to allow an application to write data to the device's external storage.\n-   \"android.permission.READ_PHONE_STATE\": permission to allow an application to access phone state, including the phone number of the device, current cellular network information, the status of any ongoing calls, and a list of any PhoneAccounts registered on the device.\n-   \"android.permission.READ_PHONE_NUMBERS\": permission to allow an application to access the device's phone number(s).\n-   \"android.permission.CALL_PHONE\": permission to allow an application to initiate a phone call without going through the Dialer user interface for the user to confirm the call.\n-   \"android.permission.ANSWER_PHONE_CALLS\": permission to allow an application to answer an incoming phone call.\n-   \"android.permission.READ_CALL_LOG\": permission to allow an application to read the user's call log.\n-   \"android.permission.WRITE_CALL_LOG\": permission to allow an application to write to the user's call log.\n-   \"android.permission.ADD_VOICEMAIL\": permission to allow an application to add voicemails into the system.\n-   \"android.permission.USE_SIP\": permission to allow an application to use SIP service.\n-   \"android.permission.PROCESS_OUTGOING_CALLS\": permission to allow an application to see the number being dialed during an outgoing call with the option to redirect the call to a different number or abort the call altogether.\n-   \"android.permission.SEND_SMS\": permission to allow an application to send SMS messages.\n-   \"android.permission.RECEIVE_SMS\": permission to allow an application to receive SMS messages\n-   \"android.permission.READ_SMS\": permission to allow an application to read SMS messages.\n-   \"android.permission.RECEIVE_WAP_PUSH\": permission to allow an application to receive WAP push messages.\n-   \"android.permission.RECEIVE_MMS\": permission to allow an application to receive MMS messages.\n-   \"android.permission.BODY_SENSORS\": permission to allow an application to access data from sensors that the user uses to measure what is happening inside his/her body, such as heart rate."
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"True if permission has been granted, false otherwise."
			}],
			"description":"Use the <AndroidRequestPermission> command to request permission for\n<pPermission> from the user.\n\n>*Note:* Permission names are case sensitive."
		},{
			"id":"oxt_builder-284",
			"name":"androidregisterlifecyclelistener",
			"display name":"AndroidRegisterLifecycleListener",
			"library":"oxt_builder",
			"type":"handler",
			"syntax":[
				"AndroidRegisterLifecycleListener(<pPauseHandler>,<pResumeHandler>)"
			],
			"display syntax":[
				"AndroidRegisterLifecycleListener(<i>pPauseHandler</i>,<i>pResumeHandler</i>)"
			],
			"associations":["com.livecode.library.androidutils"],
			"summary":"Register handlers to be called when on application lifecycle events.",
			"OS":["android"],
			"parameters":[{
				"name":"pPauseHandler",
				"type":"",
				"refparam":"false",
				"description":"The handler to be called when the application is paused"
			},{
				"name":"pResumeHandler",
				"type":"",
				"refparam":"false",
				"description":"The handler to be called when the application is resumed"
			}],
			"examples":[{
				"script":"private variable mLifecycleListener as optional JObject\n\npublic handler OnOpen() returns nothing\n    put AndroidRegisterLifecycleListener(OnMyWidgetPaused, OnMyWidgetResumed) into mLifecycleListener\nend handler\n\npublic handler OnClose() returns nothing\n    AndroidUnregisterLifecycleListener(mLifecycleListener)\n    put nothing into mLifecycleListener\nend handler\n\nprivate handler OnMyWidgetPaused() returns nothing\n    -- Perform pause actions\nend handler\n\nprivate handler OnMyWidgetResumed() returns nothing\n    -- Perform resume actions\nend handler"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"A listener object that wraps the registered handlers."
			}],
			"description":"Use the <AndroidRegisterLifecycleListener> handler to register handlers to\napplication lifecycle events. The handler <pPauseHandler> will be called when\nthe application is paused and enters into the background. The handler\n<pResumeHandler> will be called when the application is resumed and returns from\nthe background.\n\nA listener object will be returned that wraps the registered handlers and can be\nused with <AndroidUnregisterLifecycleListener> to cancel the registration."
		},{
			"id":"oxt_builder-285",
			"name":"androidhaspermission",
			"display name":"AndroidHasPermission",
			"library":"oxt_builder",
			"type":"handler",
			"syntax":[
				"AndroidHasPermission(<pPermission>)"
			],
			"display syntax":[
				"AndroidHasPermission(<i>pPermission</i>)"
			],
			"associations":["com.livecode.library.androidutils"],
			"summary":"Returns true if permission <pPermission> has been granted by the user.",
			"OS":["android"],
			"parameters":[{
				"name":"pPermission",
				"type":"",
				"refparam":"false",
				"description":"The name of the permission to request.\n\n-   \"android.permission.READ_CALENDAR\": permission to allow an application to read the device's calendar.\n-   \"android.permission.WRITE_CALENDAR\": permission to allow an application to write to the device's calendar.\n-   \"android.permission.CAMERA\": permission to allow an application to access the device's camera.\n-   \"android.permission.ACCESS_COARSE_LOCATION\": permission to allow an application to access the device's coarse location.\n-   \"android.permission.ACCESS_FINE_LOCATION\": permission to allow an application to access the device's fine location.\n-   \"android.permission.READ_CONTACTS\": permission to allow an application to read data from the device's contacts.\n-   \"android.permission.WRITE_CONTACTS\": permission to allow an application to write date to the device's contacts.\n-   \"android.permission.GET_ACCOUNTS\": permission to allow an application to access to the list of accounts in the Accounts Service.\n-   \"android.permission.RECORD_AUDIO\": permission to allow an application to allow an application to record audio.\n-   \"android.permission.READ_EXTERNAL_STORAGE\": permission to allow an application to read data from the device's external storage.\n-   \"android.permission.WRITE_EXTERNAL_STORAGE\": permission to allow an application to write data to the device's external storage.\n-   \"android.permission.READ_PHONE_STATE\": permission to allow an application to access phone state, including the phone number of the device, current cellular network information, the status of any ongoing calls, and a list of any PhoneAccounts registered on the device.\n-   \"android.permission.READ_PHONE_NUMBERS\": permission to allow an application to access the device's phone number(s).\n-   \"android.permission.CALL_PHONE\": permission to allow an application to initiate a phone call without going through the Dialer user interface for the user to confirm the call.\n-   \"android.permission.ANSWER_PHONE_CALLS\": permission to allow an application to answer an incoming phone call.\n-   \"android.permission.READ_CALL_LOG\": permission to allow an application to read the user's call log.\n-   \"android.permission.WRITE_CALL_LOG\": permission to allow an application to write to the user's call log.\n-   \"android.permission.ADD_VOICEMAIL\": permission to allow an application to add voicemails into the system.\n-   \"android.permission.USE_SIP\": permission to allow an application to use SIP service.\n-   \"android.permission.PROCESS_OUTGOING_CALLS\": permission to allow an application to see the number being dialed during an outgoing call with the option to redirect the call to a different number or abort the call altogether.\n-   \"android.permission.SEND_SMS\": permission to allow an application to send SMS messages.\n-   \"android.permission.RECEIVE_SMS\": permission to allow an application to receive SMS messages\n-   \"android.permission.READ_SMS\": permission to allow an application to read SMS messages.\n-   \"android.permission.RECEIVE_WAP_PUSH\": permission to allow an application to receive WAP push messages.\n-   \"android.permission.RECEIVE_MMS\": permission to allow an application to receive MMS messages.\n-   \"android.permission.BODY_SENSORS\": permission to allow an application to access data from sensors that the user uses to measure what is happening inside his/her body, such as heart rate."
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"True if permission has been granted, false otherwise."
			}],
			"description":"Use the <AndroidHasPermission> function to find out if permission\n<pPermission> has been granted by the user.\n\n>*Note:* Permission names are case sensitive."
		},{
			"id":"oxt_builder-286",
			"name":"applicationcontext",
			"display name":"ApplicationContext",
			"library":"oxt_builder",
			"type":"handler",
			"syntax":[
				"ApplicationContext()"
			],
			"display syntax":[
				"ApplicationContext()"
			],
			"associations":["com.livecode.library.androidutils"],
			"summary":"Get the application Context",
			"OS":["android"],
			"examples":[{
				"script":"__safe foreign handler _JNI_CreateButton(in pContext as JObject) returns JObject \\\n\tbinds to \"java:android.widget.Button>new(Landroid/content/Context;)?ui\"\n\nhandler NativeButtonView() returns JObject\n\treturn _JNI_CreateButton(ApplicationContext())\nend handler"
			}],
			"description":"Use the <ApplicationContext> handler to fetch the current application's\nContext object."
		},{
			"id":"oxt_builder-287",
			"name":"stringtoandroidcolor",
			"display name":"StringToAndroidColor",
			"library":"oxt_builder",
			"type":"handler",
			"syntax":[
				"StringToAndroidColor(<pString>)"
			],
			"display syntax":[
				"StringToAndroidColor(<i>pString</i>)"
			],
			"associations":["com.livecode.library.androidutils"],
			"summary":"Convert a color string to an integer for Android",
			"OS":["android"],
			"parameters":[{
				"name":"pString",
				"type":"",
				"refparam":"false",
				"description":"The color string"
			}],
			"description":"Use the <StringToAndroidColor> handler to convert a string representing\na color to an integer that can be used with Android color APIs.\n"
		},{
			"id":"oxt_builder-288",
			"name":"com.livecode.library.androidutils",
			"display name":"com.livecode.library.androidutils",
			"library":"oxt_builder",
			"type":"module",
			"display syntax":[
				"com.livecode.library.androidutils"
			],
			"associations":["com.livecode.library.androidutils"],
			"summary":"A library of utility handlers for functions commonly needed by Android widgets.",
			"OS":["android"],
			"description":"A library of utility handlers for functions commonly needed by Android widgets."
		},{
			"id":"oxt_builder-289",
			"name":"sortlistascendingbinary",
			"display name":"SortListAscendingBinary",
			"library":"oxt_builder",
			"type":"statement",
			"syntax":[
				"sort <Target> in ascending byte order"
			],
			"display syntax":[
				"sort <i>Target</i> in ascending byte order"
			],
			"associations":["com.livecode.sort"],
			"summary":"Sorts <Target> in ascending binary order.",
			"parameters":[{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a list of binary data."
			}],
			"description":"Binary sort is performed by comparing data elements on a byte by byte basis.\n>*Note:* It is an error if <Target> contains any elements of non-data type.",
			"tags":["sorting"]
		},{
			"id":"oxt_builder-290",
			"name":"sortlistusinghandler",
			"display name":"SortListUsingHandler",
			"library":"oxt_builder",
			"type":"statement",
			"syntax":[
				"sort <Target> using handler <Handler>"
			],
			"display syntax":[
				"sort <i>Target</i> using handler <i>Handler</i>"
			],
			"associations":["com.livecode.sort"],
			"summary":"Sorts <Target> using <Handler> as a comparison function.",
			"parameters":[{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a list."
			},{
				"name":"Handler",
				"type":"",
				"refparam":"false",
				"description":"A handler of type <SortCompare>"
			}],
			"examples":[{
				"script":"variable sKeyIndex as Number\n\nprivate handler CompareListsByElement(in pLeft as any, in pRight as any) returns Integer\n   variable tLeft as Number\n   variable tRight as Number\n   put pLeft[sKeyIndex] into tLeft\n   put pRight[sKeyIndex] into tRight\n\n   if tLeft > tRight then\n      return 1\n   else if tLeft < tRight then\n      return -1\n   else\n      return 0\n   end if\nend handler\n\n-- Sort lists according to value at specified index of each list\npublic handler TestSortListOfLists(in pList as List, in pKeyIndex as Number) returns List\n   put pKeyIndex into sKeyIndex\n   sort pList using handler CompareListsByElement\n   return pList\nend handler"
			}],
			"description":"<SortListUsingHandler> sorts a list by comparing the elements of a list according to the \ncomparison implemented by the <Handler> argument.\n\n>*Note:* Supplying an inconsistent comparison operator to <SortListUsingHandler> causes \nundefined behavior.",
			"tags":["sorting"]
		},{
			"id":"oxt_builder-291",
			"name":"sortlistdescendingnumeric",
			"display name":"SortListDescendingNumeric",
			"library":"oxt_builder",
			"type":"statement",
			"syntax":[
				"sort <Target> in descending numeric order"
			],
			"display syntax":[
				"sort <i>Target</i> in descending numeric order"
			],
			"associations":["com.livecode.sort"],
			"summary":"Sorts <Target> in descending numeric order.",
			"parameters":[{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a list of numbers."
			}],
			"examples":[{
				"script":"    variable tTestList as List\n    put [3,4,5,1,2] into tTestList\n\n    sort tTestList in descending numeric order -- tTestList is [5,4,3,2,1]"
			}],
			"description":"Numeric sort is performed by comparing numeric elements by cardinality.\n>*Note:* It is an error if <Target> contains any elements of non-numeric type.",
			"tags":["sorting"]
		},{
			"id":"oxt_builder-292",
			"name":"sortlistascendingnumeric",
			"display name":"SortListAscendingNumeric",
			"library":"oxt_builder",
			"type":"statement",
			"syntax":[
				"sort <Target> in ascending numeric order"
			],
			"display syntax":[
				"sort <i>Target</i> in ascending numeric order"
			],
			"associations":["com.livecode.sort"],
			"summary":"Sorts <Target> in ascending numeric order.",
			"parameters":[{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a list of numbers."
			}],
			"examples":[{
				"script":"    variable tTestList as List\n    put [3,4,5,1,2] into tTestList\n\n    sort tTestList in ascending numeric order -- tTestList is [1,2,3,4,5]"
			}],
			"description":"Numeric sort is performed by comparing numeric elements by cardinality.\n>*Note:* It is an error if <Target> contains any elements of non-numeric type.",
			"tags":["sorting"]
		},{
			"id":"oxt_builder-293",
			"name":"sortlistascending",
			"display name":"SortListAscending",
			"library":"oxt_builder",
			"type":"statement",
			"syntax":[
				"sort <Target> [in ascending order]"
			],
			"display syntax":[
				"sort <i>Target</i> [in ascending order]"
			],
			"associations":["com.livecode.sort"],
			"summary":"Sorts <Target> in ascending order.",
			"parameters":[{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a list."
			}],
			"examples":[{
				"script":"    variable tTestList as List\n\tput [4,3,1,5,2] into tTestList\n\n    sort tTestList -- tTestList is [1,2,3,4,5]"
			}],
			"description":"Generic sort is performed by comparing the elements of a homogeneous list according to the default comparison function associated to the type of its elements.\n>*Note:* It is an error if <Target> is not homogeneous, i.e. if it contains any elements of differing type.",
			"tags":["sorting"]
		},{
			"id":"oxt_builder-294",
			"name":"sortlistdescendingtext",
			"display name":"SortListDescendingText",
			"library":"oxt_builder",
			"type":"statement",
			"syntax":[
				"sort <Target> in descending text order"
			],
			"display syntax":[
				"sort <i>Target</i> in descending text order"
			],
			"associations":["com.livecode.sort"],
			"summary":"Sorts <Target> in descending text order.",
			"parameters":[{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a list of strings."
			}],
			"examples":[{
				"script":"    variable tTestList as List\n    put the empty list into tTestList\n\n    push \"abcd\" onto tTestList\n    push \"xyz\" onto tTestList\n\n    sort tTestList in descending text order -- tTestList is [\"xyz\", \"abcd\"]"
			}],
			"description":"Text sort is performed by comparing string elements on a codepoint by codepoint basis.\n>*Note:* It is an error if <Target> contains any elements of non-string type.",
			"tags":["sorting"]
		},{
			"id":"oxt_builder-295",
			"name":"sortlistascendingtext",
			"display name":"SortListAscendingText",
			"library":"oxt_builder",
			"type":"statement",
			"syntax":[
				"sort <Target> in ascending text order"
			],
			"display syntax":[
				"sort <i>Target</i> in ascending text order"
			],
			"associations":["com.livecode.sort"],
			"summary":"Sorts <Target> in ascending text order.",
			"parameters":[{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a list of strings."
			}],
			"examples":[{
				"script":"    variable tTestList as List\n\n\tvariable tChar\n\trepeat for each char tChar in \"spoilage\"\n\t\tpush tChar onto tTestList\n\tend repeat\n\n    sort tTestList in ascending text order\n    variable tString as String\n    combine tTestList with \"\" into tString -- tString is \"aegilops\""
			}],
			"description":"Text sort is performed by comparing string elements on a codepoint by codepoint basis.\n>*Note:* It is an error if <Target> contains any elements of non-string type.",
			"tags":["sorting"]
		},{
			"id":"oxt_builder-296",
			"name":"sortlistdescendingbinary",
			"display name":"SortListDescendingBinary",
			"library":"oxt_builder",
			"type":"statement",
			"syntax":[
				"sort <Target> in descending byte order"
			],
			"display syntax":[
				"sort <i>Target</i> in descending byte order"
			],
			"associations":["com.livecode.sort"],
			"summary":"Sorts <Target> in descending binary order.",
			"parameters":[{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a list of binary data."
			}],
			"description":"Binary sort is performed by comparing data elements on a byte by byte basis.\n>*Note:* It is an error if <Target> contains any elements of non-data type.",
			"tags":["sorting"]
		},{
			"id":"oxt_builder-297",
			"name":"sortlistdescending",
			"display name":"SortListDescending",
			"library":"oxt_builder",
			"type":"statement",
			"syntax":[
				"sort <Target> in descending order"
			],
			"display syntax":[
				"sort <i>Target</i> in descending order"
			],
			"associations":["com.livecode.sort"],
			"summary":"Sorts <Target> in descending text order.",
			"parameters":[{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a list of strings."
			}],
			"examples":[{
				"script":"   \tvariable tTestList as List\n\tput [\"a\", \"b\", \"c\"] into tTestList\n\n    sort tTestList in descending order -- tTestList is [\"c\", \"b\", \"a\"]"
			}],
			"description":"Generic sort is performed by comparing the elements of a homogeneous list according to the default comparison function associated to the type of its elements.\n>*Note:* It is an error if <Target> is not homogeneous, i.e. if it contains any elements of differing type.",
			"tags":["sorting"]
		},{
			"id":"oxt_builder-298",
			"name":"com.livecode.sort",
			"display name":"com.livecode.sort",
			"library":"oxt_builder",
			"type":"module",
			"display syntax":[
				"com.livecode.sort"
			],
			"associations":["com.livecode.sort"],
			"summary":"This library consists of the sorting operations provided by the standard library of LiveCode Builder.",
			"description":"This library consists of the sorting operations provided by the standard library of LiveCode Builder."
		},{
			"id":"oxt_builder-299",
			"name":"unitplan",
			"display name":"UnitPlan",
			"library":"oxt_builder",
			"type":"statement",
			"syntax":[
				"plan <Count> tests"
			],
			"display syntax":[
				"plan <i>Count</i> tests"
			],
			"associations":["com.livecode.unittest"],
			"summary":"Announce how many test results are expected from the unit test.",
			"examples":[{
				"script":"plan 3 tests"
			}],
			"description":"Log the number of unit test assertions which are expected to occur in the\ncurrent unit test.  This may be used by the test framework to flag an error if\ntoo few test results appear in the test result.  For example, this allows the\ntest framework to detect whether a unit test failed silently.\n\nUsing `plan _ tests` is optional, and a unit test is valid even if its omitted.",
			"tags":["unit tests","unit tests"]
		},{
			"id":"oxt_builder-300",
			"name":"unittestfailsdescription",
			"display name":"UnitTestFailsDescription",
			"library":"oxt_builder",
			"type":"statement",
			"syntax":[
				"broken test <Description> when <Condition>"
			],
			"display syntax":[
				"broken test <i>Description</i> when <i>Condition</i>"
			],
			"associations":["com.livecode.unittest"],
			"summary":"Make a failing unit test assertion with a description",
			"parameters":[{
				"name":"Condition",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to `true` if the test is successful"
			}],
			"examples":[{
				"script":"broken test \"weird comparison\" when 1 > 2"
			}],
			"description":"Make a unit test assertion, in the expectation that it will fail. The test is\nconsidered to have passed if <Condition> is true.  The <Description> string is\na short message that summarises what the test is checking.\n\nIf the test fails, it will not cause a test suite failure; instead, an\n\"expected failure\" will be recorded.  If the test passes, an \"unexpected pass\"\nwill be recorded instead of a normal test pass.",
			"tags":["unit tests","unit tests"]
		},{
			"id":"oxt_builder-301",
			"name":"unittestfailsdescriptionandreason",
			"display name":"UnitTestFailsDescriptionAndReason",
			"library":"oxt_builder",
			"type":"statement",
			"syntax":[
				"broken test <Description> when <Condition> because <Reason>"
			],
			"display syntax":[
				"broken test <i>Description</i> when <i>Condition</i> because <i>Reason</i>"
			],
			"associations":["com.livecode.unittest"],
			"summary":"Make a failing unit test assertion with a reason for brokenness",
			"parameters":[{
				"name":"Condition",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to `true` if the test is successful"
			},{
				"name":"Reason",
				"type":"",
				"refparam":"false",
				"description":"A short explanation of why the test is broken"
			}],
			"examples":[{
				"script":"broken test \"weird comparison\" when 1 > 2 because \"bug 12345\""
			}],
			"description":"Make a unit test assertion, in the expectation that it will fail. The test is\nconsidered to have passed if <Condition> is true.  The <Description> is a\nmessage that summarises the broken test, and the <Reason> explains why the test\nis broken (usually referencing a bug report).\n\nIf the test fails, it will not cause a test suite failure; instead, an\n\"expected failure\" will be recorded.  If the test passes, an \"unexpected pass\"\nwill be recorded instead of a normal test pass.",
			"tags":["unit tests","unit tests"]
		},{
			"id":"oxt_builder-302",
			"name":"unittestfailsreason",
			"display name":"UnitTestFailsReason",
			"library":"oxt_builder",
			"type":"statement",
			"syntax":[
				"broken test <Condition> because <Reason>"
			],
			"display syntax":[
				"broken test <i>Condition</i> because <i>Reason</i>"
			],
			"associations":["com.livecode.unittest"],
			"summary":"Make a failing unit test assertion with a reason for brokenness",
			"parameters":[{
				"name":"Condition",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to `true` if the test is successful"
			},{
				"name":"Reason",
				"type":"",
				"refparam":"false",
				"description":"A short explanation of why the test is broken"
			}],
			"examples":[{
				"script":"broken test 1 > 2 because \"bug 12345\""
			}],
			"description":"Make a unit test assertion, in the expectation that it will fail. The test is\nconsidered to have passed if <Condition> is true.  The <Reason> is a shor\nmessage that describes why the test is broken (usually referencing a bug\nreport).\n\nIf the test fails, it will not cause a test suite failure; instead, an\n\"expected failure\" will be recorded.  If the test passes, an \"unexpected pass\"\nwill be recorded instead of a normal test pass.",
			"tags":["unit tests","unit tests"]
		},{
			"id":"oxt_builder-303",
			"name":"unittestfails",
			"display name":"UnitTestFails",
			"library":"oxt_builder",
			"type":"statement",
			"syntax":[
				"broken test <Condition>"
			],
			"display syntax":[
				"broken test <i>Condition</i>"
			],
			"associations":["com.livecode.unittest"],
			"summary":"Make a failing unit test assertion",
			"examples":[{
				"script":"broken test 1 > 2"
			}],
			"description":"Make a unit test assertion, in the expectation that it will fail, and without\nproviding a description or reason.  It is usually more helpful to use\n<UnitTestFailsDescriptionAndReason>.",
			"references":{
				"statement":["UnitTestFailsDescriptionAndReason"]
			},
			"tags":["unit tests","unit tests"]
		},{
			"id":"oxt_builder-304",
			"name":"unittestskipdescriptionandreason",
			"display name":"UnitTestSkipDescriptionAndReason",
			"library":"oxt_builder",
			"type":"statement",
			"syntax":[
				"skip test <Description> because <Reason>"
			],
			"display syntax":[
				"skip test <i>Description</i> because <i>Reason</i>"
			],
			"associations":["com.livecode.unittest"],
			"summary":"Record a skipped test with a test description and reason for skipping",
			"parameters":[{
				"name":"Reason",
				"type":"",
				"refparam":"false",
				"description":"A brief explanation of why the test was skipped"
			}],
			"examples":[{
				"script":"skip test \"open web socket\" because \"not implemented\""
			}],
			"description":"Record that a test was skipped.  The <Description> is a message that summarises\nthe test that was skipped, and the <Reason> explains why the test couldn't be\ndone.  For example, the feature being tested isn't supported by the platform\nthat the test is running on.",
			"tags":["unit tests","unit tests"]
		},{
			"id":"oxt_builder-305",
			"name":"unittestskip",
			"display name":"UnitTestSkip",
			"library":"oxt_builder",
			"type":"statement",
			"syntax":[
				"skip test"
			],
			"display syntax":[
				"skip test"
			],
			"associations":["com.livecode.unittest"],
			"summary":"Record a skipped test",
			"description":"Record that a test was skipped, with no description or reason.  It is usually\nmore helpful to use <UnitTestSkipDescriptionAndReason>.",
			"references":{
				"statement":["UnitTestSkipDescriptionAndReason"]
			},
			"tags":["unit tests","unit tests"]
		},{
			"id":"oxt_builder-306",
			"name":"unittestskipreason",
			"display name":"UnitTestSkipReason",
			"library":"oxt_builder",
			"type":"statement",
			"syntax":[
				"skip test because <Reason>"
			],
			"display syntax":[
				"skip test because <i>Reason</i>"
			],
			"associations":["com.livecode.unittest"],
			"summary":"Record a skipped test with a reason for skipping",
			"examples":[{
				"script":"skip test because \"not implemented\""
			}],
			"description":"Record that a test was skipped, including a reason for skipping the test.  The\n<Reason> is a short message that describes why the test has to be skipped.",
			"tags":["unit tests","unit tests"]
		},{
			"id":"oxt_builder-307",
			"name":"unitdiagnostic",
			"display name":"UnitDiagnostic",
			"library":"oxt_builder",
			"type":"statement",
			"syntax":[
				"test diagnostic <Message>"
			],
			"display syntax":[
				"test diagnostic <i>Message</i>"
			],
			"associations":["com.livecode.unittest"],
			"summary":"Log unit test diagnostic message.",
			"examples":[{
				"script":"test diagnostic \"File access tests\""
			}],
			"description":"Log a message as a test diagnostic.  The <Message> may have multiple lines.\nYou may wish to log diagnostic messages to help make the test log easier to\nread by adding info about what's being tested, or add information when a test\nfails to help understand why the failure occurred.",
			"tags":["unit tests","unit tests"]
		},{
			"id":"oxt_builder-308",
			"name":"unittestskipdescription",
			"display name":"UnitTestSkipDescription",
			"library":"oxt_builder",
			"type":"statement",
			"syntax":[
				"skip test <Description>"
			],
			"display syntax":[
				"skip test <i>Description</i>"
			],
			"associations":["com.livecode.unittest"],
			"summary":"Record a skipped test with a description",
			"examples":[{
				"script":"skip test \"open web socket\""
			}],
			"description":"Record that a test was skipped.  The <Description> string is a short message\nthat summarises the test that was skipped.",
			"tags":["unit tests","unit tests"]
		},{
			"id":"oxt_builder-309",
			"name":"com.livecode.unittest",
			"display name":"com.livecode.unittest",
			"library":"oxt_builder",
			"type":"module",
			"display syntax":[
				"com.livecode.unittest"
			],
			"associations":["com.livecode.unittest"],
			"summary":"This library provides syntax for unit testing Builder\nprograms.  It is used by the LiveCode Builder standard library's\ntestsuite.\n\nTo use this library, write your tests in a Builder source code file.\nEach group of tests should be a public handler with a name beginning\nwith `Test`.  If possible, use one test per handler.  Otherwise, add a\n`plan N tests` statement at the start of the handler.",
			"examples":[{
				"script":"public handler TestSelf()\n\tplan 10 tests\n\n\ttest diagnostic \"Normal tests\"\n\ttest 2 > 1\n\ttest \"Basic test\" when true\n\n\ttest diagnostic \"Skipped tests\"\n\tskip test\n\tskip test \"Skipped 2\"\n\tskip test because \"Not implemented\"\n\tskip test \"Skipped 4\" because \"Not supported on this platform\"\n\n\ttest diagnostic \"Tests which are expected to fail\"\n\tbroken test false\n\tbroken test \"Failed 2\" when false\n\tbroken test false because \"broken\"\n\tbroken test \"Failed 4\" when false because \"really broken\"\nend handler\n\nThe test results are output on standard output in TAP (Test Anything\nProtocol) format."
			}],
			"description":"This library provides syntax for unit testing Builder\nprograms.  It is used by the LiveCode Builder standard library's\ntestsuite.\n\nTo use this library, write your tests in a Builder source code file.\nEach group of tests should be a public handler with a name beginning\nwith `Test`.  If possible, use one test per handler.  Otherwise, add a\n`plan N tests` statement at the start of the handler."
		},{
			"id":"oxt_builder-310",
			"name":"unittest",
			"display name":"UnitTest",
			"library":"oxt_builder",
			"type":"statement",
			"syntax":[
				"test <Condition>"
			],
			"display syntax":[
				"test <i>Condition</i>"
			],
			"associations":["com.livecode.unittest"],
			"summary":"Make a unit test assertion",
			"examples":[{
				"script":"test 2 > 1"
			}],
			"description":"Make a basic unit test assertion, with no test description.  It is usually more\nhelpful to use <UnitTestDescription>.",
			"references":{
				"statement":["UnitTestDescription"]
			},
			"tags":["unit tests","unit tests"]
		},{
			"id":"oxt_builder-311",
			"name":"unittestdescription",
			"display name":"UnitTestDescription",
			"library":"oxt_builder",
			"type":"statement",
			"syntax":[
				"test <Description> when <Condition>"
			],
			"display syntax":[
				"test <i>Description</i> when <i>Condition</i>"
			],
			"associations":["com.livecode.unittest"],
			"summary":"Make a unit test assertion with a description",
			"parameters":[{
				"name":"Condition",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to `true` if the test is successful"
			}],
			"examples":[{
				"script":"test \"integer greater than\" when 2 > 1"
			}],
			"description":"Make a unit test assertion.  The test is considered to have passed if\n<Condition> is true.  The <Description> string is a short message that\nsummarises what the test is checking.",
			"tags":["unit tests","unit tests"]
		},{
			"id":"oxt_builder-312",
			"name":"byteisindata",
			"display name":"ByteIsInData",
			"library":"oxt_builder",
			"type":"operator",
			"syntax":[
				"<Needle> is in <Target>"
			],
			"display syntax":[
				"<i>Needle</i> is in <i>Target</i>"
			],
			"associations":["com.livecode.byte"],
			"summary":"Determines whether <Needle> is in <Target>.",
			"parameters":[{
				"name":"Needle",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a single byte of binary data."
			},{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to binary data."
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"True if <Needle> is among the bytes of <Target>, and false otherwise."
			}],
			"description":">*Note:* It is an error if <Needle> evaluates to data consisting of more than one byte.",
			"tags":["binary"]
		},{
			"id":"oxt_builder-313",
			"name":"byteoffset",
			"display name":"ByteOffset",
			"library":"oxt_builder",
			"type":"operator",
			"syntax":[
				"the ( first | last ) offset of <Needle> in <Target>"
			],
			"display syntax":[
				"the ( first | last ) offset of <i>Needle</i> in <i>Target</i>"
			],
			"associations":["com.livecode.byte"],
			"summary":"Finds the first or last occurrence of <Needle> within <Target>",
			"parameters":[{
				"name":"Needle",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to binary data."
			},{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to binary data."
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"Returns the offset of <Needle> in <Target>."
			}],
			"description":"The first (respectively last) offset of <Needle> in <Target> is number of bytes between the first byte of <Target> and the first (respectively last) occurrence of <Needle>. If neither first or last is specified, then the first offset is found. If <Needle> does not occur in <Target>, then the output is 0.",
			"tags":["binary"]
		},{
			"id":"oxt_builder-314",
			"name":"deletefirstbyteof",
			"display name":"DeleteFirstByteOf",
			"library":"oxt_builder",
			"type":"statement",
			"syntax":[
				"delete the first byte of <Target>"
			],
			"display syntax":[
				"delete the first byte of <i>Target</i>"
			],
			"associations":["com.livecode.byte"],
			"summary":"Deletes the first byte in <Target>.",
			"parameters":[{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"A binary data container."
			}],
			"description":"Replaces the first byte in <Target> with the empty data.\n\n>*Note:* It is an error if <Target> is the empty data.",
			"tags":["binary"]
		},{
			"id":"oxt_builder-315",
			"name":"singletonbyteof",
			"display name":"SingletonByteOf",
			"library":"oxt_builder",
			"type":"operator",
			"syntax":[
				"byte <Index> of <Target>"
			],
			"display syntax":[
				"byte <i>Index</i> of <i>Target</i>"
			],
			"associations":["com.livecode.byte"],
			"summary":"Designates the byte of data at index <Index> in <Target>.",
			"parameters":[{
				"name":"Index",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a valid integer index of <Target>."
			},{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to binary data."
			}],
			"description":"Either locates the byte at the given index for use as the target container of another operation, or evaluates the byte at the given index as the source of another operation.\n\n>*Note:* It is an error if <Index> is out of range.",
			"tags":["binary"]
		},{
			"id":"oxt_builder-316",
			"name":"deletesingletonbyteof",
			"display name":"DeleteSingletonByteOf",
			"library":"oxt_builder",
			"type":"statement",
			"syntax":[
				"delete byte <Index> of <Target>"
			],
			"display syntax":[
				"delete byte <i>Index</i> of <i>Target</i>"
			],
			"associations":["com.livecode.byte"],
			"summary":"Deletes the byte of data at index <Index> in <Target>.",
			"parameters":[{
				"name":"Index",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a valid integer index of <Target>."
			},{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"A container of binary data."
			}],
			"description":"Replaces the byte at the given index with the empty data.\n\n>*Note:* It is an error if <Index> is out of range.",
			"tags":["binary"]
		},{
			"id":"oxt_builder-317",
			"name":"randombytes",
			"display name":"RandomBytes",
			"library":"oxt_builder",
			"type":"operator",
			"syntax":[
				"<Count> random bytes"
			],
			"display syntax":[
				"<i>Count</i> random bytes"
			],
			"associations":["com.livecode.byte"],
			"summary":"Generate random data",
			"parameters":[{
				"name":"Count",
				"type":"",
				"refparam":"false",
				"description":"Expression evaluating to the number of bytes to generate"
			}],
			"description":"Generates the requested number of bytes of cryptographic-quality\nrandom data.",
			"tags":["binary","random"]
		},{
			"id":"oxt_builder-318",
			"name":"repeatforeachbyte",
			"display name":"RepeatForEachByte",
			"library":"oxt_builder",
			"type":"iterator",
			"syntax":[
				"byte <Iterand>"
			],
			"display syntax":[
				"byte <i>Iterand</i>"
			],
			"associations":["com.livecode.byte"],
			"summary":"Repeat over the bytes of some data",
			"parameters":[{
				"name":"Iterand",
				"type":"",
				"refparam":"false",
				"description":"A container of binary data."
			}],
			"description":"Use repeat for each to perform an operation on each byte of some data. On each iteration, the <Iterand> will contain the next char of the string being iterated over.",
			"tags":["binary","control structures"]
		},{
			"id":"oxt_builder-319",
			"name":"deleterangebyteof",
			"display name":"DeleteRangeByteOf",
			"library":"oxt_builder",
			"type":"statement",
			"syntax":[
				"delete byte <Start> to <Finish> of <Target>"
			],
			"display syntax":[
				"delete byte <i>Start</i> to <i>Finish</i> of <i>Target</i>"
			],
			"associations":["com.livecode.byte"],
			"summary":"Deletes the bytes of data between indices <Start> and <Finish> in <Target>.",
			"parameters":[{
				"name":"Start",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a valid integer index of <Target>."
			},{
				"name":"Finish",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a valid integer index of <Target>."
			},{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"A container of binary data."
			}],
			"description":"Replaces the bytes between the given indices with the empty data.\n\n>*Note:* It is an error if either <Start> or <Finish> are out of range.",
			"tags":["binary"]
		},{
			"id":"oxt_builder-320",
			"name":"bytewithcode",
			"display name":"ByteWithCode",
			"library":"oxt_builder",
			"type":"operator",
			"syntax":[
				"the byte with code <Value>"
			],
			"display syntax":[
				"the byte with code <i>Value</i>"
			],
			"associations":["com.livecode.byte"],
			"summary":"Create a 1-byte data value from a number",
			"parameters":[{
				"name":"Value",
				"type":"",
				"refparam":"false",
				"description":"The value for the new data value"
			}],
			"description":"Returns a byte of binary data, created using the given value.  The\n<Value> must be between 0 and 255 (inclusive).",
			"tags":["binary"]
		},{
			"id":"oxt_builder-321",
			"name":"countbytesof",
			"display name":"CountBytesOf",
			"library":"oxt_builder",
			"type":"operator",
			"syntax":[
				"the number of bytes in <Target>"
			],
			"display syntax":[
				"the number of bytes in <i>Target</i>"
			],
			"associations":["com.livecode.byte"],
			"summary":"Counts the number of bytes in <Target>.",
			"parameters":[{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to binary data."
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"The number of bytes in <Target>"
			}],
			"description":"Counts the number of bytes in <Target>.",
			"tags":["binary"]
		},{
			"id":"oxt_builder-322",
			"name":"byteoffsetafter",
			"display name":"ByteOffsetAfter",
			"library":"oxt_builder",
			"type":"operator",
			"syntax":[
				"the ( first | last ) offset of <Needle> after <After> in <Target>"
			],
			"display syntax":[
				"the ( first | last ) offset of <i>Needle</i> after <i>After</i> in <i>Target</i>"
			],
			"associations":["com.livecode.byte"],
			"summary":"Finds the first or last occurrence of <Needle> after a specified index in <Target>",
			"parameters":[{
				"name":"Needle",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to binary data."
			},{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to binary data."
			},{
				"name":"After",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a valid integer index of Target."
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"Returns the offset of <Needle> after index <After> in <Target>."
			}],
			"description":"The first (respectively last) offset of <Needle> in <Target> is number of bytes between byte <After> of <Target> and the first (respectively last) occurrence of <Needle> after <After>. If neither first or last is specified, then the first offset is found. If <Needle> does not occur after <After> in <Target>, then the output is 0.",
			"tags":["binary"]
		},{
			"id":"oxt_builder-323",
			"name":"com.livecode.byte",
			"display name":"com.livecode.byte",
			"library":"oxt_builder",
			"type":"module",
			"display syntax":[
				"com.livecode.byte"
			],
			"associations":["com.livecode.byte"],
			"summary":"This library consists of the operations on bytes included in the standard library of LiveCode Builder.",
			"description":"This library consists of the operations on bytes included in the standard library of LiveCode Builder."
		},{
			"id":"oxt_builder-324",
			"name":"beginswithbytes",
			"display name":"BeginsWithBytes",
			"library":"oxt_builder",
			"type":"operator",
			"syntax":[
				"<Target> begins with <Needle>"
			],
			"display syntax":[
				"<i>Target</i> begins with <i>Needle</i>"
			],
			"associations":["com.livecode.byte"],
			"summary":"Determines whether <Target> begins with <Needle>.",
			"parameters":[{
				"name":"Needle",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to binary data."
			},{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to binary data."
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"True if the bytes of <Needle> occur as an initial subsequence of the bytes of <Target>, and false otherwise."
			}],
			"description":">*Note:* Since the empty data is an initial subsequence of every sequence of bytes, every sequence of bytes begins with the empty data.",
			"tags":["binary"]
		},{
			"id":"oxt_builder-325",
			"name":"endswithbytes",
			"display name":"EndsWithBytes",
			"library":"oxt_builder",
			"type":"operator",
			"syntax":[
				"<Target> ends with <Needle>"
			],
			"display syntax":[
				"<i>Target</i> ends with <i>Needle</i>"
			],
			"associations":["com.livecode.byte"],
			"summary":"Determines whether <Target> ends with <Needle>.",
			"parameters":[{
				"name":"Needle",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to binary data."
			},{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to binary data."
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"True if the bytes of <Needle> occur as a final subsequence of the bytes of <Target>, and false otherwise."
			}],
			"description":">*Note:* Since the empty data is a final subsequence of every sequence of bytes, every sequence of bytes ends with the empty data.",
			"tags":["binary"]
		},{
			"id":"oxt_builder-326",
			"name":"containsbytes",
			"display name":"ContainsBytes",
			"library":"oxt_builder",
			"type":"operator",
			"syntax":[
				"<Target> contains <Needle>"
			],
			"display syntax":[
				"<i>Target</i> contains <i>Needle</i>"
			],
			"associations":["com.livecode.byte"],
			"summary":"Determines whether <Needle> contains <Target>.",
			"parameters":[{
				"name":"Needle",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to binary data."
			},{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to binary data."
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"True if the bytes of <Needle> occur as a subsequence of the bytes of <Target>, and false otherwise."
			}],
			"description":">*Note:* Since the empty data is a subsequence of every sequence of bytes, every sequence of bytes contains the empty data.",
			"tags":["binary"]
		},{
			"id":"oxt_builder-327",
			"name":"lastbyteof",
			"display name":"LastByteOf",
			"library":"oxt_builder",
			"type":"operator",
			"syntax":[
				"the last byte of <Target>"
			],
			"display syntax":[
				"the last byte of <i>Target</i>"
			],
			"associations":["com.livecode.byte"],
			"summary":"Designates the first byte of data in <Target>.",
			"parameters":[{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to binary data."
			}],
			"description":"Either locates the first byte for use as the target container of another operation, or evaluates the first byte as the source of another operation.\n\n>*Note:* It is an error if <Target> is empty.",
			"tags":["binary"]
		},{
			"id":"oxt_builder-328",
			"name":"deletelastbyteof",
			"display name":"DeleteLastByteOf",
			"library":"oxt_builder",
			"type":"statement",
			"syntax":[
				"delete the last byte of <Target>"
			],
			"display syntax":[
				"delete the last byte of <i>Target</i>"
			],
			"associations":["com.livecode.byte"],
			"summary":"Deletes the last byte in <Target>.",
			"parameters":[{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"A binary data container."
			}],
			"description":"Replaces the last byte in <Target> with the empty data.\n\n>*Note:* It is an error if <Target> is the empty data.",
			"tags":["binary"]
		},{
			"id":"oxt_builder-329",
			"name":"byteoffsetbefore",
			"display name":"ByteOffsetBefore",
			"library":"oxt_builder",
			"type":"operator",
			"syntax":[
				"the ( first | last ) offset of <Needle> before <Before> in <Target>"
			],
			"display syntax":[
				"the ( first | last ) offset of <i>Needle</i> before <i>Before</i> in <i>Target</i>"
			],
			"associations":["com.livecode.byte"],
			"summary":"Finds the first or last occurrence of <Needle> before a specified index in <Target>.",
			"parameters":[{
				"name":"Needle",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to binary data."
			},{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to binary data."
			},{
				"name":"Before",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a valid integer index of Target."
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"Returns the offset of <Needle> before index <Before> in <Target>."
			}],
			"description":"The first (respectively last) offset of <Needle> in <Target> is number of bytes between the first byte of <Target> and the first (respectively last) occurrence of <Needle> before <Before>. If neither first or last is specified, then the last offset is found. If <Needle> does not occur before <Before> in <Target>, then the output is 0.",
			"tags":["binary"]
		},{
			"id":"oxt_builder-330",
			"name":"firstbyteof",
			"display name":"FirstByteOf",
			"library":"oxt_builder",
			"type":"operator",
			"syntax":[
				"the first byte of <Target>"
			],
			"display syntax":[
				"the first byte of <i>Target</i>"
			],
			"associations":["com.livecode.byte"],
			"summary":"Designates the first byte of data in <Target>.",
			"parameters":[{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to binary data."
			}],
			"description":"Either locates the first byte for use as the target container of another operation, or evaluates the first byte as the source of another operation.\n\n>*Note:* It is an error if <Target> is empty.",
			"tags":["binary"]
		},{
			"id":"oxt_builder-331",
			"name":"codeofbyte",
			"display name":"CodeOfByte",
			"library":"oxt_builder",
			"type":"operator",
			"syntax":[
				"the code of <Target>"
			],
			"display syntax":[
				"the code of <i>Target</i>"
			],
			"associations":["com.livecode.byte"],
			"summary":"Get the numeric value of a single byte.",
			"parameters":[{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"A 1-byte binary data value."
			}],
			"description":"Returns the numeric representation of a single byte of binary data.",
			"tags":["binary"]
		},{
			"id":"oxt_builder-332",
			"name":"rangebyteof",
			"display name":"RangeByteOf",
			"library":"oxt_builder",
			"type":"operator",
			"syntax":[
				"byte <Start> to <Finish> of <Target>"
			],
			"display syntax":[
				"byte <i>Start</i> to <i>Finish</i> of <i>Target</i>"
			],
			"associations":["com.livecode.byte"],
			"summary":"Designates the bytes of data between indices <Start> and <Finish> in <Target>.",
			"parameters":[{
				"name":"Start",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a valid integer index of <Target>."
			},{
				"name":"Finish",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a valid integer index of <Target>."
			},{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to binary data."
			}],
			"description":"Either locates the bytes between the given indices for use as the target container of another operation, or evaluates the bytes at the given indices as the source of another operation.\n\n>*Note:* It is an error if either <Start> or <Finish> are out of range.",
			"tags":["binary"]
		},{
			"id":"oxt_builder-333",
			"name":"reversebytesof",
			"display name":"ReverseBytesOf",
			"library":"oxt_builder",
			"type":"statement",
			"syntax":[
				"reverse <Target>"
			],
			"display syntax":[
				"reverse <i>Target</i>"
			],
			"associations":["com.livecode.byte"],
			"summary":"Reverse binary data",
			"parameters":[{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"A binary data string"
			}],
			"examples":[{
				"script":"variable tForward\nput 5 random bytes into tForward\n\nvariable tReversed\nput tForward into tReversed\nreverse tReversed\n\nexpect that the first byte of tForward is the last byte of tReversed\nexpect that the last byte of tForward is the first byte of tReversed"
			}],
			"description":"Reverses the order of bytes in the <Target>.",
			"tags":["binary"]
		},{
			"id":"oxt_builder-334",
			"name":"bitwiseshiftleft",
			"display name":"BitwiseShiftLeft",
			"library":"oxt_builder",
			"type":"operator",
			"syntax":[
				"<Operand> shifted left by <Shift> bitwise"
			],
			"display syntax":[
				"<i>Operand</i> shifted left by <i>Shift</i> bitwise"
			],
			"associations":["com.livecode.bitwise"],
			"summary":"Shifts the bits of <Operand> left.",
			"parameters":[{
				"name":"Operand",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to an integer."
			},{
				"name":"Shift",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to an integer."
			}],
			"examples":[{
				"script":"variable tVar\nput 7 shifted left by 2 bitwise into tVar -- tVar contains 28"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"The result of bit-shifting <Operand> left by <Shift> places."
			}],
			"description":"Shifts the bits of <Operand> left. Shifting the bits of <Operand> left\nby x is equivalent to multiplying by 2^x.",
			"tags":["bitwise operations"]
		},{
			"id":"oxt_builder-335",
			"name":"bitwiseor",
			"display name":"BitwiseOr",
			"library":"oxt_builder",
			"type":"operator",
			"syntax":[
				"<Left> bitwise or <Right>"
			],
			"display syntax":[
				"<i>Left</i> bitwise or <i>Right</i>"
			],
			"associations":["com.livecode.bitwise"],
			"summary":"Performs a bitwise OR operation on the binary representations of <Left> and <Right>.",
			"parameters":[{
				"name":"Left",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to an integer."
			},{
				"name":"Right",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to an integer."
			}],
			"examples":[{
				"script":"variable tVar as Number\nput 3 bitwise or 6 into tVar -- tVar contains 7"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"The integer whose binary representation is the result of the bitwise OR operation."
			}],
			"description":"Each bit of <Left> bitwise or <Right> is 0 if and only if both the corresponding bit of the binary representation of <Left> and that of <Right> is 0. Otherwise it is 1.",
			"tags":["bitwise operations"]
		},{
			"id":"oxt_builder-336",
			"name":"bitwisexor",
			"display name":"BitwiseXor",
			"library":"oxt_builder",
			"type":"operator",
			"syntax":[
				"<Left> bitwise xor <Right>"
			],
			"display syntax":[
				"<i>Left</i> bitwise xor <i>Right</i>"
			],
			"associations":["com.livecode.bitwise"],
			"summary":"Performs a bitwise XOR operation on the binary representations of <Left> and <Right>.",
			"parameters":[{
				"name":"Left",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to an integer."
			},{
				"name":"Right",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to an integer."
			}],
			"examples":[{
				"script":"variable tVar as Number\nput 3 bitwise xor 6 into tVar -- tVar contains 5"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"The integer whose binary representation is the result of the bitwise XOR operation."
			}],
			"description":"Each bit of <Left> bitwise xor <Right> is 1 if and only if exactly one of the corresponding bits of the binary representation of <Left> and that of <Right> is 1. Otherwise it is 0.",
			"tags":["bitwise operations"]
		},{
			"id":"oxt_builder-337",
			"name":"bitwisenot",
			"display name":"BitwiseNot",
			"library":"oxt_builder",
			"type":"operator",
			"syntax":[
				"bitwise not <Operand>"
			],
			"display syntax":[
				"bitwise not <i>Operand</i>"
			],
			"associations":["com.livecode.bitwise"],
			"summary":"Performs a bitwise NOT operation on the binary representation of <Operand>.",
			"parameters":[{
				"name":"Operand",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to an integer."
			}],
			"examples":[{
				"script":"variable tVar as Number\nput bitwise not -5 into tVar -- tVar contains 4"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"The integer whose binary representation is the result of the bitwise NOT operation."
			}],
			"description":"Bitwise not returns the complement of <Operand> as a signed two's\ncomplement integer, i.e. equivalent to -(x + 1).",
			"tags":["bitwise operations"]
		},{
			"id":"oxt_builder-338",
			"name":"bitwiseshiftright",
			"display name":"BitwiseShiftRight",
			"library":"oxt_builder",
			"type":"operator",
			"syntax":[
				"<Operand> shifted right by <Shift> bitwise"
			],
			"display syntax":[
				"<i>Operand</i> shifted right by <i>Shift</i> bitwise"
			],
			"associations":["com.livecode.bitwise"],
			"summary":"Shifts the bits of <Operand> right.",
			"parameters":[{
				"name":"Operand",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to an integer."
			},{
				"name":"Shift",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to an integer."
			}],
			"examples":[{
				"script":"variable tVar\nput 7 shifted right by 2 bitwise into tVar -- tVar contains 1"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"The result of bit-shifting <Operand> right by <Shift> places."
			}],
			"description":"Shifts the bits of <Operand> right. Shifting the bits of <Operand>\nright by x is equivalent to dividing by 2^x (rounding down)",
			"tags":["bitwise operations"]
		},{
			"id":"oxt_builder-339",
			"name":"bitwiseand",
			"display name":"BitwiseAnd",
			"library":"oxt_builder",
			"type":"operator",
			"syntax":[
				"<Left> bitwise and <Right>"
			],
			"display syntax":[
				"<i>Left</i> bitwise and <i>Right</i>"
			],
			"associations":["com.livecode.bitwise"],
			"summary":"Performs a bitwise AND operation on the binary representations of <Left> and <Right>.",
			"parameters":[{
				"name":"Left",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to an integer."
			},{
				"name":"Right",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to an integer."
			}],
			"examples":[{
				"script":"variable tVar as Number\nput 3 bitwise and 6 into tVar -- tVar contains 2"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"The integer whose binary representation is the result of the bitwise AND operation."
			}],
			"description":"Each bit of <Left> bitwise and <Right> is 1 if and only if both the corresponding bit of the binary representation of <Left> and that of <Right> is 1. Otherwise it is 0.",
			"tags":["bitwise operations"]
		},{
			"id":"oxt_builder-340",
			"name":"com.livecode.bitwise",
			"display name":"com.livecode.bitwise",
			"library":"oxt_builder",
			"type":"module",
			"display syntax":[
				"com.livecode.bitwise"
			],
			"associations":["com.livecode.bitwise"],
			"summary":"This module specifies the bitwise operations on integers included in the standard library of LiveCode Builder.",
			"description":"This module specifies the bitwise operations on integers included in the standard library of LiveCode Builder."
		},{
			"id":"oxt_builder-341",
			"name":"com.livecode.stream",
			"display name":"com.livecode.stream",
			"library":"oxt_builder",
			"type":"module",
			"display syntax":[
				"com.livecode.stream"
			],
			"associations":["com.livecode.stream"],
			"summary":"This module specifies the syntax definitions and bindings for\nstream input and output operations in modular LiveCode.",
			"description":"This module specifies the syntax definitions and bindings for\nstream input and output operations in modular LiveCode."
		},{
			"id":"oxt_builder-342",
			"name":"writetostream",
			"display name":"WriteToStream",
			"library":"oxt_builder",
			"type":"statement",
			"syntax":[
				"write <Buffer> to <Destination>"
			],
			"display syntax":[
				"write <i>Buffer</i> to <i>Destination</i>"
			],
			"associations":["com.livecode.stream"],
			"summary":"Write data to a stream.\nStream:An expression that evaluates to a stream.",
			"parameters":[{
				"name":"Buffer",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to binary data."
			}],
			"description":"Write some data to a stream.  If not all of the data can be written,\nfails with an error.\n\n>*Warning:* If the stream is able to accept only part of the data,\n>some streams will write that part of the data and discard the rest.\n>This may cause loss of data.",
			"tags":["io"]
		},{
			"id":"oxt_builder-343",
			"name":"defaulterrorstream",
			"display name":"DefaultErrorStream",
			"library":"oxt_builder",
			"type":"expression",
			"syntax":[
				"the error stream"
			],
			"display syntax":[
				"the error stream"
			],
			"associations":["com.livecode.stream"],
			"summary":"Default error stream.",
			"value":[{
				"name":"return",
				"type":"",
				"description":"The default error stream."
			}],
			"description":"The default error stream for diagnostic information.\n\nIn command-line programs, this is usually used to display error\nmessages.  In server programs, data output through this stream may be\nstored in the system log, depending on the server configuration.",
			"tags":["io"]
		},{
			"id":"oxt_builder-344",
			"name":"defaultoutputstream",
			"display name":"DefaultOutputStream",
			"library":"oxt_builder",
			"type":"expression",
			"syntax":[
				"the output stream"
			],
			"display syntax":[
				"the output stream"
			],
			"associations":["com.livecode.stream"],
			"summary":"Default output stream.",
			"value":[{
				"name":"return",
				"type":"",
				"description":"The default output stream."
			}],
			"description":"The default output stream for output from the program.\n\nIn command-line programs, this is usually used to output the results\nof running the program.  In CGI programs running on servers, this is\nusually used to output the data to be sent to the client.",
			"tags":["io"]
		},{
			"id":"oxt_builder-345",
			"name":"com.livecode.library.json",
			"display name":"com.livecode.library.json",
			"library":"oxt_builder",
			"type":"library",
			"display syntax":[
				"com.livecode.library.json"
			],
			"associations":["com.livecode.library.json"],
			"summary":"This library provides support for generating and parsing JavaScript\nObject Notation (JSON) data.  See also <http://json.org> and\n<https://tools.ietf.org/html/rfc7159>.",
			"description":"This library provides support for generating and parsing JavaScript\nObject Notation (JSON) data.  See also <http://json.org> and\n<https://tools.ietf.org/html/rfc7159>."
		},{
			"id":"oxt_builder-346",
			"name":"jsonimport",
			"display name":"JsonImport",
			"library":"oxt_builder",
			"type":"handler",
			"syntax":[
				"JsonImport(<pJson>)"
			],
			"display syntax":[
				"JsonImport(<i>pJson</i>)"
			],
			"associations":["com.livecode.library.json"],
			"summary":"Parse JSON text into a LiveCode value.",
			"parameters":[{
				"name":"pJson",
				"type":"",
				"refparam":"false",
				"description":"String containing JSON text"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"The top level value.  The type depends on the JSON content."
			}],
			"description":"<JsonImport> is used to convert data encoded in JSON format into a LiveCode\nvalue.  It parses <pJson> and returns the first top-level value found.  If any\nsyntax errors are found in <pJson>, an error is thrown.\n\nThe return value may be any of the following types, depending on the content\nof the file:\n\n* Array (for a JSON object)\n* List  (for a JSON array)\n* String (for a JSON string)\n* Number (for any JSON number)\n* Boolean (for JSON `true` or `false`)\n* nothing (for JSON `null`)",
			"tags":["json","library","json"]
		},{
			"id":"oxt_builder-347",
			"name":"jsonexport",
			"display name":"JsonExport",
			"library":"oxt_builder",
			"type":"handler",
			"syntax":[
				"JsonExport(<pValue>)"
			],
			"display syntax":[
				"JsonExport(<i>pValue</i>)"
			],
			"associations":["com.livecode.library.json"],
			"summary":"Format a LiveCode value as JSON text",
			"parameters":[{
				"name":"pValue",
				"type":"",
				"refparam":"false",
				"description":"A LiveCode value (Array, List, String, Number, Boolean, or nothing)"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"A string containing JSON-formatted text."
			}],
			"description":"<JsonExport> is used to convert a LiveCode value into data encoded in JSON\nformat.  If <pValue> is of a type that cannot be converted to JSON, an error is\nthrown.",
			"tags":["json","library","json"]
		},{
			"id":"oxt_builder-348",
			"name":"firstelementof",
			"display name":"FirstElementOf",
			"library":"oxt_builder",
			"type":"operator",
			"syntax":[
				"the first element of <Target>"
			],
			"display syntax":[
				"the first element of <i>Target</i>"
			],
			"associations":["com.livecode.list"],
			"summary":"Designates the first element in <Target>.",
			"parameters":[{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a list."
			}],
			"description":"Either locates the first element for use as the target container of another operation, or evaluates the first element as the source of another operation.\n\n>*Note:* It is an error if <Target> is empty.",
			"tags":["lists"]
		},{
			"id":"oxt_builder-349",
			"name":"com.livecode.list",
			"display name":"com.livecode.list",
			"library":"oxt_builder",
			"type":"module",
			"display syntax":[
				"com.livecode.list"
			],
			"associations":["com.livecode.list"],
			"summary":"This library consists of the operations on lists included in the standard library of LiveCode Builder.",
			"description":"This library consists of the operations on lists included in the standard library of LiveCode Builder."
		},{
			"id":"oxt_builder-350",
			"name":"repeatforeachelementinlist",
			"display name":"RepeatForEachElementInList",
			"library":"oxt_builder",
			"type":"iterator",
			"syntax":[
				"element <Iterand>"
			],
			"display syntax":[
				"element <i>Iterand</i>"
			],
			"associations":["com.livecode.list"],
			"summary":"Repeat over the elements of a list",
			"parameters":[{
				"name":"Iterand",
				"type":"",
				"refparam":"false",
				"description":"Any variable of appropriate type."
			}],
			"examples":[{
				"script":"    variable tList as List\n    put [1, 1, 2, 3, 5, 8, 13] into tList\n\n    variable tRelist as List\n    variable tElement as any\n    put the empty list into tRelist\n\n    repeat for each element tElement in tList\n        push tElement onto tRelist\n    end repeat\n\n    // tRelist is the same as tList"
			}],
			"description":"Use repeat for each to perform an operation on each element of a list. On each iteration, the Iterand will contain the next element of the list being iterated over.\n>*Note:* If <Iterand> is typed, then an error will be thrown if the list being iterated over contains any elements of a different type.",
			"tags":["lists","control structures"]
		},{
			"id":"oxt_builder-351",
			"name":"splicebeforeelementoflist",
			"display name":"SpliceBeforeElementOfList",
			"library":"oxt_builder",
			"type":"statement",
			"syntax":[
				"splice <Source> before element <Index> of <Target>"
			],
			"display syntax":[
				"splice <i>Source</i> before element <i>Index</i> of <i>Target</i>"
			],
			"associations":["com.livecode.list"],
			"summary":"Inserts each of the elements of <Source> into <Target> before element at index <Index>.",
			"parameters":[{
				"name":"Source",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a list."
			},{
				"name":"Index",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a valid integer index of <Target>."
			},{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a list."
			}],
			"examples":[{
				"script":"variable tVar as List\nput the empty list into tVar\n\nvariable tCount as Number\nput 2 into tCount\nrepeat 3 times\n\tpush tCount onto tVar\nend repeat\n\nvariable tVar2 as List\npush 1 onto tVar2\npush 5 onto tVar2\n\nsplice tVar before element 2 of tVar2 -- tVar2 contains the list [1,2,3,4,5]"
			}],
			"description":"Use the splice syntax to insert the elements of one list into another list. \n\n>*Note:* ```put tList before element 2 of tList2``` results in the insertion of tList **as an element**, i.e. tList2 becomes the list [element 1 of tList2,tList,element 2 of tList2, element 3 of tList2 ...]\n\n>*Note:* It is an error if <Index> is out of range.",
			"tags":["lists"]
		},{
			"id":"oxt_builder-352",
			"name":"listoffset",
			"display name":"ListOffset",
			"library":"oxt_builder",
			"type":"operator",
			"syntax":[
				"the ( first | last ) offset of <Needle> in <Haystack>"
			],
			"display syntax":[
				"the ( first | last ) offset of <i>Needle</i> in <i>Haystack</i>"
			],
			"associations":["com.livecode.list"],
			"summary":"Find the first or last occurrence of <Needle> within <Haystack>\nTarget:An expression which evaluates to a list.",
			"parameters":[{
				"name":"Needle",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a list."
			}],
			"examples":[{
				"script":"variable tVar as List\nvariable tOffset as Number\nput [\"a\", \"b\", \"c\", \"d\", \"b\", \"c\"]\nput the offset of [\"b\",\"c\"] in tVar into tOffset\n-- tOffset contains 2\n\nput the last offset of [\"b\", \"c\"] in tVar into tOffset\n-- tOffset contains 5"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"Returns the index from the start of <Haystack>."
			}],
			"description":"Use `the offset of` to find where a particular sub-list occurs within\na list.  <Haystack> is scanned for a sequence of elements that are\nequal to the elements of <Needle>, and the position of the start of\nthe sequence found is returned.  If neither the \"first offset\" nor\n\"last offset\" are specified, the index of the first matching sub-list\nfound is returned.  If no sub-list of <Haystack> is equal to <Needle>,\nthe return value is 0.",
			"tags":["lists"]
		},{
			"id":"oxt_builder-353",
			"name":"pushontolist",
			"display name":"PushOntoList",
			"library":"oxt_builder",
			"type":"statement",
			"syntax":[
				"push <Value> onto ( front of | back of ) <Target>"
			],
			"display syntax":[
				"push <i>Value</i> onto ( front of | back of ) <i>Target</i>"
			],
			"associations":["com.livecode.list"],
			"summary":"Pushes <Value> onto <Target>.",
			"parameters":[{
				"name":"Value",
				"type":"",
				"refparam":"false",
				"description":"Any expression."
			},{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a list."
			}],
			"examples":[{
				"script":"variable tVar as List\nput the empty list into tVar\npush \"something\" onto tVar\npush \"something else\" onto front of tVar\n\nvariable tResult as String\nif tVar[1] is \"something else\" then\n\tput \"success\" into tResult\nend if"
			}],
			"description":"When <Value> is pushed onto <Target>, <Value> (by default) becomes the tail of the list, with an index one greater than the previous tail.\nUse the 'front of' variant to push onto the front of a list instead.",
			"tags":["lists"]
		},{
			"id":"oxt_builder-354",
			"name":"listindexafter",
			"display name":"ListIndexAfter",
			"library":"oxt_builder",
			"type":"operator",
			"syntax":[
				"the ( first | last ) index of <Needle> after <After> in <Haystack>"
			],
			"display syntax":[
				"the ( first | last ) index of <i>Needle</i> after <i>After</i> in <i>Haystack</i>"
			],
			"associations":["com.livecode.list"],
			"summary":"Find the first or last occurrence of <Needle> within the tail of <Haystack>\nTarget:An expression which evaluates to a list.",
			"parameters":[{
				"name":"Needle",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to any value."
			},{
				"name":"After",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a valid index in Target."
			}],
			"examples":[{
				"script":"variable tVar as List\nvariable tOffset as Number\nput [\"a\", \"b\", \"c\", \"d\", \"b\"]\nput the index of \"b\" after 1 in tVar into tOffset\n--tOffset contains 2\n\nput the last index of \"b\" after 2 in tVar into tOffset\n--tOffset contains 5"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"Returns the index in <Haystack> relative to <After>."
			}],
			"description":"Use `the index of‚Ä¶ after` to find where particular elements occur\nwithin a list.  Starting from but not including the position <After>,\n<Haystack> is scanned for an element that is equal to <Needle>, and\nthe position of the element found is returned.  If no element of\n<Haystack> is equal to <Needle>, the return value is 0.",
			"tags":["lists"]
		},{
			"id":"oxt_builder-355",
			"name":"concatenatelists",
			"display name":"ConcatenateLists",
			"library":"oxt_builder",
			"type":"operator",
			"syntax":[
				"<Left> & <Right>"
			],
			"display syntax":[
				"<i>Left</i> & <i>Right</i>"
			],
			"associations":["com.livecode.list"],
			"summary":"Concatenate two lists.\nLeftList:The List to go at the start of the resulting list.\nRightList:The List to go at the end of the resulting list.",
			"examples":[{
				"script":"variable tVar\nput [\"a\", \"b\"] & [\"c\", \"d\"] into tVar\n-- tVar contains [\"a\", \"b\", \"c\", \"d\"]"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"A newly created List built from <LeftList> and <RightList>."
			}],
			"description":"Returns a newly-created list consisting of the elements of <LeftList>\nfollowed by the elements of <RightList>.",
			"tags":["lists"]
		},{
			"id":"oxt_builder-356",
			"name":"reverseelementsoflist",
			"display name":"ReverseElementsOfList",
			"library":"oxt_builder",
			"type":"statement",
			"syntax":[
				"reverse <Target>"
			],
			"display syntax":[
				"reverse <i>Target</i>"
			],
			"associations":["com.livecode.list"],
			"summary":"Reverse a list",
			"parameters":[{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"A list"
			}],
			"examples":[{
				"script":"variable tList\nput [1, 2, 3] into tList\nreverse tList\nexpect that tList is [3, 2, 1]"
			}],
			"description":"Reverses the order of elements in the <Target>.",
			"tags":["lists"]
		},{
			"id":"oxt_builder-357",
			"name":"deletesingletonelementof",
			"display name":"DeleteSingletonElementOf",
			"library":"oxt_builder",
			"type":"statement",
			"syntax":[
				"delete element <Index> of <Target>"
			],
			"display syntax":[
				"delete element <i>Index</i> of <i>Target</i>"
			],
			"associations":["com.livecode.list"],
			"summary":"Deletes the element at index <Index> in <Target>.",
			"parameters":[{
				"name":"Index",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a valid integer index of <Target>."
			},{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"A list container."
			}],
			"description":"Removes the element at the given index from the list.\n\n>*Note:* It is an error if either <Index> is out of range.",
			"tags":["lists"]
		},{
			"id":"oxt_builder-358",
			"name":"singletonelementoflist",
			"display name":"SingletonElementOfList",
			"library":"oxt_builder",
			"type":"operator",
			"syntax":[
				"element <Index> of <Target>"
			],
			"display syntax":[
				"element <i>Index</i> of <i>Target</i>"
			],
			"associations":["com.livecode.list"],
			"summary":"Designates the element at index <Index> in <Target>.",
			"parameters":[{
				"name":"Index",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a valid integer index of <Target>."
			},{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a list."
			}],
			"examples":[{
				"script":"variable tVar as List\nput [1,2,3] into tVar\nput \"A\" into element 1 of tVar -- tVar is [\"A\",2,3]\n\nvariable tNum as Number\nput element 2 of tVar into tNum -- tNum is 2"
			}],
			"description":"Either locates the element container at the given index for use as the target container of another operation, or evaluates the element at the given index as the source of another operation.\n\n>*Note:* It is an error if <Index> is out of range.",
			"tags":["lists"]
		},{
			"id":"oxt_builder-359",
			"name":"listendswithlist",
			"display name":"ListEndsWithList",
			"library":"oxt_builder",
			"type":"operator",
			"syntax":[
				"<Source> ends with <Suffix>"
			],
			"display syntax":[
				"<i>Source</i> ends with <i>Suffix</i>"
			],
			"associations":["com.livecode.list"],
			"summary":"Determines whether <Source> ends with <Suffix>\nPrefix:An expression which evaluates to a list.",
			"parameters":[{
				"name":"Source",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a list."
			}],
			"examples":[{
				"script":"variable tVar as List\nput [1, 2, 3, 4, 5] into tVar\n\nvariable tEnds as Boolean\n// put tList ends with tList[5] into tEnds -- error: tList[5] is not a list \n\nput tList ends with element 1 to 5 of tList into tEnds -- tEnds is true"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"Returns true if <Source> ends with <Suffix>."
			}],
			"description":"<Source> ends with <Suffix> if and only if the elements of <Suffix> occur as a final subsequence of the elements of <Source>.\n\n>*Note:* Since the empty list is a final subsequence of every list, every list ends with the empty list.",
			"tags":["lists"]
		},{
			"id":"oxt_builder-360",
			"name":"listindexbefore",
			"display name":"ListIndexBefore",
			"library":"oxt_builder",
			"type":"operator",
			"syntax":[
				"the ( first | last ) index of <Needle> before <Before> in <Haystack>"
			],
			"display syntax":[
				"the ( first | last ) index of <i>Needle</i> before <i>Before</i> in <i>Haystack</i>"
			],
			"associations":["com.livecode.list"],
			"summary":"Find the first or last occurrence of <Needle> within the head of <Haystack>\nTarget:An expression which evaluates to a list.",
			"parameters":[{
				"name":"Needle",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to any value."
			},{
				"name":"Before",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a valid index in Target."
			}],
			"examples":[{
				"script":"variable tVar as List\nvariable tOffset as Number\nput [\"a\", \"b\", \"c\", \"d\", \"b\"]\nput the index of \"b\" before 2 in tVar into tOffset\n--tOffset contains 0\n\nput the first index of \"b\" before 5 in tVar into tOffset\n--tOffset contains 2"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"Returns the index in <Haystack>."
			}],
			"description":"Use `the index of‚Ä¶ before` to find where particular elements occur\nwithin a list.  <Haystack> is scanned for an element that is equal to\n<Needle>, stopping before the position <Before>, and the position of\nthe element found is returned.  If no element of <Haystack> is equal\nto <Needle>, the return value is 0.  If neither \"first\" nor \"last\" is\nspecified, the last matching element is found.",
			"tags":["lists"]
		},{
			"id":"oxt_builder-361",
			"name":"spliceintorangeoflist",
			"display name":"SpliceIntoRangeOfList",
			"library":"oxt_builder",
			"type":"statement",
			"syntax":[
				"splice <Source> into element <Start> to <Finish> of <Target>"
			],
			"display syntax":[
				"splice <i>Source</i> into element <i>Start</i> to <i>Finish</i> of <i>Target</i>"
			],
			"associations":["com.livecode.list"],
			"summary":"Removes the elements of <Target> from <Start > to <Finish> and inserts each of the elements of\n                    <Source> into <Target> at <Start>.",
			"parameters":[{
				"name":"Source",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a list."
			},{
				"name":"Start",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a valid integer index of <Target>."
			},{
				"name":"Finish",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a valid integer index of <Target>."
			},{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a list."
			}],
			"examples":[{
				"script":"variable tVar as List\nput the empty list into tVar\n\nvariable tCount as Number\nput 1 into tCount\nrepeat 3 times\n\tpush tCount onto tVar\nend repeat\n\nvariable tVar2 as List\npush \"these\" onto tVar2\npush \"are\" onto tVar2\npush \"unwanted\" onto tVar2\npush 4 onto tVar2\n\nsplice tVar into element 1 to 3 of tVar2 -- tVar2 contains the list [1,2,3,4]"
			}],
			"description":"Use the splice syntax to insert the elements of one list into another list. \n\n>*Note:* ```put tList into element 1 to 3 of tList2``` results in the removal of elements 1 to 3 of tList2 and the insertion of tList **as an element**, i.e. tList2 becomes the list [tList,element 4 of tList2, element 5 of tList2 ...]\n\n>*Note:* It is an error if either <Start> or <Finish> is out of range.",
			"tags":["lists"]
		},{
			"id":"oxt_builder-362",
			"name":"poplist",
			"display name":"PopList",
			"library":"oxt_builder",
			"type":"statement",
			"syntax":[
				"pop ( front of | back of ) <Source>"
			],
			"display syntax":[
				"pop ( front of | back of ) <i>Source</i>"
			],
			"associations":["com.livecode.list"],
			"summary":"Pops the last element from <Source> into <Target>\nTarget:An expression which evaluates to a container.",
			"parameters":[{
				"name":"Source",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a list."
			}],
			"examples":[{
				"script":"variable tVar as List\nput the empty list into tVar\npush \"something\" onto tVar\npush \"something else\" onto tVar\n\nvariable tPopped as String\npop tVar into tPopped -- tPopped contains \"something else\""
			},{
				"script":"variable tList as List\nput [1,2,3] into tList\nvariable tNum as Number\npop front of tList into tNum -- tNum is 1, tList is [2,3]"
			}],
			"description":"When <Source> is popped into <Target>, the last element of the list <Source> is removed and put into the container <Target>.\nUse the 'front of' variant to pop from the front of a list instead.",
			"tags":["lists"]
		},{
			"id":"oxt_builder-363",
			"name":"headoflist",
			"display name":"HeadOfList",
			"library":"oxt_builder",
			"type":"operator",
			"syntax":[
				"the head of <Target>"
			],
			"display syntax":[
				"the head of <i>Target</i>"
			],
			"associations":["com.livecode.list"],
			"summary":"Returns the first element of <Target>.",
			"parameters":[{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a list."
			}],
			"examples":[{
				"script":"variable tVar as List\nput the empty list into tVar\npush \"first element\" onto tVar\n\nvariable tResult as Boolean\nif the head of tVar is \"first element\" then\n\tput \"success\" into tResult\nend if"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"The first element of <Target>"
			}],
			"description":"Returns the first element of the list <Target> without modifying <Target>.\n```\tthe head of tVar```\nis equivalent to using the <IndexedElementOfList> operator with index 1\n```\ttVar[1]```",
			"references":{
				"operator":["IndexedElementOfList"]
			},
			"tags":["lists"]
		},{
			"id":"oxt_builder-364",
			"name":"spliceintoelementoflist",
			"display name":"SpliceIntoElementOfList",
			"library":"oxt_builder",
			"type":"statement",
			"syntax":[
				"splice <Source> into element <Index> of <Target>"
			],
			"display syntax":[
				"splice <i>Source</i> into element <i>Index</i> of <i>Target</i>"
			],
			"associations":["com.livecode.list"],
			"summary":"Removes the element of <Target> at <Index> and inserts each of the elements of <Source> into\n                    <Target> at <Index>.",
			"parameters":[{
				"name":"Source",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a list."
			},{
				"name":"Index",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a valid integer index of <Target>."
			},{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a list."
			}],
			"examples":[{
				"script":"variable tVar as List\nput the empty list into tVar\n\nvariable tCount as Number\nput 1 into tCount\nrepeat 3 times\n\tpush tCount onto tVar\nend repeat\n\nvariable tVar2 as List\npush \"this is unwanted\" onto tVar2\npush 4 onto tVar2\n\nsplice tVar into element 1 of tVar2 -- tVar2 contains the list [1,2,3,4]"
			}],
			"description":"Use the splice syntax to insert the elements of one list into another list. \n\n>*Note:* ```put tList into element 1 of tList2``` results in the removal of element 1 of tList2 and the insertion of tList **as an element**, i.e. tList2 becomes the list [tList,element 2 of tList2, element 3 of tList2 ...]\n\n>*Note:* It is an error if <Index> is out of range.",
			"tags":["lists"]
		},{
			"id":"oxt_builder-365",
			"name":"listcontainselements",
			"display name":"ListContainsElements",
			"library":"oxt_builder",
			"type":"operator",
			"syntax":[
				"<Target> contains <Needle>"
			],
			"display syntax":[
				"<i>Target</i> contains <i>Needle</i>"
			],
			"associations":["com.livecode.list"],
			"summary":"Determines if <Target> contains <Needle> as a subsequence.",
			"parameters":[{
				"name":"Needle",
				"type":"",
				"refparam":"false",
				"description":"Any expression which evaluates to a list."
			},{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a list."
			}],
			"examples":[{
				"script":"variable tList as List\nput [ \"a\", \"b\", \"c\", \"d\" ] into tList\n\nvariable tContains as Boolean\n\n// put tList contains tList[1] into tContains -- error: tList[1] is not a list \n\nput tList contains element 1 to 2 of tList into tContains -- tContains is true"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"Returns true if <Target> contains <Needle>."
			}],
			"description":"<Target> contains <Needle> if and only if the elements of <Needle> occur as a subsequence of the elements of <Target>.\n\n>*Note:* Since \"\" is a subsequence of elements of every list, every list contains the empty list.",
			"tags":["lists"]
		},{
			"id":"oxt_builder-366",
			"name":"emptylist",
			"display name":"EmptyList",
			"library":"oxt_builder",
			"type":"expression",
			"syntax":[
				"the empty list"
			],
			"display syntax":[
				"the empty list"
			],
			"associations":["com.livecode.list"],
			"summary":"Designates the list of length zero.",
			"examples":[{
				"script":"variable tVar as List\nvariable tCount as Number\nput the empty list into tVar\nput the number of elements in tVar into tCount -- tCount is 0"
			}],
			"description":"Use ```the empty list``` to initialise a list variable.",
			"tags":["lists"]
		},{
			"id":"oxt_builder-367",
			"name":"countelementsoflist",
			"display name":"CountElementsOfList",
			"library":"oxt_builder",
			"type":"operator",
			"syntax":[
				"the number of elements in <Target>"
			],
			"display syntax":[
				"the number of elements in <i>Target</i>"
			],
			"associations":["com.livecode.list"],
			"summary":"Returns the number of elements in <Target>",
			"parameters":[{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a list."
			}],
			"examples":[{
				"script":"variable tVar as List\nput [1,2,3,4,5] into tVar\nvariable tNum as Number\nput the number of elements in tVar into tNum -- tNum is 5"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"The number of elements in the list <Target>."
			}],
			"description":"Returns the number of elements in the list.",
			"tags":["lists"]
		},{
			"id":"oxt_builder-368",
			"name":"deleterangeelementof",
			"display name":"DeleteRangeElementOf",
			"library":"oxt_builder",
			"type":"statement",
			"syntax":[
				"delete element <Start> to <Finish> of <Target>"
			],
			"display syntax":[
				"delete element <i>Start</i> to <i>Finish</i> of <i>Target</i>"
			],
			"associations":["com.livecode.list"],
			"summary":"Deletes the elements between indices <Start> and <Finish> in <Target>.",
			"parameters":[{
				"name":"Start",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a valid integer index of <Target>."
			},{
				"name":"Finish",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a valid integer index of <Target>."
			},{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"A list container."
			}],
			"description":"Removes the elements between the given indices from the list.\n\n>*Note:* It is an error if either <Start> or <Finish> are out of range.",
			"tags":["lists"]
		},{
			"id":"oxt_builder-369",
			"name":"indexedelementoflist",
			"display name":"IndexedElementOfList",
			"library":"oxt_builder",
			"type":"operator",
			"syntax":[
				"<Target> [ <Index> ]"
			],
			"display syntax":[
				"<i>Target</i> [ <i>Index</i> ]"
			],
			"associations":["com.livecode.list"],
			"summary":"Designates the element at index <Index> in <Target>.\nSynonym:SingletonElementOf",
			"parameters":[{
				"name":"Index",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a valid integer index of <Target>."
			},{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a list."
			}],
			"examples":[{
				"script":"variable tVar as List\nput [1,2,3] into tVar\nput \"A\" into tVar[1] -- tVar is [\"A\",2,3]\n\nvariable tNum as Number\nput tVar[2] into tNum -- tNum is 2"
			}],
			"description":"Either locates the element container at the given index for use as the target container of another operation, or evaluates the element at the given index as the source of another operation.\n\n>*Note:* It is an error if <Index> is out of range.",
			"tags":["lists"]
		},{
			"id":"oxt_builder-370",
			"name":"tailoflist",
			"display name":"TailOfList",
			"library":"oxt_builder",
			"type":"operator",
			"syntax":[
				"the tail of <Target>"
			],
			"display syntax":[
				"the tail of <i>Target</i>"
			],
			"associations":["com.livecode.list"],
			"summary":"Returns the last element of <Target>.",
			"parameters":[{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a list."
			}],
			"examples":[{
				"script":"variable tVar as List\nput the empty list into tVar\npush \"first element\" onto tVar\npush \"last element\" onto tVar\n\nvariable tResult as String\nif the tail of tVar is \"last element\" then\n\tput \"success\" into tResult\nend if"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"The last element of <Target>"
			}],
			"description":"Returns the first element of the list <Target> without modifying <Target>.\n```\tthe tail of tVar```\nis equivalent to using the <IndexedElementOfList> operator with index -1\n```\ttVar[-1]```",
			"references":{
				"operator":["IndexedElementOfList"]
			},
			"tags":["lists"]
		},{
			"id":"oxt_builder-371",
			"name":"listislist",
			"display name":"ListIsList",
			"library":"oxt_builder",
			"type":"operator",
			"syntax":[
				"<Left> is <Right>"
			],
			"display syntax":[
				"<i>Left</i> is <i>Right</i>"
			],
			"associations":["com.livecode.list"],
			"summary":"Determines whether <Left> and <Right> are equal or not.",
			"parameters":[{
				"name":"Left",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a list."
			},{
				"name":"Right",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a list."
			}],
			"examples":[{
				"script":"variable tList as List\nput [\"a\", \"b\", \"c\"] into tList\nvariable tIs as Boolean\n\nput tList is [\"A\", \"b\", \"c\"] into tIs -- tIs is false\nput tList is element 1 to -1 of tList into tIs -- tIs is true"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"Returns true if <Left> is identical to <Right>."
			}],
			"description":"Two lists are equal if each corresponding element is of comparable type, and if the default equality of that type holds between the elements.\nIn particular, this means that comparison between string elements is case sensitive.",
			"tags":["lists"]
		},{
			"id":"oxt_builder-372",
			"name":"listoffsetafter",
			"display name":"ListOffsetAfter",
			"library":"oxt_builder",
			"type":"operator",
			"syntax":[
				"the ( first | last ) offset of <Needle> after <After> in <Haystack>"
			],
			"display syntax":[
				"the ( first | last ) offset of <i>Needle</i> after <i>After</i> in <i>Haystack</i>"
			],
			"associations":["com.livecode.list"],
			"summary":"Find the first or last occurrence of <Needle> within the tail of <Haystack>\nTarget:An expression which evaluates to a list.",
			"parameters":[{
				"name":"Needle",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to any list."
			},{
				"name":"After",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a valid index in Target."
			}],
			"examples":[{
				"script":"variable tVar as List\nvariable tOffset as Number\nput [\"a\", \"b\", \"c\", \"d\", \"b\", \"c\"]\nput the offset of [\"b\",\"c\"] after 1 in tVar into tOffset\n--tOffset contains 2\n\nput the last offset of [\"b\",\"c\"] after 1 in tVar into tOffset\n--tOffset contains 5"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"Returns the index in <Haystack> relative to <After>."
			}],
			"description":"Use `the offset of‚Ä¶ after` to find where a particular sub-list occurs\nwithin a list.  Starting from but not including the position <After>,\n<Haystack> is scanned for an sequence of elements that are equal to\nthe elements of <Needle>, and the position of the start of the\nsequence found is returned.  If neither the \"first offset\" nor \"last\noffset\" are specified, the position of the first matching sub-list\nfound is returned.  If no sub-list of <Haystack> starting after the\nposition <After> is equal to <Needle>, the return value is 0.",
			"tags":["lists"]
		},{
			"id":"oxt_builder-373",
			"name":"listindex",
			"display name":"ListIndex",
			"library":"oxt_builder",
			"type":"operator",
			"syntax":[
				"the ( first | last ) index of <Needle> in <Haystack>"
			],
			"display syntax":[
				"the ( first | last ) index of <i>Needle</i> in <i>Haystack</i>"
			],
			"associations":["com.livecode.list"],
			"summary":"Find the first or last occurrence of <Needle> within <Haystack>\nTarget:An expression which evaluates to a list.",
			"parameters":[{
				"name":"Needle",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to any value."
			}],
			"examples":[{
				"script":"variable tVar as List\nvariable tOffset as Number\nput [\"a\", \"b\", \"c\", \"d\", \"b\"]\nput the index of \"b\" in tVar into tOffset\n-- tOffset contains 2\n\nput the last index of \"b\" in tVar into tOffset\n-- tOffset contains 5"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"Returns the index from the start of <Haystack>."
			}],
			"description":"Use `the index of` to find where particular elements occur within a\nlist.  <Haystack> is scanned for an element that is equal to <Needle>,\nand the position of the element found is returned.  If neither the\n\"first index\" nor \"last index\" are specified, the index of the first\nelement found is returned.  If no element of <Haystack> is equal to\n<Needle>, the return value is 0.",
			"tags":["lists"]
		},{
			"id":"oxt_builder-374",
			"name":"listoffsetbefore",
			"display name":"ListOffsetBefore",
			"library":"oxt_builder",
			"type":"operator",
			"syntax":[
				"the ( first | last ) offset of <Needle> before <Before> in <Haystack>"
			],
			"display syntax":[
				"the ( first | last ) offset of <i>Needle</i> before <i>Before</i> in <i>Haystack</i>"
			],
			"associations":["com.livecode.list"],
			"summary":"Find the first or last occurrence of <Needle> within the head of <Haystack>\nTarget:An expression which evaluates to a List.",
			"parameters":[{
				"name":"Needle",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to List."
			},{
				"name":"Before",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a valid index in Target."
			}],
			"examples":[{
				"script":"variable tVar as List\nvariable tOffset as Number\nput [\"a\", \"b\", \"c\", \"d\", \"b\",\"c\"]\nput the offset of [\"b\",\"c\"] before 5 in tVar into tOffset\n--tOffset contains 2\n\nput the first offset of [\"b\",\"c\"] before 6 in tVar into tOffset\n--tOffset contains 2"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"Returns the index in <Haystack>."
			}],
			"description":"Use `the offset of‚Ä¶ before` to find where a particular sub-list occurs\nwithin a list.  <Haystack> is scanned for a sequence of elements that\nare equal to the elements of <Needle>, stopping before the position\n<Before>, and the position of the start of the sequence found is\nreturned.  If no sub-list of <Haystack> before the position <Before>\nis equal to <Needle>, the return value is 0.  If neither \"first\" nor\n\"last\" is specified, the last matching subsequence is found.",
			"tags":["lists"]
		},{
			"id":"oxt_builder-375",
			"name":"deletefirstelementof",
			"display name":"DeleteFirstElementOf",
			"library":"oxt_builder",
			"type":"statement",
			"syntax":[
				"delete the first element of <Target>"
			],
			"display syntax":[
				"delete the first element of <i>Target</i>"
			],
			"associations":["com.livecode.list"],
			"summary":"Deletes the first element of <Target>.",
			"parameters":[{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"A list container."
			}],
			"description":"Removes the first element of <Target>.\n\n>*Note:* It is an error if <Target> is the empty list.",
			"tags":["lists"]
		},{
			"id":"oxt_builder-376",
			"name":"spliceafterelementoflist",
			"display name":"SpliceAfterElementOfList",
			"library":"oxt_builder",
			"type":"statement",
			"syntax":[
				"splice <Source> after element <Index> of <Target>"
			],
			"display syntax":[
				"splice <i>Source</i> after element <i>Index</i> of <i>Target</i>"
			],
			"associations":["com.livecode.list"],
			"summary":"Inserts each of the elements of <Source> into <Target> after element at index <Index>.",
			"parameters":[{
				"name":"Source",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a list."
			},{
				"name":"Index",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a valid integer index of <Target>."
			},{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a list."
			}],
			"examples":[{
				"script":"variable tVar as List\nput the empty list into tVar\n\nvariable tCount as Number\nput 2 into tCount\nrepeat 3 times\n\tpush tCount onto tVar\nend repeat\n\nvariable tVar2 as List\npush 1 onto tVar2\npush 5 onto tVar2\n\nsplice tVar after element 1 of tVar2 -- tVar2 contains the list [1,2,3,4,5]"
			}],
			"description":"Use the splice syntax to insert the elements of one list into another list. \n\n>*Note:* ```put tList after element 1 of tList2``` results in the insertion of tList **as an element**, i.e. tList2 becomes the list [element 1 of tList2,tList,element 2 of tList2, element 3 of tList2 ...]\n\n>*Note:* It is an error if <Index> is out of range.",
			"tags":["lists"]
		},{
			"id":"oxt_builder-377",
			"name":"listbeginswithlist",
			"display name":"ListBeginsWithList",
			"library":"oxt_builder",
			"type":"operator",
			"syntax":[
				"<Source> begins with <Prefix>"
			],
			"display syntax":[
				"<i>Source</i> begins with <i>Prefix</i>"
			],
			"associations":["com.livecode.list"],
			"summary":"Determines whether <Source> begins with <Prefix>",
			"parameters":[{
				"name":"Prefix",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a list."
			},{
				"name":"Source",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a list."
			}],
			"examples":[{
				"script":"variable tVar as List\nput [1, 2, 3, 4, 5] into tVar\n\nvariable tBegins as Boolean\n// put tList begins with tList[1] into tBegins -- error: tList[1] is not a list \n\nput tList begins with [1, 2] into tBegins -- tBegins is true"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"Returns true if <Source> begins with <Prefix>."
			}],
			"description":"<Source> begins with <Prefix> if and only if the elements of <Prefix> occur as an initial subsequence of the elements of <Source>.\n\n>*Note:* Since the empty list is an initial subsequence of every list, every list begins with the empty list.",
			"tags":["lists"]
		},{
			"id":"oxt_builder-378",
			"name":"rangeelementsoflist",
			"display name":"RangeElementsOfList",
			"library":"oxt_builder",
			"type":"operator",
			"syntax":[
				"element <Start> to <Finish> of <Target>"
			],
			"display syntax":[
				"element <i>Start</i> to <i>Finish</i> of <i>Target</i>"
			],
			"associations":["com.livecode.list"],
			"summary":"Designates the elements between indices <Start> and <Finish> in <Target>.",
			"parameters":[{
				"name":"Start",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a valid integer index of <Target>."
			},{
				"name":"Finish",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a valid integer index of <Target>."
			},{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a list."
			}],
			"examples":[{
				"script":"variable tList as List\nput [1,2,3] into tList\n\nput tList into element 1 to 2 of tList -- tList is [[1,2,3],3]"
			}],
			"description":"Either locates the element containers between the given indices for use as a list container for the target of another operation, or evaluates the elements between the given indices as a list.\n\n>*Note:* It is an error if either <Start> or <Finish> are out of range.\n\n>*Note:* If a list is the source of ``put tList into element 1 to 3 of tOtherList```, then tList is *not* inserted element-wise. The entire list is inserted as an element, so that element 1 of tOtherList is tList.",
			"tags":["lists"]
		},{
			"id":"oxt_builder-379",
			"name":"elementisinlist",
			"display name":"ElementIsInList",
			"library":"oxt_builder",
			"type":"operator",
			"syntax":[
				"<Needle> is in <Target>"
			],
			"display syntax":[
				"<i>Needle</i> is in <i>Target</i>"
			],
			"associations":["com.livecode.list"],
			"summary":"Determines if a given element is in <Target>",
			"parameters":[{
				"name":"Needle",
				"type":"",
				"refparam":"false",
				"description":"Any expression."
			},{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a list."
			}],
			"examples":[{
				"script":"variable tList as List\nput [ \"a\", \"b\", \"c\", \"d\" ] into tList\n\nvariable tIsIn as Boolean\nput \"a\" is in tList into tIsIn -- tIsIn contains true"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"Returns true if <Needle> can be found among the elements of <Target>."
			}],
			"description":"<Needle> must be an element of <Target> rather than a sublist, or contained within a list element of <Target>.",
			"tags":["lists"]
		},{
			"id":"oxt_builder-380",
			"name":"lastelementof",
			"display name":"LastElementOf",
			"library":"oxt_builder",
			"type":"operator",
			"syntax":[
				"the last element of <Target>"
			],
			"display syntax":[
				"the last element of <i>Target</i>"
			],
			"associations":["com.livecode.list"],
			"summary":"Designates the last element in <Target>.",
			"parameters":[{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a list."
			}],
			"description":"Either locates the first element for use as the target container of another operation, or evaluates the first element as the source of another operation.\n\n>*Note:* It is an error if <Target> is empty.",
			"tags":["lists"]
		},{
			"id":"oxt_builder-381",
			"name":"deletelastelementof",
			"display name":"DeleteLastElementOf",
			"library":"oxt_builder",
			"type":"statement",
			"syntax":[
				"delete the last element of <Target>"
			],
			"display syntax":[
				"delete the last element of <i>Target</i>"
			],
			"associations":["com.livecode.list"],
			"summary":"Deletes the last element of <Target>.",
			"parameters":[{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"A list container."
			}],
			"description":"Removes the last element of <Target>.\n\n>*Note:* It is an error if <Target> is the empty list.",
			"tags":["lists"]
		},{
			"id":"oxt_builder-382",
			"name":"listisnotlist",
			"display name":"ListIsNotList",
			"library":"oxt_builder",
			"type":"operator",
			"syntax":[
				"<Left> is not <Right>"
			],
			"display syntax":[
				"<i>Left</i> is not <i>Right</i>"
			],
			"associations":["com.livecode.list"],
			"summary":"Determines whether <Left> and <Right> are equal or not.",
			"parameters":[{
				"name":"Left",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a list."
			},{
				"name":"Right",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a list."
			}],
			"examples":[{
				"script":"variable tList as List\nput [\"a\", \"b\", \"c\"] into tList\nvariable tIsNot as Boolean\n\nput tList is not [\"A\", \"b\", \"c\"] into tIsNot -- tIs is true"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"Returns true if <Left> is not identical to <Right>."
			}],
			"description":"Two lists are not equal if any corresponding elements are of non-comparable types, or if the default equality of that type does not holds between the elements.\nIn particular, this means that comparison between string elements is case sensitive.",
			"tags":["lists"]
		},{
			"id":"oxt_builder-383",
			"name":"repeatwhile",
			"display name":"RepeatWhile",
			"library":"oxt_builder",
			"type":"control structure",
			"syntax":[
				"repeat while <Condition>\n\t<StatementList>\nend repeat"
			],
			"display syntax":[
				"repeat while <i>Condition</i>"
			],
			"associations":["com.livecode.language"],
			"summary":"Executes a list of statements while a condition continues to be true.",
			"parameters":[{
				"name":"Condition",
				"type":"bool",
				"refparam":"false",
				"description":"An expression which evaluates to a boolean."
			},{
				"name":"StatementList",
				"type":"",
				"refparam":"false",
				"description":"A set of statements."
			}],
			"description":"Use the repeat while <Condition> structure to execute a set of statements repeatedly, while the <Condition> continues to evaluate to true."
		},{
			"id":"oxt_builder-384",
			"name":"if",
			"display name":"If",
			"library":"oxt_builder",
			"type":"control structure",
			"syntax":[
				"if <IfCondition> then \n\t<IfStatementList> \n[else if <ElseCondition> then \n\t<ElseIfStatementList>] \n[else \n\t<ElseStatementList>]\nend if"
			],
			"display syntax":[
				"if <i>IfCondition</i> then "
			],
			"associations":["com.livecode.language"],
			"summary":"Executes a list of statements depending on the value of a condition.",
			"parameters":[{
				"name":"IfCondition",
				"type":"bool",
				"refparam":"false",
				"description":"An expression which evaluates to a boolean."
			},{
				"name":"IfStatementList",
				"type":"",
				"refparam":"false",
				"description":"A set of statements."
			},{
				"name":"ElseCondition",
				"type":"bool",
				"refparam":"false",
				"description":"An expression which evaluates to a boolean."
			},{
				"name":"ElseIfStatementList",
				"type":"",
				"refparam":"false",
				"description":"A set of statements."
			},{
				"name":"ElseStatementList",
				"type":"",
				"refparam":"false",
				"description":"A set of statements."
			}],
			"description":"Use the if control structure to execute a statement (or list of statements) only under certain circumstances. If <IfCondition> evaluates to true, the statements in <IfStatementList> are executed. For each condition <ElseCondition> such that none of the previous conditions evaluates to true, the condition is evaluated and the corresponding statements in <ElseIfStatementList> are executed. If none of the conditions evaluate to true, the statements in <ElseStatementList> are executed."
		},{
			"id":"oxt_builder-385",
			"name":"putinto",
			"display name":"PutInto",
			"library":"oxt_builder",
			"type":"statement",
			"syntax":[
				"put <sourceValue> into <targetContainer>"
			],
			"display syntax":[
				"put <i>sourceValue</i> into <i>targetContainer</i>"
			],
			"associations":["com.livecode.language"],
			"summary":"Put a value into a container.",
			"parameters":[{
				"name":"sourceValue",
				"type":"any",
				"refparam":"false",
				"description":"The value to put into the <targetContainer>"
			},{
				"name":"targetContainer",
				"type":"any",
				"refparam":"false",
				"description":"A valid target for <sourceValue>"
			}],
			"description":"Assigns the result of evaluating <sourceValue> to <targetContainer>.\n>*Note:* It is a checked runtime error for the source value's type to not be compatible with the target expression's type."
		},{
			"id":"oxt_builder-386",
			"name":"throwerror",
			"display name":"ThrowError",
			"library":"oxt_builder",
			"type":"statement",
			"syntax":[
				"throw <errorString>"
			],
			"display syntax":[
				"throw <i>errorString</i>"
			],
			"associations":["com.livecode.language"],
			"summary":"Causes an error to be raised.",
			"parameters":[{
				"name":"errorString",
				"type":"string",
				"refparam":"false",
				"description":"The error to throw."
			}],
			"examples":[{
				"script":"\tvariable tVar as optional number\n\tput \"Z\" parsed as string into tVar\n\tif tVar is not defined then\n\t\tthrow tVar && \"is not a number\n\tend if"
			}],
			"description":"The throw statement causes an error to be raised. This causes execution to terminate, and the error is passed back to environment.\n\nThe Error expression must be an expression that evaluates to a string.\nNote:There is currently no try / catch mechanism in LiveCode Builder, so throwing an error will cause the error to be raised in LiveCode Script in the appropriate context."
		},{
			"id":"oxt_builder-387",
			"name":"nextrepeat",
			"display name":"NextRepeat",
			"library":"oxt_builder",
			"type":"control structure",
			"syntax":[
				"next repeat"
			],
			"display syntax":[
				"next repeat"
			],
			"associations":["com.livecode.language"],
			"summary":"Begin the next iteration of a repeat loop.",
			"examples":[{
				"script":"\tvariable tList as list\n\tvariable tElement\n\tput [1, 2, 3, \"a\", 4, \"b\", 5] into tList\n\n\tvariable tSum as number\n\tput 0 into tSum\n\trepeat for each element tElement in tList\n\t\tif tElement is not a number then\n\t\t\tnext repeat\n\t\tend if\n\n\t\tadd tElement to tSum\n\tend repeat"
			}],
			"description":"Use <NextRepeat|next repeat> to skip to the next iteration of a repeat loop. This is particularly useful when operations are only to be performed on iterands which satisfy certain criteria."
		},{
			"id":"oxt_builder-388",
			"name":"theresult",
			"display name":"TheResult",
			"library":"oxt_builder",
			"type":"expression",
			"syntax":[
				"the result"
			],
			"display syntax":[
				"the result"
			],
			"associations":["com.livecode.language"],
			"summary":"The result of the previous statement.",
			"examples":[{
				"script":"\tresolve script object \"this stack\"\n\tget property \"name\" of the result\n\tlog the result"
			},{
				"script":"\tget 20\n\tsubtract 1 from the result\n\tdivide the result by 2\n\tround the result\n\t-- the result is 10"
			}],
			"description":"Use <TheResult|the result> to obtain the return value of the previous (executed) non-control structure statement.\n>*Note:* Result expressions are not assignable.\n"
		},{
			"id":"oxt_builder-389",
			"name":"return",
			"display name":"Return",
			"library":"oxt_builder",
			"type":"statement",
			"syntax":[
				"return [<returnValue>]"
			],
			"display syntax":[
				"return [<i>returnValue</i>]"
			],
			"associations":["com.livecode.language"],
			"summary":"Causes execution of the current handler to end, and control return to the caller.",
			"parameters":[{
				"name":"returnValue",
				"type":"any",
				"refparam":"false",
				"description":"The value to return"
			}],
			"description":"Use the return control structure to halt execution of the current handler, to return control to the caller, and optionally to return a value.\nNote:It is a checked runtime error for a value returned from a handler to not match the return type of the handler it is in."
		},{
			"id":"oxt_builder-390",
			"name":"exitrepeat",
			"display name":"ExitRepeat",
			"library":"oxt_builder",
			"type":"control structure",
			"syntax":[
				"exit repeat"
			],
			"display syntax":[
				"exit repeat"
			],
			"associations":["com.livecode.language"],
			"summary":"Exit a repeat loop.",
			"examples":[{
				"script":"\tpublic handler ListUpToSentinel(in pList as list, in pSentinel as string) as list\n\n\t\tvariable tElement\n\t\tvariable tNewList as list\n\t\tput the empty list into tNewList\n\n\t\trepeat for each element tElement in pList\n\t\t\tif tElement is a string and tElement is pSentinel then\n\t\t\t\texit repeat\n\t\t\tend if\n\t\t\tpush tElement onto tNewList\n\t\tend repeat\n\n\t\treturn tNewList\n\tend handler"
			}],
			"description":"Use <ExitRepeat|exit repeat> to exit a repeat loop, for example when a certain condition is met."
		},{
			"id":"oxt_builder-391",
			"name":"get",
			"display name":"Get",
			"library":"oxt_builder",
			"type":"statement",
			"syntax":[
				"get <expression>"
			],
			"display syntax":[
				"get <i>expression</i>"
			],
			"associations":["com.livecode.language"],
			"summary":"Evaluate an expression and put it into the result.",
			"parameters":[{
				"name":"expression",
				"type":"",
				"refparam":"false",
				"description":"Any expression."
			}],
			"description":"The get statement evaluates the Value expression and returns it as the result of the statement. The value is subsequently available by using <TheResult|the result> expression.",
			"references":{
				"expression":["TheResult"]
			}
		},{
			"id":"oxt_builder-392",
			"name":"repeatforeach",
			"display name":"RepeatForEach",
			"library":"oxt_builder",
			"type":"control structure",
			"syntax":[
				"repeat for each <Iterator> in <Container>\n\t<StatementList>\nend repeat"
			],
			"display syntax":[
				"repeat for each <i>Iterator</i> in <i>Container</i>"
			],
			"associations":["com.livecode.language"],
			"summary":"Executes a list of statements until the <Iterator> is exhausted.",
			"parameters":[{
				"name":"Iterator",
				"type":"",
				"refparam":"false",
				"description":"Any iterator expression."
			},{
				"name":"Container",
				"type":"",
				"refparam":"false",
				"description":"The container over which to iterate."
			},{
				"name":"StatementList",
				"type":"",
				"refparam":"false",
				"description":"A set of statements."
			}],
			"examples":[{
				"script":"\tvariable tElement\n\tvariable tNumbers as list\n\tput the empty list into tNumbers\n\n\trepeat for each element tElement in [\"a\", 1, 2, 3, \"b\", \"c\", 4]\n\t\tif tElement is a number then\n\t\t\tpush tElement onto tNumbers\n\t\tend if\n\tend repeat\n\n\t// tNumbers contains [1, 2, 3, 4]"
			}],
			"description":"Use the repeat for each control structure to iterate though the chars of a string, bytes of data, elements of a list or array, or keys of an array.\n>*Note:* The variable which contains the iterand must be declared prior to being used in the repeat loop.",
			"references":{
				"iterator":["RepeatForEachChar","RepeatForEachByte","RepeatForEachKey","RepeatForEachElementInList","RepeatForEachElementInArray"]
			}
		},{
			"id":"oxt_builder-393",
			"name":"repeatuntil",
			"display name":"RepeatUntil",
			"library":"oxt_builder",
			"type":"control structure",
			"syntax":[
				"repeat until <Condition>\n\t<StatementList>\nend repeat"
			],
			"display syntax":[
				"repeat until <i>Condition</i>"
			],
			"associations":["com.livecode.language"],
			"summary":"Executes a list of statements until a condition becomes true.",
			"parameters":[{
				"name":"Condition",
				"type":"bool",
				"refparam":"false",
				"description":"An expression which evaluates to a boolean."
			},{
				"name":"StatementList",
				"type":"",
				"refparam":"false",
				"description":"A set of statements."
			}],
			"description":"Use the repeat until <Condition> structure to execute a set of statements repeatedly, until the <Condition> evaluates to true."
		},{
			"id":"oxt_builder-394",
			"name":"repeatforever",
			"display name":"RepeatForever",
			"library":"oxt_builder",
			"type":"control structure",
			"syntax":[
				"repeat forever\n\t<StatementList>\nend repeat"
			],
			"display syntax":[
				"repeat forever"
			],
			"associations":["com.livecode.language"],
			"summary":"Executes a list of statements continually.",
			"parameters":[{
				"name":"StatementList",
				"type":"",
				"refparam":"false",
				"description":"A set of statements."
			}],
			"examples":[{
				"script":"\tvariable tCount as number\n\tvariable tList as list\n\tput [ 1, 2, 3, 4, 5, 6, 7, 8, \"A\", 9, 10 ] into tList\n\tput 0 into tCount\n\trepeat forever\n\t\tif tList[tCount] is not a number then\n\t\t\texit repeat\n\t\tend if\n\t\tadd 1 to tCount\n\tend repeat\n\n\t// tCount is 8"
			}],
			"description":"Use the repeat forever structure to execute a set of statements until either an error is thrown, or exit repeat is executed."
		},{
			"id":"oxt_builder-395",
			"name":"repeatwith",
			"display name":"RepeatWith",
			"library":"oxt_builder",
			"type":"control structure",
			"syntax":[
				"repeat with <Counter> from <Start> ( up | down ) to <Finish> [ by <Step> ]\n\t<StatementList>\nend repeat"
			],
			"display syntax":[
				"repeat with <i>Counter</i> from <i>Start</i> ( up | down ) to <i>Finish</i> [ by <i>Step</i> ]"
			],
			"associations":["com.livecode.language"],
			"summary":"Executes a list of statements",
			"parameters":[{
				"name":"Counter",
				"type":"",
				"refparam":"false",
				"description":"A numeric variable."
			},{
				"name":"Start",
				"type":"number",
				"refparam":"false",
				"description":"The initial value of <Counter>"
			},{
				"name":"Finish",
				"type":"number",
				"refparam":"false",
				"description":"The boundary value of <Counter>"
			},{
				"name":"Step",
				"type":"number",
				"refparam":"false",
				"description":"The value by which to increase or decrease the <Counter>"
			},{
				"name":"StatementList",
				"type":"",
				"refparam":"false",
				"description":"A set of statements."
			}],
			"examples":[{
				"script":"\tpublic handler Factorial(in pOperand as integer) as number\n\t\tif pOperand < 1 then\n\t\t\treturn 0\n\t\tend if\n\n\t\tvariable tTotal as number\n\t\tput 1 into tTotal\n\n\t\tvariable tCounter as integer\n\t\trepeat with tCounter from 1 up to pOperand \n\t\t\tmultiply tTotal by tCounter\n\t\tend repeat\n\n\t\treturn tCounter\n\tend handler"
			}],
			"description":"Use the repeat with <Counter> structure to execute a set of statements until the value of <Counter> reaches or crosses (depending on iteration direction) the value of <Finish>. The counter is increased (or decreased) by <Step> on each iteration of the loop."
		},{
			"id":"oxt_builder-396",
			"name":"com.livecode.language",
			"display name":"com.livecode.language",
			"library":"oxt_builder",
			"type":"",
			"display syntax":[
				"com.livecode.language"
			],
			"associations":["com.livecode.language"]
		},{
			"id":"oxt_builder-397",
			"name":"repeattimes",
			"display name":"RepeatTimes",
			"library":"oxt_builder",
			"type":"control structure",
			"syntax":[
				"repeat <Count> times\n\t<StatementList>\nend repeat"
			],
			"display syntax":[
				"repeat <i>Count</i> times"
			],
			"associations":["com.livecode.language"],
			"summary":"Executes a list of statements a given number of times.",
			"parameters":[{
				"name":"Count",
				"type":"integer",
				"refparam":"false",
				"description":"An expression which evaluates to an integer."
			},{
				"name":"StatementList",
				"type":"",
				"refparam":"false",
				"description":"A set of statements."
			}],
			"examples":[{
				"script":"public handler TwoToThePower(in pOperand as integer) as number\n\n\tif pOperand is 0 then\n\t\treturn 1\n\tend if\t\n\n\tvariable tCount as number\n\tput the abs of pOperand into tCount\n\n\tvariable tResult as number\n\tput 1 into tResult\n\trepeat tCount times\n\t\tmultiply tResult by 2\n\tend repeat\n\n\tif pOperand < 0 then \n\t\treturn 1 / tResult\n\tend if\n\n\treturn tResult\nend handler"
			}],
			"description":"Use the repeat <Count> times structure to execute a set of statements a given number of times, when the statements executed do not rely on knowing which iteration the repeat loop is on."
		},{
			"id":"oxt_builder-398",
			"name":"setto",
			"display name":"SetTo",
			"library":"oxt_builder",
			"type":"statement",
			"syntax":[
				"set <targetContainer> to <sourceValue>"
			],
			"display syntax":[
				"set <i>targetContainer</i> to <i>sourceValue</i>"
			],
			"associations":["com.livecode.language"],
			"summary":"Put a value into a container.",
			"parameters":[{
				"name":"targetContainer",
				"type":"any",
				"refparam":"false",
				"description":"A valid target for <sourceValue>"
			},{
				"name":"sourceValue",
				"type":"any",
				"refparam":"false",
				"description":"The value to put into the <targetContainer>"
			}],
			"description":"Assigns the result of evaluating <sourceValue> to <targetContainer>.\n>*Note:* It is a checked runtime error for the source value's type to not be compatible with the target expression's type."
		},{
			"id":"oxt_builder-399",
			"name":"com.livecode.date",
			"display name":"com.livecode.date",
			"library":"oxt_builder",
			"type":"module",
			"display syntax":[
				"com.livecode.date"
			],
			"associations":["com.livecode.date"],
			"summary":"This library provides low-level system functionality for modular\nLiveCode programs.",
			"description":"This library provides low-level system functionality for modular\nLiveCode programs."
		},{
			"id":"oxt_builder-400",
			"name":"universaltime",
			"display name":"UniversalTime",
			"library":"oxt_builder",
			"type":"expression",
			"syntax":[
				"the universal time"
			],
			"display syntax":[
				"the universal time"
			],
			"associations":["com.livecode.date"],
			"summary":"The seconds",
			"examples":[{
				"script":"variable tTime as real\nput the universal time into tTime"
			}],
			"description":"Returns the current universal time relative to the start of the UNIX epoch - 1st\nJanuary 1970 in seconds.",
			"tags":["date and time"]
		},{
			"id":"oxt_builder-401",
			"name":"localdate",
			"display name":"LocalDate",
			"library":"oxt_builder",
			"type":"expression",
			"syntax":[
				"the local date"
			],
			"display syntax":[
				"the local date"
			],
			"associations":["com.livecode.date"],
			"summary":"The local Gregorian date",
			"examples":[{
				"script":"variable tDateTime as List\nput the local date into tDateTime\n\nvariable tDayOfMonth as Number\nput tDateTime[3] into tDayOfMonth"
			}],
			"description":"Returns the local date as a list of seven numeric components.  The\nelements of the list are:\n\n* The year\n* The month (1-12)\n* The day of the month (1-31, depending on the month)\n* The hour (0-23)\n* The minute (0-59)\n* The second (0-59)\n* The offset from UTC in seconds",
			"references":{
				"expression":["UniversalDate"]
			},
			"tags":["date and time"]
		},{
			"id":"oxt_builder-402",
			"name":"universaldate",
			"display name":"UniversalDate",
			"library":"oxt_builder",
			"type":"expression",
			"syntax":[
				"the universal date"
			],
			"display syntax":[
				"the universal date"
			],
			"associations":["com.livecode.date"],
			"summary":"The UTC Gregorian date",
			"examples":[{
				"script":"variable tDateTime as List\nput the universal date into tDateTime\n\nvariable tMinuteOfHour as Number\nput tDateTime[5] into tMinuteOfHour"
			}],
			"description":"Returns the universal date (i.e. the current date in the UTC+00:00\ntime zone) as a list of seven numeric components.  The elements of the\nlist are the same as for <LocalDate>.",
			"references":{
				"expression":["LocalDate"]
			},
			"tags":["date and time"]
		},{
			"id":"oxt_builder-403",
			"name":"com.livecode.library.objectrepository",
			"display name":"com.livecode.library.objectrepository",
			"library":"oxt_builder",
			"type":"library",
			"display syntax":[
				"com.livecode.library.objectrepository"
			],
			"associations":["com.livecode.library.objectrepository"],
			"summary":"This library provides support persistent object references within a session",
			"description":"This library provides support persistent object references within a session"
		},{
			"id":"oxt_builder-404",
			"name":"objectrepositorystore",
			"display name":"objectRepositoryStore",
			"library":"oxt_builder",
			"type":"handler",
			"syntax":[
				"objectRepositoryStore(<pObject>)"
			],
			"display syntax":[
				"objectRepositoryStore(<i>pObject</i>)"
			],
			"associations":["com.livecode.library.objectrepository"],
			"summary":"Store an object in the object repository and get its ID",
			"parameters":[{
				"name":"pObject",
				"type":"",
				"refparam":"false",
				"description":"An object long ID"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"An object repository ID which can be used to get the current long id of\nthe object"
			}],
			"description":"As long ID of an object may mutate during a session the IDE needs an\nobject reference that can handle that mutation."
		},{
			"id":"oxt_builder-405",
			"name":"objectrepositoryflush",
			"display name":"objectRepositoryFlush",
			"library":"oxt_builder",
			"type":"handler",
			"syntax":[
				"objectRepositoryFlush()"
			],
			"display syntax":[
				"objectRepositoryFlush()"
			],
			"associations":["com.livecode.library.objectrepository"],
			"summary":"Flush deleted objects from the repository",
			"description":"As long ID of an object may mutate during a session the IDE needs an\nobject reference that can handle that mutation."
		},{
			"id":"oxt_builder-406",
			"name":"objectrepositoryretrieve",
			"display name":"objectRepositoryRetrieve",
			"library":"oxt_builder",
			"type":"handler",
			"syntax":[
				"objectRepositoryRetrieve(<pID>)"
			],
			"display syntax":[
				"objectRepositoryRetrieve(<i>pID</i>)"
			],
			"associations":["com.livecode.library.objectrepository"],
			"summary":"Retrieve an object long id from the object repository",
			"parameters":[{
				"name":"pID",
				"type":"",
				"refparam":"false",
				"description":"An object repository ID"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"An object long ID or empty if the object is not in the repository or\nno longer exists"
			}],
			"description":"As long ID of an object may mutate during a session the IDE needs an\nobject reference that can handle that mutation."
		},{
			"id":"oxt_builder-407",
			"name":"objectrepositoryremove",
			"display name":"objectRepositoryRemove",
			"library":"oxt_builder",
			"type":"handler",
			"syntax":[
				"objectRepositoryRemove(<pID>)"
			],
			"display syntax":[
				"objectRepositoryRemove(<i>pID</i>)"
			],
			"associations":["com.livecode.library.objectrepository"],
			"summary":"Remove and object from the object repository",
			"parameters":[{
				"name":"pID",
				"type":"",
				"refparam":"false",
				"description":"An object repository ID\n"
			}],
			"description":"As long ID of an object may mutate during a session the IDE needs an\nobject reference that can handle that mutation."
		}