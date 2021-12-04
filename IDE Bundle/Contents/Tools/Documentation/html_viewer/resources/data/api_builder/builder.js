{
			"id":"builder-1",
			"name":"text",
			"display name":"text",
			"library":"builder",
			"type":"property",
			"syntax":[
				"set the text of <widget> to <pText>\nget the text of <widget>"
			],
			"display syntax":[
				"set the text of <i>widget</i> to <i>pText</i>"
			],
			"associations":["com.livecode.widget.native.mac.textfield"],
			"summary":"The text displayed by the widget",
			"OS":["mac"],
			"examples":[{
				"script":"local sEntered\non returnKey\n    -- store the entered text and clear the field\n    put the text of the target into sEntered\n    set the text of the target to empty\nend returnKey"
			}],
			"value":[{
				"name":"value",
				"type":"",
				"description":"The text of the widget"
			}],
			"description":"Use the <text> property to get or set the text displayed\nby the field widget.\n"
		},{
			"id":"builder-2",
			"name":"com.livecode.widget.native.mac.textfield",
			"display name":"com.livecode.widget.native.mac.textfield",
			"library":"builder",
			"type":"widget",
			"display syntax":[
				"com.livecode.widget.native.mac.textfield"
			],
			"associations":["com.livecode.widget.native.mac.textfield"],
			"summary":"This widget wraps the native NSTextField on Mac. Since this is\na single-line field, the return key does not enter a new line,\ninstead it triggers the returnKey action and the contents of\nthe field is selected.",
			"OS":["mac"],
			"description":"This widget wraps the native NSTextField on Mac. Since this is\na single-line field, the return key does not enter a new line,\ninstead it triggers the returnKey action and the contents of\nthe field is selected."
		},{
			"id":"builder-3",
			"name":"enabled",
			"display name":"enabled",
			"library":"builder",
			"type":"property",
			"syntax":[
				"set the enabled of <widget> to {true | false}\nget the enabled of <widget>"
			],
			"display syntax":[
				"set the enabled of <i>widget</i> to {true | false}"
			],
			"associations":["com.livecode.widget.native.mac.textfield"],
			"summary":"The enabled state of the text field",
			"OS":["mac"],
			"description":"Use the <enabled> property to enable or disable the native field. When\ndisabled, the text has a greyed out appearance and the field contents\ncannot be edited."
		},{
			"id":"builder-4",
			"name":"returnkey",
			"display name":"returnKey",
			"library":"builder",
			"type":"message",
			"syntax":[
				"on returnKey"
			],
			"display syntax":[
				"on returnKey"
			],
			"associations":["com.livecode.widget.native.mac.textfield"],
			"summary":"Sent when the user presses the return key",
			"OS":["mac"],
			"examples":[{
				"script":"on returnKey\n    -- ensure the user has entered a number\n    if the text of the target is not a number then\n      beep\n      answer \"Invalid number entered!\"\n    end if\nend returnKey"
			}],
			"description":"Use the <returnKey> message to respond to the user pressing the return\nkey whilst the field is focused."
		},{
			"id":"builder-5",
			"name":"showfocusborder",
			"display name":"showFocusBorder",
			"library":"builder",
			"type":"property",
			"syntax":[
				"set the showFocusBorder of <widget> to { true | false }\nget the showFocusBorder of <widget>"
			],
			"display syntax":[
				"set the showFocusBorder of <i>widget</i> to { true | false }"
			],
			"associations":["com.livecode.widget.native.mac.textfield"],
			"summary":"Whether the text field has a focus border or not",
			"OS":["mac"],
			"description":"Use the <showFocusBorder> property to control whether the field\nwidget displays a blue border when focused or not."
		},{
			"id":"builder-6",
			"name":"showborder",
			"display name":"showBorder",
			"library":"builder",
			"type":"property",
			"syntax":[
				"set the showBorder of <widget> to { true | false }\nget the showBorder of <widget>"
			],
			"display syntax":[
				"set the showBorder of <i>widget</i> to { true | false }"
			],
			"associations":["com.livecode.widget.native.mac.textfield"],
			"summary":"Whether the text field has a border or not",
			"OS":["mac"],
			"description":"Use the <showBorder> property to control whether the field\nwidget has a border or not."
		},{
			"id":"builder-7",
			"name":"elementsofarray",
			"display name":"ElementsOfArray",
			"library":"builder",
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
			"id":"builder-8",
			"name":"emptyarray",
			"display name":"EmptyArray",
			"library":"builder",
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
			"id":"builder-9",
			"name":"repeatforeachelementinarray",
			"display name":"RepeatForEachElementInArray",
			"library":"builder",
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
			"id":"builder-10",
			"name":"singletonelementofarray",
			"display name":"SingletonElementOfArray",
			"library":"builder",
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
			"id":"builder-11",
			"name":"deleteelementofarray",
			"display name":"DeleteElementOfArray",
			"library":"builder",
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
			"id":"builder-12",
			"name":"amongkeysofarray",
			"display name":"AmongKeysOfArray",
			"library":"builder",
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
			"id":"builder-13",
			"name":"keysofarray",
			"display name":"KeysOfArray",
			"library":"builder",
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
			"id":"builder-14",
			"name":"countelementsofarray",
			"display name":"CountElementsOfArray",
			"library":"builder",
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
			"id":"builder-15",
			"name":"amongelementsofarray",
			"display name":"AmongElementsOfArray",
			"library":"builder",
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
			"id":"builder-16",
			"name":"repeatforeachkey",
			"display name":"RepeatForEachKey",
			"library":"builder",
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
			"id":"builder-17",
			"name":"com.livecode.array",
			"display name":"com.livecode.array",
			"library":"builder",
			"type":"module",
			"display syntax":[
				"com.livecode.array"
			],
			"associations":["com.livecode.array"],
			"summary":"This library consists of the operations on arrays included in the standard library of LiveCode Builder.",
			"description":"This library consists of the operations on arrays included in the standard library of LiveCode Builder."
		},{
			"id":"builder-18",
			"name":"pointerfromjobject",
			"display name":"PointerFromJObject",
			"library":"builder",
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
			"id":"builder-19",
			"name":"com.livecode.java",
			"display name":"com.livecode.java",
			"library":"builder",
			"type":"module",
			"display syntax":[
				"com.livecode.java"
			],
			"associations":["com.livecode.java"],
			"summary":"This module provides utility handlers for converting to and from Java types.",
			"description":"> **Important:** This library is currently supported on Android, Mac and\n> Linux. Binding to java classes requires the availability of a Java \n> runtime and access to the appropriate libraries. On Mac, \n> the `JAVA_HOME` environment variable must be set to the path to your \n> Java installation (usually at \n> `/Library/Java/JavaVirtualMachines/jdk1.7.0_55.jdk/Contents/Home`). \n> On Linux, your `LD_LIBRARY_PATH` must be set to the folder containing \n> the `libjvm.so` library (usually at `${JAVA_HOME}/jre/lib/amd64/server`\n> on 64-bit Linux)."
		},{
			"id":"builder-20",
			"name":"stringfromjstring",
			"display name":"StringFromJString",
			"library":"builder",
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
			"id":"builder-21",
			"name":"pointertojobject",
			"display name":"PointerToJObject",
			"library":"builder",
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
			"id":"builder-22",
			"name":"getjavaclassname",
			"display name":"GetJavaClassName",
			"library":"builder",
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
			"id":"builder-23",
			"name":"stringtojstring",
			"display name":"StringToJString",
			"library":"builder",
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
			"id":"builder-24",
			"name":"com.livecode.widget.native.android.button",
			"display name":"com.livecode.widget.native.android.button",
			"library":"builder",
			"type":"widget",
			"display syntax":[
				"com.livecode.widget.native.android.button"
			],
			"associations":["com.livecode.widget.native.android.button"],
			"summary":"This widget is a native button on Android.",
			"OS":["android"],
			"platforms":["mobile"],
			"description":"This widget is a native button on Android."
		},{
			"id":"builder-25",
			"name":"enabled",
			"display name":"enabled",
			"library":"builder",
			"type":"property",
			"syntax":[
				"set the enabled of <widget> to {true | false}\nget the enabled of <widget>"
			],
			"display syntax":[
				"set the enabled of <i>widget</i> to {true | false}"
			],
			"associations":["com.livecode.widget.native.android.button"],
			"summary":"Whether the button is active and responds to user action",
			"OS":["android"],
			"platforms":["mobile"],
			"description":"Use the <enabled> property to enable or disable the native button. When\ndisabled, the button has a greyed out appearance and does not accept \nclicks or touches."
		},{
			"id":"builder-26",
			"name":"labelcolor",
			"display name":"labelColor",
			"library":"builder",
			"type":"property",
			"syntax":[
				"set the labelColor of <widget> to <pLabel>\nget the labelColor of <widget>"
			],
			"display syntax":[
				"set the labelColor of <i>widget</i> to <i>pLabel</i>"
			],
			"associations":["com.livecode.widget.native.android.button"],
			"summary":"The color of the text of the button label",
			"OS":["android"],
			"platforms":["mobile"],
			"examples":[{
				"script":"set the labelColor of widget \"Android Button\" to \"255,0,0,128\""
			}],
			"value":[{
				"name":"value",
				"type":"",
				"description":"A comma delimited string representing a color in RGB / RGBA format"
			}],
			"description":"Use the <labeColor> property to change the color of the label text of \nthe button."
		},{
			"id":"builder-27",
			"name":"label",
			"display name":"label",
			"library":"builder",
			"type":"property",
			"syntax":[
				"set the label of <widget> to <pLabel>\nget the label of <widget>"
			],
			"display syntax":[
				"set the label of <i>widget</i> to <i>pLabel</i>"
			],
			"associations":["com.livecode.widget.native.android.button"],
			"summary":"The label displayed by the button.",
			"OS":["android"],
			"platforms":["mobile"],
			"examples":[{
				"script":"set the label of widget \"Android Button\" to \"Click me!\""
			}],
			"value":[{
				"name":"value",
				"type":"",
				"description":"The string to use as the button label"
			}],
			"description":"The <label> property is the label displayed by the button.\n"
		},{
			"id":"builder-28",
			"name":"com.livecode.assert",
			"display name":"com.livecode.assert",
			"library":"builder",
			"type":"module",
			"display syntax":[
				"com.livecode.assert"
			],
			"associations":["com.livecode.assert"],
			"summary":"Sometimes there are restrictions about how some LCB code can be used\ncorrectly.  It may only be possible to make it work in a sensible way\nif is passed a particular range of values, or if the system is in a\nparticular state.  These are known as \"preconditions\" for the code.\n\nMany preconditions can be expressed via the LCB type system.  For\nexample, you can declare that the parameters passed to handler must be\nparticular types of value.  For example, when you write `in pName as\nString`, you are saying that the handler can only work when the\n`pName` parameter is a character string.  This is a precondition that\ncan be checked automatically by the LCB compiler and virtual machine.\n\nSome preconditions can't yet be automatically checked by LCB.  An\nexample would be a requirement that a string contains only ASCII\ncharacters, or that an array has a particular key.\n\nThis module provides syntax to assist with explicit precondition\nchecks.",
			"description":"Sometimes there are restrictions about how some LCB code can be used\ncorrectly.  It may only be possible to make it work in a sensible way\nif is passed a particular range of values, or if the system is in a\nparticular state.  These are known as \"preconditions\" for the code.\n\nMany preconditions can be expressed via the LCB type system.  For\nexample, you can declare that the parameters passed to handler must be\nparticular types of value.  For example, when you write `in pName as\nString`, you are saying that the handler can only work when the\n`pName` parameter is a character string.  This is a precondition that\ncan be checked automatically by the LCB compiler and virtual machine.\n\nSome preconditions can't yet be automatically checked by LCB.  An\nexample would be a requirement that a string contains only ASCII\ncharacters, or that an array has a particular key.\n\nThis module provides syntax to assist with explicit precondition\nchecks."
		},{
			"id":"builder-29",
			"name":"expectpreconditionwithreason",
			"display name":"ExpectPreconditionWithReason",
			"library":"builder",
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
			"id":"builder-30",
			"name":"expectprecondition",
			"display name":"ExpectPrecondition",
			"library":"builder",
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
			"id":"builder-31",
			"name":"androidpermissionexists",
			"display name":"AndroidPermissionExists",
			"library":"builder",
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
			"id":"builder-32",
			"name":"androidunregisterlifecyclelistener",
			"display name":"AndroidUnregisterLifecycleListener",
			"library":"builder",
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
			"id":"builder-33",
			"name":"androidrequestpermission",
			"display name":"AndroidRequestPermission",
			"library":"builder",
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
			"id":"builder-34",
			"name":"androidregisterlifecyclelistener",
			"display name":"AndroidRegisterLifecycleListener",
			"library":"builder",
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
			"id":"builder-35",
			"name":"androidhaspermission",
			"display name":"AndroidHasPermission",
			"library":"builder",
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
			"id":"builder-36",
			"name":"applicationcontext",
			"display name":"ApplicationContext",
			"library":"builder",
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
			"id":"builder-37",
			"name":"stringtoandroidcolor",
			"display name":"StringToAndroidColor",
			"library":"builder",
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
			"id":"builder-38",
			"name":"com.livecode.library.androidutils",
			"display name":"com.livecode.library.androidutils",
			"library":"builder",
			"type":"module",
			"display syntax":[
				"com.livecode.library.androidutils"
			],
			"associations":["com.livecode.library.androidutils"],
			"summary":"A library of utility handlers for functions commonly needed by Android widgets.",
			"OS":["android"],
			"description":"A library of utility handlers for functions commonly needed by Android widgets."
		},{
			"id":"builder-39",
			"name":"isnotnothing",
			"display name":"IsNotNothing",
			"library":"builder",
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
			"id":"builder-40",
			"name":"isnotempty",
			"display name":"IsNotEmpty",
			"library":"builder",
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
			"id":"builder-41",
			"name":"isanumber",
			"display name":"IsANumber",
			"library":"builder",
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
			"id":"builder-42",
			"name":"isastring",
			"display name":"IsAString",
			"library":"builder",
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
			"id":"builder-43",
			"name":"isempty",
			"display name":"IsEmpty",
			"library":"builder",
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
			"id":"builder-44",
			"name":"isnothing",
			"display name":"IsNothing",
			"library":"builder",
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
			"id":"builder-45",
			"name":"isalist",
			"display name":"IsAList",
			"library":"builder",
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
			"id":"builder-46",
			"name":"isaboolean",
			"display name":"IsABoolean",
			"library":"builder",
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
			"id":"builder-47",
			"name":"isadata",
			"display name":"IsAData",
			"library":"builder",
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
			"id":"builder-48",
			"name":"isanarray",
			"display name":"IsAnArray",
			"library":"builder",
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
			"id":"builder-49",
			"name":"com.livecode.type",
			"display name":"com.livecode.type",
			"library":"builder",
			"type":"module",
			"display syntax":[
				"com.livecode.type"
			],
			"associations":["com.livecode.type"],
			"summary":"This library consists of the general operations on types provided by the standard library of Builder.",
			"description":"This library consists of the general operations on types provided by the standard library of Builder."
		},{
			"id":"builder-50",
			"name":"sortlistascendingbinary",
			"display name":"SortListAscendingBinary",
			"library":"builder",
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
			"id":"builder-51",
			"name":"sortlistusinghandler",
			"display name":"SortListUsingHandler",
			"library":"builder",
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
			"id":"builder-52",
			"name":"sortlistdescendingnumeric",
			"display name":"SortListDescendingNumeric",
			"library":"builder",
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
			"id":"builder-53",
			"name":"sortlistascendingnumeric",
			"display name":"SortListAscendingNumeric",
			"library":"builder",
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
			"id":"builder-54",
			"name":"sortlistascending",
			"display name":"SortListAscending",
			"library":"builder",
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
			"id":"builder-55",
			"name":"sortlistdescendingtext",
			"display name":"SortListDescendingText",
			"library":"builder",
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
			"id":"builder-56",
			"name":"sortlistascendingtext",
			"display name":"SortListAscendingText",
			"library":"builder",
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
			"id":"builder-57",
			"name":"sortlistdescendingbinary",
			"display name":"SortListDescendingBinary",
			"library":"builder",
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
			"id":"builder-58",
			"name":"sortlistdescending",
			"display name":"SortListDescending",
			"library":"builder",
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
			"id":"builder-59",
			"name":"com.livecode.sort",
			"display name":"com.livecode.sort",
			"library":"builder",
			"type":"module",
			"display syntax":[
				"com.livecode.sort"
			],
			"associations":["com.livecode.sort"],
			"summary":"This library consists of the sorting operations provided by the standard library of LiveCode Builder.",
			"description":"This library consists of the sorting operations provided by the standard library of LiveCode Builder."
		},{
			"id":"builder-60",
			"name":"putbytesafter",
			"display name":"PutBytesAfter",
			"library":"builder",
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
			"id":"builder-61",
			"name":"putbytesbefore",
			"display name":"PutBytesBefore",
			"library":"builder",
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
			"id":"builder-62",
			"name":"emptydata",
			"display name":"EmptyData",
			"library":"builder",
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
			"id":"builder-63",
			"name":"dataislessthandata",
			"display name":"DataIsLessThanData",
			"library":"builder",
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
			"id":"builder-64",
			"name":"concatenatebytes",
			"display name":"ConcatenateBytes",
			"library":"builder",
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
			"id":"builder-65",
			"name":"dataisnotdata",
			"display name":"DataIsNotData",
			"library":"builder",
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
			"id":"builder-66",
			"name":"dataisdata",
			"display name":"DataIsData",
			"library":"builder",
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
			"id":"builder-67",
			"name":"dataisgreaterthandata",
			"display name":"DataIsGreaterThanData",
			"library":"builder",
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
			"id":"builder-68",
			"name":"com.livecode.binary",
			"display name":"com.livecode.binary",
			"library":"builder",
			"type":"module",
			"display syntax":[
				"com.livecode.binary"
			],
			"associations":["com.livecode.binary"],
			"summary":"This library consists of the operations on binary strings provided by the standard library of LiveCode Builder.",
			"description":"This library consists of the operations on binary strings provided by the standard library of LiveCode Builder."
		},{
			"id":"builder-69",
			"name":"byteisindata",
			"display name":"ByteIsInData",
			"library":"builder",
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
			"id":"builder-70",
			"name":"byteoffset",
			"display name":"ByteOffset",
			"library":"builder",
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
			"id":"builder-71",
			"name":"deletefirstbyteof",
			"display name":"DeleteFirstByteOf",
			"library":"builder",
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
			"id":"builder-72",
			"name":"singletonbyteof",
			"display name":"SingletonByteOf",
			"library":"builder",
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
			"id":"builder-73",
			"name":"deletesingletonbyteof",
			"display name":"DeleteSingletonByteOf",
			"library":"builder",
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
			"id":"builder-74",
			"name":"randombytes",
			"display name":"RandomBytes",
			"library":"builder",
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
			"id":"builder-75",
			"name":"repeatforeachbyte",
			"display name":"RepeatForEachByte",
			"library":"builder",
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
			"id":"builder-76",
			"name":"deleterangebyteof",
			"display name":"DeleteRangeByteOf",
			"library":"builder",
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
			"id":"builder-77",
			"name":"bytewithcode",
			"display name":"ByteWithCode",
			"library":"builder",
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
			"id":"builder-78",
			"name":"countbytesof",
			"display name":"CountBytesOf",
			"library":"builder",
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
			"id":"builder-79",
			"name":"byteoffsetafter",
			"display name":"ByteOffsetAfter",
			"library":"builder",
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
			"id":"builder-80",
			"name":"com.livecode.byte",
			"display name":"com.livecode.byte",
			"library":"builder",
			"type":"module",
			"display syntax":[
				"com.livecode.byte"
			],
			"associations":["com.livecode.byte"],
			"summary":"This library consists of the operations on bytes included in the standard library of LiveCode Builder.",
			"description":"This library consists of the operations on bytes included in the standard library of LiveCode Builder."
		},{
			"id":"builder-81",
			"name":"beginswithbytes",
			"display name":"BeginsWithBytes",
			"library":"builder",
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
			"id":"builder-82",
			"name":"endswithbytes",
			"display name":"EndsWithBytes",
			"library":"builder",
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
			"id":"builder-83",
			"name":"containsbytes",
			"display name":"ContainsBytes",
			"library":"builder",
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
			"id":"builder-84",
			"name":"lastbyteof",
			"display name":"LastByteOf",
			"library":"builder",
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
			"id":"builder-85",
			"name":"deletelastbyteof",
			"display name":"DeleteLastByteOf",
			"library":"builder",
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
			"id":"builder-86",
			"name":"byteoffsetbefore",
			"display name":"ByteOffsetBefore",
			"library":"builder",
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
			"id":"builder-87",
			"name":"firstbyteof",
			"display name":"FirstByteOf",
			"library":"builder",
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
			"id":"builder-88",
			"name":"codeofbyte",
			"display name":"CodeOfByte",
			"library":"builder",
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
			"id":"builder-89",
			"name":"rangebyteof",
			"display name":"RangeByteOf",
			"library":"builder",
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
			"id":"builder-90",
			"name":"reversebytesof",
			"display name":"ReverseBytesOf",
			"library":"builder",
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
			"id":"builder-91",
			"name":"androidrecordergetmaxamplitude",
			"display name":"androidRecorderGetMaxAmplitude",
			"library":"builder",
			"type":"handler",
			"syntax":[
				"androidRecorderGetMaxAmplitude()"
			],
			"display syntax":[
				"androidRecorderGetMaxAmplitude()"
			],
			"associations":["com.livecode.library.androidaudiorecorder"],
			"summary":"Returns the max amplitude of the recording since last sampled",
			"OS":["android"],
			"examples":[{
				"script":"-- Poll amplitude every 30 millisecs, and output values\ncommand LogAmplitude\n   put androidRecorderGetMaxAmplitude()\n   send \"LogAmplitude\" to me in 30 millisecs\nend LogAmplitude"
			}],
			"description":"Use the <androidRecorderGetMaxAmplitude> handler to retrieve the maximum\namplitude value reached during recording from the selected input source\nsince the amplitude was last retrieved.\n\n<androidRecorderGetMaxAmplitude> returns 0 if no recording is currently\nhappening.\n"
		},{
			"id":"builder-92",
			"name":"androidrecordersetrecordcompressiontype",
			"display name":"androidRecorderSetRecordCompressionType",
			"library":"builder",
			"type":"handler",
			"syntax":[
				"androidRecorderSetRecordCompressionType(<pCompressionType>)"
			],
			"display syntax":[
				"androidRecorderSetRecordCompressionType(<i>pCompressionType</i>)"
			],
			"associations":["com.livecode.library.androidaudiorecorder"],
			"summary":"Set the record compression type",
			"OS":["android"],
			"parameters":[{
				"name":"pCompressionType",
				"type":"",
				"refparam":"false",
				"description":"The record compression type\n- \"Default\": The default compression type\n- \"AMR NB\": AMR Narrowband\n- \"AMR WB\": AMR Wideband\n- \"AAC\": AAC Low Complexity (AAC-LC)\n- \"HE AAC\": High Efficiency AAC (HE-AAC)\n- \"AAC ELD\": Enhanced Low Delay AAC (AAC-ELD)\n- \"Vorbis\" : Ogg Vorbis"
			}],
			"examples":[{
				"script":"androidRecorderSetRecordCompressionType \"AMR NB\""
			}],
			"description":"Use the <androidRecorderSetRecordCompressionType> handler to control the \naudio encoding used by the audio recorder."
		},{
			"id":"builder-93",
			"name":"androidrecordersetrecordformat",
			"display name":"androidRecorderSetRecordFormat",
			"library":"builder",
			"type":"handler",
			"syntax":[
				"androidRecorderSetRecordFormat(<pRecordFormat>)"
			],
			"display syntax":[
				"androidRecorderSetRecordFormat(<i>pRecordFormat</i>)"
			],
			"associations":["com.livecode.library.androidaudiorecorder"],
			"summary":"Set the record output format",
			"OS":["android"],
			"parameters":[{
				"name":"pRecordFormat",
				"type":"",
				"refparam":"false",
				"description":"The record output format\n\"ThreeGPP\":\n\"MPEG-4\":\n\"AMR WB\":\n\"AAC ADTS\":\n\"WebM\":"
			}],
			"examples":[{
				"script":"androidRecorderSetRecordFormat \"ThreeGPP\""
			}],
			"description":"Use the <androidRecorderSetRecordFormat> handler to set the format of \nthe output file."
		},{
			"id":"builder-94",
			"name":"androidrecorderstoprecording",
			"display name":"androidRecorderStopRecording",
			"library":"builder",
			"type":"handler",
			"syntax":[
				"androidRecorderStopRecording()"
			],
			"display syntax":[
				"androidRecorderStopRecording()"
			],
			"associations":["com.livecode.library.androidaudiorecorder"],
			"summary":"Stop recording",
			"OS":["android"],
			"examples":[{
				"script":"on mouseUp\n    try\n        androidRecorderStopRecording\n    catch tError\n        answer tError\n    end try\nend mouseUp"
			}],
			"description":"Use the <androidRecorderStopRecording> handler to stop the current \nrecording. If no recording is currently happening, this handler will\nthrow an error."
		},{
			"id":"builder-95",
			"name":"androidrecorderstartrecording",
			"display name":"androidRecorderStartRecording",
			"library":"builder",
			"type":"handler",
			"syntax":[
				"androidRecorderStartRecording(<pFileName>)"
			],
			"display syntax":[
				"androidRecorderStartRecording(<i>pFileName</i>)"
			],
			"associations":["com.livecode.library.androidaudiorecorder"],
			"summary":"Start recording an audio file, using the given filename",
			"OS":["android"],
			"parameters":[{
				"name":"pFileName",
				"type":"",
				"refparam":"false",
				"description":"The absolute filename of the output file"
			}],
			"examples":[{
				"script":"   local tFilePath\n   put specialFolderPath(\"external documents\") & slash & \"recording.mp4\" \\\n      into tFilePath   \n   androidRecorderStartRecording tFilePath"
			}],
			"description":"Use the <androidRecorderStartRecording> handler to start recording audio\non Android using the input source, compression type and output format \nselected using the <androidRecorderSetRecordInput>, \n<androidRecorderSetRecordCompressionType>, and <androidRecorderSetRecordFormat>\nhandlers. The default input source, compression and output format are \nbuilt-in microphone, AMR-NB and 3gpp respectively.",
			"references":{
				"handler":["androidRecorderSetRecordInput","androidRecorderSetRecordCompressionType","androidRecorderSetRecordFormat"]
			}
		},{
			"id":"builder-96",
			"name":"androidrecordersetrecordinput",
			"display name":"androidRecorderSetRecordInput",
			"library":"builder",
			"type":"handler",
			"syntax":[
				"androidRecorderSetRecordInput(<pInputSource>)"
			],
			"display syntax":[
				"androidRecorderSetRecordInput(<i>pInputSource</i>)"
			],
			"associations":["com.livecode.library.androidaudiorecorder"],
			"summary":"Set the record input source",
			"OS":["android"],
			"parameters":[{
				"name":"pInputSource",
				"type":"",
				"refparam":"false",
				"description":"The record input source\n- \"Default\": The device's default record input source\n- \"Mic\": Microphone audio source\n- \"VoiceUplink\": Voice call uplink (Tx) audio source\n- \"VoiceDownlink\": Voice call uplink (Tx) audio source.\n- \"VoiceCall\": Voice call uplink + downlink audio source\n- \"Camcorder\": Microphone audio source tuned for video recording, with the same orientation as the camera if available\n- \"VoiceRecognition\": Microphone audio source tuned for voice recognition\n- \"VoiceCommunication\": Microphone audio source tuned for voice recognition\n- \"RemoteSubmix\": Audio source for a submix of audio streams to be presented remotely\n- \"Unprocessed\": Microphone audio source tuned for unprocessed (raw) sound if available, behaves like Default otherwise"
			}],
			"examples":[{
				"script":"androidRecorderSetRecordInput \"mic\""
			}],
			"description":"Use the <androidRecorderSetRecordInput> handler to control the source \nand tuning of the record input."
		},{
			"id":"builder-97",
			"name":"com.livecode.library.androidaudiorecorder",
			"display name":"com.livecode.library.androidaudiorecorder",
			"library":"builder",
			"type":"library",
			"display syntax":[
				"com.livecode.library.androidaudiorecorder"
			],
			"associations":["com.livecode.library.androidaudiorecorder"],
			"summary":"This library provides Android audio recording functionality, via the \nandroid.media.MediaRecorder class.",
			"OS":["android"],
			"description":"Use this library to record audio on Android. \n\n>*Note:* This library requires RECORD_AUDIO, WRITE_EXTERNAL_STORAGE and\n> CAPTURE_AUDIO_OUTPUT permissions. These will be automatically added to \n> the application manifest when an application including this library is \n> built."
		},{
			"id":"builder-98",
			"name":"nighthourhandcolor",
			"display name":"nightHourHandColor",
			"library":"builder",
			"type":"property",
			"syntax":[
				"get the nightHourHandColor of <widget>",
				"set the nightHourHandColor of <widget> to <color>"
			],
			"display syntax":[
				"get the nightHourHandColor of <i>widget</i>"
			],
			"associations":["com.livecode.widget.clock"],
			"summary":"Determines the color of the hour hand on the clock during the night",
			"description":"Use the <nightHourHandColor> property to get or set the color of the hour\nhand of the clock during the night. To determine if the clock is\ndisplaying its daytime or night-time colors, use the read-only property\n<isDay>."
		},{
			"id":"builder-99",
			"name":"timezone",
			"display name":"timeZone",
			"library":"builder",
			"type":"property",
			"syntax":[
				"get the timeZone of <widget>",
				"set the timeZone of <widget> to <pOffset>"
			],
			"display syntax":[
				"get the timeZone of <i>widget</i>"
			],
			"associations":["com.livecode.widget.clock"],
			"summary":"The time zone offset from UTC, in seconds, or the empty string",
			"description":"The <timeZone> is used to allow the clock widget to display a time other than\nthe local time.  If the <timeZone> is empty, then the clock displays the local\ntime.  Otherwise, the <timeZone> should be the number of seconds different from\nUTC that the clock should display.\n"
		},{
			"id":"builder-100",
			"name":"nightfacecolor",
			"display name":"nightFaceColor",
			"library":"builder",
			"type":"property",
			"syntax":[
				"get the nightFaceColor of <widget>",
				"set the nightFaceColor of <widget> to <color>"
			],
			"display syntax":[
				"get the nightFaceColor of <i>widget</i>"
			],
			"associations":["com.livecode.widget.clock"],
			"summary":"Determines the color of the face of the clock during the night",
			"description":"Use the <nightFaceColor> property to get or set the color of the face\nof the clock during the night. To determine if the clock is\ndisplaying its daytime or night-time colors, use the read-only property\n<isDay>."
		},{
			"id":"builder-101",
			"name":"nightsecondhandcolor",
			"display name":"nightSecondHandColor",
			"library":"builder",
			"type":"property",
			"syntax":[
				"get the nightSecondHandColor of <widget>",
				"set the nightSecondHandColor of <widget> to <color>"
			],
			"display syntax":[
				"get the nightSecondHandColor of <i>widget</i>"
			],
			"associations":["com.livecode.widget.clock"],
			"summary":"Determines the color of the second hand on the clock during the night",
			"description":"Use the <nightSecondHandColor> property to get or set the color of the second\nhand of the clock during the night. To determine if the clock is\ndisplaying its daytime or night-time colors, use the read-only property\n<isDay>."
		},{
			"id":"builder-102",
			"name":"daynumbercolor",
			"display name":"dayNumberColor",
			"library":"builder",
			"type":"property",
			"syntax":[
				"get the dayNumberColor of <widget>",
				"set the dayNumberColor of <widget> to <color>"
			],
			"display syntax":[
				"get the dayNumberColor of <i>widget</i>"
			],
			"associations":["com.livecode.widget.clock"],
			"summary":"Determines the color of the numbers on the clock during the day",
			"description":"Use the <dayNumberColor> property to get or set the text color of the numbers\non the face of the clock during the day. To determine if the clock is\ndisplaying its daytime or night-time colors use the read-only property\n<isDay>."
		},{
			"id":"builder-103",
			"name":"dayfacecolor",
			"display name":"dayFaceColor",
			"library":"builder",
			"type":"property",
			"syntax":[
				"get the dayFaceColor of <widget>",
				"set the dayFaceColor of <widget> to <color>"
			],
			"display syntax":[
				"get the dayFaceColor of <i>widget</i>"
			],
			"associations":["com.livecode.widget.clock"],
			"summary":"Determines the color of the face of the clock during the day",
			"description":"Use the <dayFaceColor> property to get or set the color of the face\nof the clock during the day. To determine if the clock is\ndisplaying its daytime or night-time colors, use the read-only property\n<isDay>."
		},{
			"id":"builder-104",
			"name":"nightnumbercolor",
			"display name":"nightNumberColor",
			"library":"builder",
			"type":"property",
			"syntax":[
				"get the nightNumberColor of <widget>",
				"set the nightNumberColor of <widget> to <color>"
			],
			"display syntax":[
				"get the nightNumberColor of <i>widget</i>"
			],
			"associations":["com.livecode.widget.clock"],
			"summary":"Determines the color of the numbers on the clock during the night",
			"description":"Use the <nightNumberColor> property to get or set the text color of the numbers\non the face of the clock during the night. To determine if the clock is\ndisplaying its daytime or night-time colors use the read-only property\n<isDay>."
		},{
			"id":"builder-105",
			"name":"nightminutehandcolor",
			"display name":"nightMinuteHandColor",
			"library":"builder",
			"type":"property",
			"syntax":[
				"get the nightMinuteHandColor of <widget>",
				"set the nightMinuteHandColor of <widget> to <color>"
			],
			"display syntax":[
				"get the nightMinuteHandColor of <i>widget</i>"
			],
			"associations":["com.livecode.widget.clock"],
			"summary":"Determines the color of the minute hand on the clock during the night",
			"description":"Use the <nightMinuteHandColor> property to get or set the color of the minute\nhand of the clock during the night. To determine if the clock is\ndisplaying its daytime or night-time colors, use the read-only property\n<isDay>."
		},{
			"id":"builder-106",
			"name":"dayminutehandcolor",
			"display name":"dayMinuteHandColor",
			"library":"builder",
			"type":"property",
			"syntax":[
				"get the dayMinuteHandColor of <widget>",
				"set the dayMinuteHandColor of <widget> to <color>"
			],
			"display syntax":[
				"get the dayMinuteHandColor of <i>widget</i>"
			],
			"associations":["com.livecode.widget.clock"],
			"summary":"Determines the color of the minute hand on the clock during the day",
			"description":"Use the <dayMinuteHandColor> property to get or set the color of the minute\nhand of the clock during the day. To determine if the clock is\ndisplaying its daytime or night-time colors, use the read-only property\n<isDay>."
		},{
			"id":"builder-107",
			"name":"daysecondhandcolor",
			"display name":"daySecondHandColor",
			"library":"builder",
			"type":"property",
			"syntax":[
				"get the daySecondHandColor of <widget>",
				"set the daySecondHandColor of <widget> to <color>"
			],
			"display syntax":[
				"get the daySecondHandColor of <i>widget</i>"
			],
			"associations":["com.livecode.widget.clock"],
			"summary":"Determines the color of the second hand on the clock during the day",
			"description":"Use the <daySecondHandColor> property to get or set the color of the second\nhand of the clock during the day. To determine if the clock is\ndisplaying its daytime or night-time colors, use the read-only property\n<isDay>."
		},{
			"id":"builder-108",
			"name":"com.livecode.widget.clock",
			"display name":"com.livecode.widget.clock",
			"library":"builder",
			"type":"widget",
			"display syntax":[
				"com.livecode.widget.clock"
			],
			"associations":["com.livecode.widget.clock"],
			"summary":"This widget consists of an analogue clock. The clock has day and night style displays which\nare used depending on the time. The period interpreted as day by the clock is controlled by\na pair of constants kStartDay and kEndDay, currently set at 6 and 20 respectively. Thus the\nclock will display in night style between the hours of 8pm and 6am. The style of the clock,\ncan be controlled by setting the appropriate colors of the different components. For daytime\nthis is through the dayNumberColor, dayHourHandColor, dayMinuteHandColor, daySecondHandColor\nand dayFaceColor properties. There are equivalent properties for the night style. The time\ndisplayed by the clock can differ from the current system local time by setting the timeZone\nproperty, an integer which adjusts the time displayed relative to universal time (UTC).",
			"description":"This widget consists of an analogue clock. The clock has day and night style displays which\nare used depending on the time. The period interpreted as day by the clock is controlled by\na pair of constants kStartDay and kEndDay, currently set at 6 and 20 respectively. Thus the\nclock will display in night style between the hours of 8pm and 6am. The style of the clock,\ncan be controlled by setting the appropriate colors of the different components. For daytime\nthis is through the dayNumberColor, dayHourHandColor, dayMinuteHandColor, daySecondHandColor\nand dayFaceColor properties. There are equivalent properties for the night style. The time\ndisplayed by the clock can differ from the current system local time by setting the timeZone\nproperty, an integer which adjusts the time displayed relative to universal time (UTC)."
		},{
			"id":"builder-109",
			"name":"isday",
			"display name":"isDay",
			"library":"builder",
			"type":"property",
			"syntax":[
				"get the isDay of <widget>"
			],
			"display syntax":[
				"get the isDay of <i>widget</i>"
			],
			"associations":["com.livecode.widget.clock"],
			"summary":"Whether the clock's current display is in \"day\" mode.",
			"value":[{
				"name":"value",
				"type":"",
				"description":"True if the widget is in \"day\" mode; false otherwise"
			}],
			"description":"The <isDay> property indicates whether the clock widget is using its\n\"day\" mode or \"night\" mode.  Its value depends on the current time,\nand is read-only."
		},{
			"id":"builder-110",
			"name":"dayhourhandcolor",
			"display name":"dayHourHandColor",
			"library":"builder",
			"type":"property",
			"syntax":[
				"get the dayHourHandColor of <widget>",
				"set the dayHourHandColor of <widget> to <color>"
			],
			"display syntax":[
				"get the dayHourHandColor of <i>widget</i>"
			],
			"associations":["com.livecode.widget.clock"],
			"summary":"Determines the color of the hour hand on the clock during the day",
			"description":"Use the <dayHourHandColor> property to get or set the color of the hour\nhand of the clock during the day. To determine if the clock is\ndisplaying its daytime or night-time colors, use the read-only property\n<isDay>."
		},{
			"id":"builder-111",
			"name":"formattedheight",
			"display name":"formattedHeight",
			"library":"builder",
			"type":"property",
			"syntax":[
				"get the formattedHeight of <widget>"
			],
			"display syntax":[
				"get the formattedHeight of <i>widget</i>"
			],
			"associations":["com.livecode.widget.treeview"],
			"summary":"Height of the data displayed by the widget",
			"description":"Use the <formattedHeight> property to get the height of the data displayed\nby the widget in the current fold state."
		},{
			"id":"builder-112",
			"name":"autofoldstatereset",
			"display name":"autoFoldStateReset",
			"library":"builder",
			"type":"property",
			"syntax":[
				"get the autoFoldStateReset of <widget>",
				"set the autoFoldStateReset of <widget> to {true|false}"
			],
			"display syntax":[
				"get the autoFoldStateReset of <i>widget</i>"
			],
			"associations":["com.livecode.widget.treeview"],
			"summary":"Automatically reset fold state when array data is set.",
			"description":"Use the <autoFoldStateReset> property to determine if the fold state is\nreset (tree is completely folded) when the <arrayData> property is set.",
			"references":{
				"property":["arrayData"]
			}
		},{
			"id":"builder-113",
			"name":"showhover",
			"display name":"showHover",
			"library":"builder",
			"type":"property",
			"syntax":[
				"get the showHover of <widget>",
				"set the showHover of <widget> to {true|false}"
			],
			"display syntax":[
				"get the showHover of <i>widget</i>"
			],
			"associations":["com.livecode.widget.treeview"],
			"summary":"Whether the widget has a hover row displayed or not.",
			"description":"Use the <showHover> property to show or hide the hover row of the widget \nobject."
		},{
			"id":"builder-114",
			"name":"charstotrimfromkey",
			"display name":"charsToTrimFromKey",
			"library":"builder",
			"type":"property",
			"syntax":[
				"get the charsToTrimFromKey of <widget>",
				"set the charsToTrimFromKey of <widget> to <pChars>"
			],
			"display syntax":[
				"get the charsToTrimFromKey of <i>widget</i>"
			],
			"associations":["com.livecode.widget.treeview"],
			"summary":"The number of leading characters to trim from the key for display.",
			"parameters":[{
				"name":"pChars",
				"type":"",
				"refparam":"false",
				"description":"Number of leading characters to trim from the key."
			}],
			"description":"The <charsToTrimFromKey> property controls the number of leading characters that \nare removed from the keys of the <arrayData> of the widget.  This allows\na custom sort where the sort portion of the key is not displayed.\n\nWith <charsToTrimFromKey> set to 2, the following array:\n```\n\t[1 CCC]\n\t[2 BBB]\n\t[3 AAA]\n```\n\nWould display in the widget as:\n```\n[CCC]\n[BBB]\n[AAA]\n```",
			"references":{
				"property":["arrayData"]
			}
		},{
			"id":"builder-115",
			"name":"hilitechanged",
			"display name":"hiliteChanged",
			"library":"builder",
			"type":"message",
			"syntax":[
				"hiliteChanged"
			],
			"display syntax":[
				"hiliteChanged"
			],
			"associations":["com.livecode.widget.treeview"],
			"summary":"Sent when an element is hilited",
			"description":"The <hiliteChanged> message is sent to the widget's script object when a row of the \nwidget's display is clicked on, causing that row to be highlighted. Use the <hilitedElement>\nproperty to fetch the row's associated array keys.",
			"references":{
				"property":["hilitedElement"]
			}
		},{
			"id":"builder-116",
			"name":"arraystyle",
			"display name":"arrayStyle",
			"library":"builder",
			"type":"property",
			"syntax":[
				"get the arrayStyle of <widget>",
				"set the arrayStyle of <widget> to {true|false}"
			],
			"display syntax":[
				"get the arrayStyle of <i>widget</i>"
			],
			"associations":["com.livecode.widget.treeview"],
			"summary":"Whether the tree view should display its contents in array style or as a standard tree view.",
			"description":"The <arrayStyle> property controls whether the keys of the <arrayData> of the widget are displayed with\nsquare brackets around them or not.",
			"references":{
				"property":["arrayData"]
			}
		},{
			"id":"builder-117",
			"name":"actioninspect",
			"display name":"actionInspect",
			"library":"builder",
			"type":"message",
			"syntax":[
				"actionInspect <pPath>"
			],
			"display syntax":[
				"actionInspect <i>pPath</i>"
			],
			"associations":["com.livecode.widget.treeview"],
			"summary":"Sent when an the inspect icon is clicked in read only mode",
			"parameters":[{
				"name":"pPath",
				"type":"",
				"refparam":"false",
				"description":"The path to the clicked element"
			}],
			"description":"The actionInspect message is sent to the widget's script object when the inspect icon is clicked on.\nThe inspect icon appears when the value string of a particular array element contains a newline character,\nor if it is too large to fit in the space provided. The <pPath> parameter contains the path to the \nelement whose icon was clicked."
		},{
			"id":"builder-118",
			"name":"datachanged",
			"display name":"dataChanged",
			"library":"builder",
			"type":"message",
			"syntax":[
				"dataChanged"
			],
			"display syntax":[
				"dataChanged"
			],
			"associations":["com.livecode.widget.treeview"],
			"summary":"Sent when the arrayData of the widget changes",
			"description":"The <dataChanged> message is sent to the widget's script object when the underlying\n<arrayData> of the tree view changes.",
			"references":{
				"property":["arrayData"]
			}
		},{
			"id":"builder-119",
			"name":"arraydata",
			"display name":"arrayData",
			"library":"builder",
			"type":"property",
			"syntax":[
				"get the arrayData of <widget>",
				"set the arrayData of <widget> to <pArray>"
			],
			"display syntax":[
				"get the arrayData of <i>widget</i>"
			],
			"associations":["com.livecode.widget.treeview"],
			"summary":"The array being displayed by the widget",
			"parameters":[{
				"name":"pArray",
				"type":"",
				"refparam":"false",
				"description":"The array data."
			}],
			"description":"The arrayData is the data currently being displayed by the tree view widget."
		},{
			"id":"builder-120",
			"name":"hilitenewelement",
			"display name":"hiliteNewElement",
			"library":"builder",
			"type":"property",
			"syntax":[
				"get the hiliteNewElement of <widget>",
				"set the hiliteNewElement of <widget> to {true|false}"
			],
			"display syntax":[
				"get the hiliteNewElement of <i>widget</i>"
			],
			"associations":["com.livecode.widget.treeview"],
			"summary":"Automatically select new elements when created interactively.",
			"description":"If the <readOnly> property is false and the <hiliteNewElement> property is true,\nthen when new array elements are added, they will be automatically selected.",
			"references":{
				"property":["readOnly"]
			}
		},{
			"id":"builder-121",
			"name":"separatorratio",
			"display name":"separatorRatio",
			"library":"builder",
			"type":"property",
			"syntax":[
				"get the separatorRatio of <widget>",
				"set the separatorRatio of <widget> to {true|false}"
			],
			"display syntax":[
				"get the separatorRatio of <i>widget</i>"
			],
			"associations":["com.livecode.widget.treeview"],
			"summary":"Manipulates the size of the arrayData view columns.",
			"description":"Use the <separatorRatio> property to display the keys and values of the <arrayData>  \nof the tree view widget in columns separated by a movable divide.\n\nThe <separatorRatio> is the size of the first column as a ratio of the total view area.",
			"references":{
				"property":["showSeparator"]
			}
		},{
			"id":"builder-122",
			"name":"hilitedelement",
			"display name":"hilitedElement",
			"library":"builder",
			"type":"property",
			"syntax":[
				"get the hilitedElement of <widget>",
				"set the hilitedElement of <widget> to <pPath>"
			],
			"display syntax":[
				"get the hilitedElement of <i>widget</i>"
			],
			"associations":["com.livecode.widget.treeview"],
			"summary":"Select the row corresponding to <pPath>",
			"parameters":[{
				"name":"pPath",
				"type":"",
				"refparam":"false",
				"description":"A comma delimited list of array keys."
			}],
			"description":"<pPath> is a list of the keys which determine the row to be selected. For example, if tArray is the arrayData\nof the widget, to select a row corresponding to tArray[\"key1\"][\"subkey2\"][\"subsubkey5\"], simply execute\n\n``` set the hilitedElement of widget \"Array Viewer\" to \"key1,subkey2,subsubkey5\" ```\n\nSetting to an invalid path or to `empty` will unselect the currently selected row."
		},{
			"id":"builder-123",
			"name":"scrollhilitedelementintoview",
			"display name":"scrollHilitedElementIntoView",
			"library":"builder",
			"type":"property",
			"syntax":[
				"get the scrollHilitedElementIntoView of <widget>",
				"set the scrollHilitedElementIntoView of <widget> to {true|false}"
			],
			"display syntax":[
				"get the scrollHilitedElementIntoView of <i>widget</i>"
			],
			"associations":["com.livecode.widget.treeview"],
			"summary":"Automatically scroll selected row into view.",
			"description":"If the <scrollHilitedElementIntoView> property is true, then when the \n<hilitedElement> property changes the view will be scrolled such that the \nselected row is visible.",
			"references":{
				"property":["hilitedElement"]
			}
		},{
			"id":"builder-124",
			"name":"formattedheightchanged",
			"display name":"formattedHeightChanged",
			"library":"builder",
			"type":"message",
			"syntax":[
				"formattedHeightChanged"
			],
			"display syntax":[
				"formattedHeightChanged"
			],
			"associations":["com.livecode.widget.treeview"],
			"summary":"Sent when the formatted height of the displayed data changes.",
			"description":"The formattedHeightChanged message is sent to the widget's script object when\nthe formatted height of the displayed data changes.  This is useful when\nusing a mobileScroller to control the widget view."
		},{
			"id":"builder-125",
			"name":"pathdelimiter",
			"display name":"pathDelimiter",
			"library":"builder",
			"type":"property",
			"syntax":[
				"get the pathDelimiter of <widget>",
				"set the pathDelimiter of <widget> to <pType>"
			],
			"display syntax":[
				"get the pathDelimiter of <i>widget</i>"
			],
			"associations":["com.livecode.widget.treeview"],
			"summary":"Manipulates the separator between the elements of the array viewer",
			"description":"Use the <pathDelimiter> property as the separator between the elements describing\na path in the tree view widget."
		},{
			"id":"builder-126",
			"name":"textheight",
			"display name":"textHeight",
			"library":"builder",
			"type":"property",
			"syntax":[
				"get the textHeight of <widget>",
				"set the textHeight of <widget> to <pTextHeight>"
			],
			"display syntax":[
				"get the textHeight of <i>widget</i>"
			],
			"associations":["com.livecode.widget.treeview"],
			"summary":"Custom text height for the widget",
			"parameters":[{
				"name":"pTextHeight",
				"type":"",
				"refparam":"false",
				"description":"Custom text height for the widget"
			}],
			"description":"Use the <textHeight> property to set a custom text (row) height for\nthe widget.  The default value is 0 which will use the calculated height\nbased on the currently selected font and size.\n"
		},{
			"id":"builder-127",
			"name":"alternaterowbackgrounds",
			"display name":"alternateRowBackgrounds",
			"library":"builder",
			"type":"property",
			"syntax":[
				"get the alternateRowBackgrounds of <widget>",
				"set the alternateRowBackgrounds of <widget> to {true|false}"
			],
			"display syntax":[
				"get the alternateRowBackgrounds of <i>widget</i>"
			],
			"associations":["com.livecode.widget.treeview"],
			"summary":"Whether the alternate rows of the widget have different backgrounds or not.",
			"description":"Use the alternateRowBackgrounds property if you want to more clearly distinguish the rows displayed by the widget."
		},{
			"id":"builder-128",
			"name":"vscrollbar",
			"display name":"vScrollbar",
			"library":"builder",
			"type":"property",
			"syntax":[
				"set the vScrollbar of <widget> to <pEnabled>\nget the vScrollbar of <widget>"
			],
			"display syntax":[
				"set the vScrollbar of <i>widget</i> to <i>pEnabled</i>"
			],
			"associations":["com.livecode.widget.treeview"],
			"summary":"Controls the visibility of the browser's vertical scrollbar.",
			"value":[{
				"name":"value",
				"type":"boolean",
				"description":"`true` if the vertical scrollbar should be enabled and displayed;\n`false` otherwise."
			}],
			"description":"Use the <vScrollbar> property to control the visibility of the widget's\nvertical scrollbar"
		},{
			"id":"builder-129",
			"name":"sortorder",
			"display name":"sortOrder",
			"library":"builder",
			"type":"property",
			"syntax":[
				"get the sortOrder of <widget>",
				"set the sortOrder of <widget> to <pOrder>"
			],
			"display syntax":[
				"get the sortOrder of <i>widget</i>"
			],
			"associations":["com.livecode.widget.treeview"],
			"summary":"Manipulates the order in which elements of the tree view are displayed, with respect to the current <sortType>.",
			"parameters":[{
				"name":"pOrder",
				"type":"",
				"refparam":"false",
				"description":"The order in which to display elements of the tree view.\n- \"ascending\": Display from first to last in the order. This is the default\n- \"descending\": Display from last to first in the order."
			}],
			"description":"Use the <sortOrder> property to display the elements of the tree view in ascending or descending order of the\nkeys of its <arrayData>, given the current <sortType>.",
			"references":{
				"property":["arrayData","sortType"]
			}
		},{
			"id":"builder-130",
			"name":"hilitedelementisfolded",
			"display name":"hilitedElementIsFolded",
			"library":"builder",
			"type":"property",
			"syntax":[
				"get the hilitedElementIsFolded of <widget>",
				"set the hilitedElementIsFolded of <widget> to {true|false}"
			],
			"display syntax":[
				"get the hilitedElementIsFolded of <i>widget</i>"
			],
			"associations":["com.livecode.widget.treeview"],
			"summary":"Determine if the selected element is folded",
			"description":"Value is true if the selected element is folded.  False is returned in\nall other cases including when nothing is selected and when a leaf node is\nselected.  When setting the fold state, attempts to set the value for a leaf \nnode will have no effect.  Setting the fold state when no element is selected \nhas no effect."
		},{
			"id":"builder-131",
			"name":"com.livecode.widget.treeview",
			"display name":"com.livecode.widget.treeview",
			"library":"builder",
			"type":"widget",
			"display syntax":[
				"com.livecode.widget.treeview"
			],
			"associations":["com.livecode.widget.treeview"],
			"summary":"A widget to display array data in a tree view",
			"description":"A widget to display array data in a tree view"
		},{
			"id":"builder-132",
			"name":"iconheight",
			"display name":"iconHeight",
			"library":"builder",
			"type":"property",
			"syntax":[
				"get the iconHeight of <widget>",
				"set the iconHeight of <widget> to <pIconHeight>"
			],
			"display syntax":[
				"get the iconHeight of <i>widget</i>"
			],
			"associations":["com.livecode.widget.treeview"],
			"summary":"Custom icon height for the widget",
			"parameters":[{
				"name":"pIconHeight",
				"type":"",
				"refparam":"false",
				"description":"Custom icon height for the widget"
			}],
			"description":"Use the <iconHeight> property to set a custom icon size for\nthe widget.  The default value is 10."
		},{
			"id":"builder-133",
			"name":"foldstate",
			"display name":"foldState",
			"library":"builder",
			"type":"property",
			"syntax":[
				"get the foldState of <widget>",
				"set the foldState of <widget> to <pFoldState>"
			],
			"display syntax":[
				"get the foldState of <i>widget</i>"
			],
			"associations":["com.livecode.widget.treeview"],
			"summary":"The fold state of the array being displayed by the widget",
			"parameters":[{
				"name":"pFoldState",
				"type":"",
				"refparam":"false",
				"description":"The fold state data.  See description for details."
			}],
			"description":"The foldState is the fold state currently being displayed by the tree view widget.\n\nThe fold state array only contains elements of the data array where the\nvalue is a subarray.  The value for each `folded` key must be a boolean.\nOnly the unfolded keys need to be specified.\n\n```\n\t[key1]\n\t\t[\"folded\"]\n\t\t[\"array\"]\n\t\t\t[subkey1]\n\t\t\t\t[\"folded\"]\n\t[key2]\n\t\t[\"folded\"]\n```\n\nSetting the foldState to empty will fold all keys."
		},{
			"id":"builder-134",
			"name":"readonly",
			"display name":"readOnly",
			"library":"builder",
			"type":"property",
			"syntax":[
				"get the readOnly of <widget>",
				"set the readOnly of <widget> to {true|false}"
			],
			"display syntax":[
				"get the readOnly of <i>widget</i>"
			],
			"associations":["com.livecode.widget.treeview"],
			"summary":"Whether the options to modify elements of the underlying array are present or not.",
			"description":"The <readOnly> property controls whether the widget presents the option to add elements to arrays or not.\nIf false, the first row of the widget is always \"Add new element\", and when rows are hovered over, icons\nappear at the right to enable the removal of that element, or the addition of a new subelement."
		},{
			"id":"builder-135",
			"name":"showborder",
			"display name":"showBorder",
			"library":"builder",
			"type":"property",
			"syntax":[
				"get the showBorder of <widget>",
				"set the showBorder of <widget> to {true|false}"
			],
			"display syntax":[
				"get the showBorder of <i>widget</i>"
			],
			"associations":["com.livecode.widget.treeview"],
			"summary":"Whether the widget has a border or not.",
			"description":"Use the <showBorder> property to show or hide the bounds of the widget \nobject."
		},{
			"id":"builder-136",
			"name":"showseparator",
			"display name":"showSeparator",
			"library":"builder",
			"type":"property",
			"syntax":[
				"get the showSeparator of <widget>",
				"set the showSeparator of <widget> to {true|false}"
			],
			"display syntax":[
				"get the showSeparator of <i>widget</i>"
			],
			"associations":["com.livecode.widget.treeview"],
			"summary":"Whether the separator bar between keys and values is showing or not",
			"description":"Use the <showSeparator> property to display the keys and values of the <arrayData>  \nof the tree view widget in columns separated by a movable divide.",
			"references":{
				"property":["separatorRatio"]
			}
		},{
			"id":"builder-137",
			"name":"hilitedelementfoldstate",
			"display name":"hilitedElementFoldState",
			"library":"builder",
			"type":"property",
			"syntax":[
				"get the hilitedElementFoldState of <widget>",
				"set the hilitedElementFoldState of <widget> to <pFoldState>"
			],
			"display syntax":[
				"get the hilitedElementFoldState of <i>widget</i>"
			],
			"associations":["com.livecode.widget.treeview"],
			"summary":"Get/set the fold state of the selected element",
			"parameters":[{
				"name":"pFoldState",
				"type":"",
				"refparam":"false",
				"description":"The fold state of the selected element.\n- \"folded\": Sub-array for the selected element is hidden.\n- \"unfolded\": Sub-array for the selected element is visible.\n- \"leaf\": Selected element is a leaf node.  This value may not be set."
			}],
			"description":"<pFoldState> is the fold state of the selected element.  When setting\nthe fold state, attempts to set the value for a leaf node will have no\neffect.  Setting the fold state when no element is selected has no effect."
		},{
			"id":"builder-138",
			"name":"showvalues",
			"display name":"showValues",
			"library":"builder",
			"type":"property",
			"syntax":[
				"get the showValues of <widget>",
				"set the showValues of <widget> to {true|false}"
			],
			"display syntax":[
				"get the showValues of <i>widget</i>"
			],
			"associations":["com.livecode.widget.treeview"],
			"summary":"Whether the values are displayed or not",
			"description":"Use the <showValues> property to display or hide the values of the <arrayData>  \nof the tree view widget.  This setting will be useful when using the\nwidget as a menu for navigation purposes.\n\nHiding values effectively hides the separator as well.",
			"references":{
				"property":["showSeparator"]
			}
		},{
			"id":"builder-139",
			"name":"actiondoubleclick",
			"display name":"actionDoubleClick",
			"library":"builder",
			"type":"message",
			"syntax":[
				"actionDoubleClick <pPath>"
			],
			"display syntax":[
				"actionDoubleClick <i>pPath</i>"
			],
			"associations":["com.livecode.widget.treeview"],
			"summary":"Sent when a leaf node of the tree view is double-clicked.",
			"parameters":[{
				"name":"pPath",
				"type":"",
				"refparam":"false",
				"description":"The path to the clicked element"
			}],
			"description":"The actionDoubleClick message is sent to the widget's script object when a row of the widget\nis double-clicked. The <pPath> parameter contains the path to the element whose row was clicked."
		},{
			"id":"builder-140",
			"name":"sorttype",
			"display name":"sortType",
			"library":"builder",
			"type":"property",
			"syntax":[
				"get the sortType of <widget>",
				"set the sortType of <widget> to <pType>"
			],
			"display syntax":[
				"get the sortType of <i>widget</i>"
			],
			"associations":["com.livecode.widget.treeview"],
			"summary":"Manipulates the type of ordering in which elements of the tree view are displayed.",
			"parameters":[{
				"name":"pType",
				"type":"",
				"refparam":"false",
				"description":"The type of ordering to use in displaying elements of the tree view.\n- \"text\": Display in alphabetical order of the keys\n- \"numeric\": Display in numeric order of the keys. This is the default"
			}],
			"description":"Use the <sortType> property to use text or numeric comparison when ordering the keys of the <arrayData>\nof the tree view widget.",
			"references":{
				"property":["sortOrder"]
			}
		},{
			"id":"builder-141",
			"name":"scroll",
			"display name":"scroll",
			"library":"builder",
			"type":"property",
			"syntax":[
				"get the vScroll of <widget>",
				"get the scroll of <widget>",
				"set the scroll of <widget> to <pScroll>"
			],
			"display syntax":[
				"get the vScroll of <i>widget</i>"
			],
			"associations":["com.livecode.widget.treeview"],
			"summary":"Vertical scroll position of the widget",
			"parameters":[{
				"name":"pScroll",
				"type":"",
				"refparam":"false",
				"description":"Vertical scroll position of the widget"
			}],
			"description":"Use the <scroll> property to get or set the scroll position of\nthe widget."
		},{
			"id":"builder-142",
			"name":"com.livecode.typeconvert",
			"display name":"com.livecode.typeconvert",
			"library":"builder",
			"type":"module",
			"display syntax":[
				"com.livecode.typeconvert"
			],
			"associations":["com.livecode.typeconvert"],
			"summary":"This library consists of the operations for performing complex type conversion in LiveCode Builder.",
			"description":"This library consists of the operations for performing complex type conversion in LiveCode Builder."
		},{
			"id":"builder-143",
			"name":"stringsplitby",
			"display name":"StringSplitBy",
			"library":"builder",
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
			"id":"builder-144",
			"name":"combinelistwith",
			"display name":"CombineListWith",
			"library":"builder",
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
			"id":"builder-145",
			"name":"highlight",
			"display name":"highlight",
			"library":"builder",
			"type":"property",
			"syntax":[
				"get the highlight of <widget>",
				"set the highlight of <widget> to {true | false}"
			],
			"display syntax":[
				"get the highlight of <i>widget</i>"
			],
			"associations":["com.livecode.widget.switchbutton"],
			"summary":"Whether the switch is on or off",
			"value":[{
				"name":"value",
				"type":"",
				"description":"`true` if the switch is in the on position; `false` otherwise."
			}],
			"description":"Use this property to determine whether the switch button displays as on."
		},{
			"id":"builder-146",
			"name":"backcolor",
			"display name":"backColor",
			"library":"builder",
			"type":"property",
			"syntax":[
				"get the backColor of <widget>",
				"set the backColor of <widget> to <pColor>"
			],
			"display syntax":[
				"get the backColor of <i>widget</i>"
			],
			"associations":["com.livecode.widget.switchbutton"],
			"summary":"Controls the background color of the switch button",
			"description":"Use the <backColor> property to control the off-position fill color of the\nswitch button."
		},{
			"id":"builder-147",
			"name":"hilitecolor",
			"display name":"hiliteColor",
			"library":"builder",
			"type":"property",
			"syntax":[
				"get the hiliteColor of <widget>",
				"set the hiliteColor of <widget> to <pColor>"
			],
			"display syntax":[
				"get the hiliteColor of <i>widget</i>"
			],
			"associations":["com.livecode.widget.switchbutton"],
			"summary":"Controls the color of the switch button when it is in the on position",
			"description":"Use the <hiliteColor> property to control the on-position fill color of the\nswitch button."
		},{
			"id":"builder-148",
			"name":"theme",
			"display name":"theme",
			"library":"builder",
			"type":"property",
			"syntax":[
				"get the theme of <widget>",
				"set the theme of <widget> to <pWidgetTheme>"
			],
			"display syntax":[
				"get the theme of <i>widget</i>"
			],
			"associations":["com.livecode.widget.switchbutton"],
			"summary":"Specifies the theme to use when drawing the switch button.",
			"value":[{
				"name":"value",
				"type":"",
				"description":"The <theme> of the switch button is a name identifying the\nstyle to use when drawing it."
			}],
			"description":"Use the <theme> property to control the general appearance of the switch\nbutton.  The currently-supported values are \"native\", \"iOS\" and \"Android\".\n\n**Note**: The value of the <theme> property is not saved by the switch button.\nSet the <theme> property to preview the way the switch button will appear when\nused on an Android or iOS device."
		},{
			"id":"builder-149",
			"name":"hilitechanged",
			"display name":"hiliteChanged",
			"library":"builder",
			"type":"message",
			"syntax":[
				"hiliteChanged"
			],
			"display syntax":[
				"hiliteChanged"
			],
			"associations":["com.livecode.widget.switchbutton"],
			"summary":"Sent when the switch is changed to either the on or off position",
			"examples":[{
				"script":"on hiliteChanged\n\tset the visible of group 1 to the highlight of me\nend hiliteChanged"
			}],
			"description":"Handle the hiliteChanged message in the widget's object script to respond to\nthe user switching the button on or off."
		},{
			"id":"builder-150",
			"name":"bordercolor",
			"display name":"borderColor",
			"library":"builder",
			"type":"property",
			"syntax":[
				"get the borderColor of <widget>",
				"set the borderColor of <widget> to <pColor>"
			],
			"display syntax":[
				"get the borderColor of <i>widget</i>"
			],
			"associations":["com.livecode.widget.switchbutton"],
			"summary":"Controls the color of the switch button when it is in the on position",
			"description":"Use the <borderColor> property to control the on-position fill color of the\nswitch button."
		},{
			"id":"builder-151",
			"name":"showborder",
			"display name":"showBorder",
			"library":"builder",
			"type":"property",
			"syntax":[
				"get the showBorder of <widget>",
				"set the showBorder of <widget> to {true|false}"
			],
			"display syntax":[
				"get the showBorder of <i>widget</i>"
			],
			"associations":["com.livecode.widget.switchbutton"],
			"summary":"Whether the widget has a border or not.",
			"description":"Use the <showBorder> property to control whether the switch button has a border\naround it or not\n"
		},{
			"id":"builder-152",
			"name":"com.livecode.widget.switchbutton",
			"display name":"com.livecode.widget.switchbutton",
			"library":"builder",
			"type":"widget",
			"display syntax":[
				"com.livecode.widget.switchbutton"
			],
			"associations":["com.livecode.widget.switchbutton"],
			"summary":"This widget is a switch button, consisting of two mutually exclusive choices or states.",
			"description":"This widget is a switch button, consisting of two mutually exclusive choices or states."
		},{
			"id":"builder-153",
			"name":"browserframedocumentloadfailed",
			"display name":"browserFrameDocumentLoadFailed",
			"library":"builder",
			"type":"message",
			"syntax":[
				"browserFrameDocumentLoadFailed <pUrl>, <pError>"
			],
			"display syntax":[
				"browserFrameDocumentLoadFailed <i>pUrl</i>, <i>pError</i>"
			],
			"associations":["com.livecode.widget.browser"],
			"summary":"Sent when a document has failed to load in a frame of the\nbrowser.",
			"parameters":[{
				"name":"pUrl",
				"type":"string",
				"refparam":"false",
				"description":"The URL of the document."
			},{
				"name":"pError",
				"type":"string",
				"refparam":"false",
				"description":"An error message describing the reason for the failure."
			}],
			"description":"The <browserFrameDocumentLoadFailed> message is sent to the widget's \nscript object when a new document has failed to load in a frame of the \nbrowser. The <pUrl> parameter contains the URL of the document, and the \n<pError> parameter gives the reason for the failure."
		},{
			"id":"builder-154",
			"name":"browsernavigatebegin",
			"display name":"browserNavigateBegin",
			"library":"builder",
			"type":"message",
			"syntax":[
				"browserNavigateBegin <pUrl>"
			],
			"display syntax":[
				"browserNavigateBegin <i>pUrl</i>"
			],
			"associations":["com.livecode.widget.browser"],
			"summary":"Sent when the browser begins navigation to a new page.",
			"parameters":[{
				"name":"pUrl",
				"type":"string",
				"refparam":"false",
				"description":"The URL of the new page."
			}],
			"description":"The <browserNavigateBegin> message is sent to the widget's script object \nwhen the browser begins navigation to a new page. This can be triggered \nby launching a URL in the browser, or clicking a link within the \nbrowser. The <pUrl> parameter contains the URL of the new page."
		},{
			"id":"builder-155",
			"name":"browserframedocumentloadbegin",
			"display name":"browserFrameDocumentLoadBegin",
			"library":"builder",
			"type":"message",
			"syntax":[
				"browserFrameDocumentLoadBegin <pUrl>"
			],
			"display syntax":[
				"browserFrameDocumentLoadBegin <i>pUrl</i>"
			],
			"associations":["com.livecode.widget.browser"],
			"summary":"Sent when a document begins loading in a frame of the browser.",
			"parameters":[{
				"name":"pUrl",
				"type":"string",
				"refparam":"false",
				"description":"The URL of the loading document."
			}],
			"description":"The <browserFrameDocumentLoadBegin> message is sent to the widget's \nscript object when a new document begins to load in a frame of the \nbrowser. This will happen whenever the browser navigates to a new page \nwith multiple frames. The <pUrl> parameter contains the URL of the \nloading document."
		},{
			"id":"builder-156",
			"name":"allowuserinteraction",
			"display name":"allowUserInteraction",
			"library":"builder",
			"type":"property",
			"syntax":[
				"set the allowUserInteraction of <widget> to <allowInteraction>\nget the allowUserInteraction of <widget>"
			],
			"display syntax":[
				"set the allowUserInteraction of <i>widget</i> to <i>allowInteraction</i>"
			],
			"associations":["com.livecode.widget.browser"],
			"summary":"Controls whether the browser responds to user interaction.",
			"value":[{
				"name":"value",
				"type":"boolean",
				"description":"`true` if the browser should respond to user interaction;\n`false` otherwise."
			}],
			"description":"Use the <allowUserInteraction> property to control if the browser should respond\nto user interaction."
		},{
			"id":"builder-157",
			"name":"browserdocumentloadbegin",
			"display name":"browserDocumentLoadBegin",
			"library":"builder",
			"type":"message",
			"syntax":[
				"browserDocumentLoadBegin <pUrl>"
			],
			"display syntax":[
				"browserDocumentLoadBegin <i>pUrl</i>"
			],
			"associations":["com.livecode.widget.browser"],
			"summary":"Sent when a document begins loading in the browser.",
			"parameters":[{
				"name":"pUrl",
				"type":"string",
				"refparam":"false",
				"description":"The URL of the loading document."
			}],
			"description":"The <browserDocumentLoadBegin> message is sent to the widget's script \nobject when a new document begins to load in the browser. This will \nhappen whenever the browser navigates to a new page. The <pUrl> \nparameter contains the URL of the loading document."
		},{
			"id":"builder-158",
			"name":"com.livecode.widget.browser",
			"display name":"com.livecode.widget.browser",
			"library":"builder",
			"type":"widget",
			"display syntax":[
				"com.livecode.widget.browser"
			],
			"associations":["com.livecode.widget.browser"],
			"summary":"This widget displays web content within a native web browser view.\n\nThe browser widget can display HTML content generated in LiveCode, or\nfetch content over the Internet.  It supports JavaScript and allows\nfor interaction between LiveCode scripts and JavaScript code.\n\nThe [browser SVG icon](https://www.iconfinder.com/icons/309064/browser_globe_international_internet_web_world_icon)\nis copyright ¬© Ivan Boyko, and is licensed under the terms of the\n[Creative Commons Attribution 3.0 Unported License](https://creativecommons.org/licenses/by/3.0/).",
			"description":"This widget displays web content within a native web browser view.\n\nThe browser widget can display HTML content generated in LiveCode, or\nfetch content over the Internet.  It supports JavaScript and allows\nfor interaction between LiveCode scripts and JavaScript code.\n\nThe [browser SVG icon](https://www.iconfinder.com/icons/309064/browser_globe_international_internet_web_world_icon)\nis copyright ¬© Ivan Boyko, and is licensed under the terms of the\n[Creative Commons Attribution 3.0 Unported License](https://creativecommons.org/licenses/by/3.0/)."
		},{
			"id":"builder-159",
			"name":"browserdocumentloadfailed",
			"display name":"browserDocumentLoadFailed",
			"library":"builder",
			"type":"message",
			"syntax":[
				"browserDocumentLoadFailed <pUrl>, <pError>"
			],
			"display syntax":[
				"browserDocumentLoadFailed <i>pUrl</i>, <i>pError</i>"
			],
			"associations":["com.livecode.widget.browser"],
			"summary":"Sent when a document has failed to load in the browser.",
			"parameters":[{
				"name":"pUrl",
				"type":"string",
				"refparam":"false",
				"description":"The URL of the document."
			},{
				"name":"pError",
				"type":"string",
				"refparam":"false",
				"description":"An error message describing the reason for the failure."
			}],
			"description":"The <browserDocumentLoadFailed> message is sent to the widget's script \nobject when a new document has failed to load in the browser. The <pUrl> \nparameter contains the URL of the document, and the <pError> parameter \ngives the reason for the failure."
		},{
			"id":"builder-160",
			"name":"browserdocumentloadcomplete",
			"display name":"browserDocumentLoadComplete",
			"library":"builder",
			"type":"message",
			"syntax":[
				"browserDocumentLoadComplete <pUrl>"
			],
			"display syntax":[
				"browserDocumentLoadComplete <i>pUrl</i>"
			],
			"associations":["com.livecode.widget.browser"],
			"summary":"Sent when a document has completed loading in the browser.",
			"parameters":[{
				"name":"pUrl",
				"type":"string",
				"refparam":"false",
				"description":"The URL of the loaded document."
			}],
			"description":"The <browserDocumentLoadComplete> message is sent to the widget's script \nobject when a new document has completed loading in the browser. The \n<pUrl> parameter contains the URL of the loaded document."
		},{
			"id":"builder-161",
			"name":"hscrollbar",
			"display name":"hScrollbar",
			"library":"builder",
			"type":"property",
			"syntax":[
				"set the hScrollbar of <widget> to <pEnabled>\nget the hScrollbar of <widget>"
			],
			"display syntax":[
				"set the hScrollbar of <i>widget</i> to <i>pEnabled</i>"
			],
			"associations":["com.livecode.widget.browser"],
			"summary":"Controls the visibility of the browser's horizontal scrollbar.",
			"value":[{
				"name":"value",
				"type":"boolean",
				"description":"`true` if the horizontal scrollbar should be enabled and displayed;\n`false` otherwise."
			}],
			"description":"Use the <hScrollbar> property to control the visibility of the browser's\nhorizontal scrollbar",
			"references":{
				"property":["vScrollbar"]
			}
		},{
			"id":"builder-162",
			"name":"issecure",
			"display name":"isSecure",
			"library":"builder",
			"type":"property",
			"syntax":[
				"get the isSecure of <widget>"
			],
			"display syntax":[
				"get the isSecure of <i>widget</i>"
			],
			"associations":["com.livecode.widget.browser"],
			"summary":"Indicates if all resources in the current document have been loaded\nthrough securely encrypted connections.",
			"value":[{
				"name":"value",
				"type":"boolean",
				"description":"`true` if all resources in the current document have been loaded through\nsecurely encrypted connections;\n`false` otherwise."
			}],
			"description":"Use the <isSecure> property to determine if all resources in the current\ndocument have been loaded through securely encrypted connections. If the current\ndocument is still loading, this will return false\n"
		},{
			"id":"builder-163",
			"name":"browsernavigatefailed",
			"display name":"browserNavigateFailed",
			"library":"builder",
			"type":"message",
			"syntax":[
				"browserNavigateFailed <pUrl>, <pError>"
			],
			"display syntax":[
				"browserNavigateFailed <i>pUrl</i>, <i>pError</i>"
			],
			"associations":["com.livecode.widget.browser"],
			"summary":"Sent when the browser has failed to navigate to a new page.",
			"parameters":[{
				"name":"pUrl",
				"type":"string",
				"refparam":"false",
				"description":"The URL of the document."
			},{
				"name":"pError",
				"type":"string",
				"refparam":"false",
				"description":"An error message describing the reason for the failure."
			}],
			"description":"The <browserNavigateFailed> message is sent to the widget's script \nobject when the browser has failed to navigate to a new page. The <pUrl> \nparameter contains the URL of the new page, and the <pError> parameter \ngives the reason for the failure."
		},{
			"id":"builder-164",
			"name":"browsernavigatecomplete",
			"display name":"browserNavigateComplete",
			"library":"builder",
			"type":"message",
			"syntax":[
				"browserNavigateComplete <pUrl>"
			],
			"display syntax":[
				"browserNavigateComplete <i>pUrl</i>"
			],
			"associations":["com.livecode.widget.browser"],
			"summary":"Sent when the browser successfully navigates to a new page.",
			"parameters":[{
				"name":"pUrl",
				"type":"string",
				"refparam":"false",
				"description":"The URL of the new page."
			}],
			"description":"The <browserNavigateComplete> message is sent to the widget's script \nobject when the browser successfully navigates to a new page. The <pUrl> \nparameter contains the URL of the new page."
		},{
			"id":"builder-165",
			"name":"useragent",
			"display name":"userAgent",
			"library":"builder",
			"type":"property",
			"syntax":[
				"set the userAgent of <widget> to <pUserAgent>\nget the userAgent of <widget>"
			],
			"display syntax":[
				"set the userAgent of <i>widget</i> to <i>pUserAgent</i>"
			],
			"associations":["com.livecode.widget.browser"],
			"summary":"The identifier sent by the browser when fetching content from remote URLs.",
			"OS":["mac","windows","linux","android","ios"],
			"examples":[{
				"script":"-- Set a custom User-Agent header. The remote web server may\n-- be configured to deliver custom content for browsers using\n-- this User-Agent.\nset the userAgent of widget \"myBrowser\" to \"myAppEmbeddedBrowser\"\nlaunch url \"https://myexampleserver.com/content.html\" in widget \"myBrowser\""
			}],
			"value":[{
				"name":"value",
				"type":"string",
				"description":"A suitable HTTP user agent string."
			}],
			"description":"The <userAgent> is the identifier sent by the browser when fetching\ncontent from remote HTTP servers.\n\nThe <userAgent> must conform to the requirements for the `User-Agent`\nheader described in the HTTP specification.  See [RFC 2616, section\n14.43](https://tools.ietf.org/html/rfc2616#section-14.43)."
		},{
			"id":"builder-166",
			"name":"javascripthandlers",
			"display name":"javascriptHandlers",
			"library":"builder",
			"type":"property",
			"syntax":[
				"set the javascriptHandlers of <widget> to <pHanderList>\nget the javascriptHandlers of <widget>"
			],
			"display syntax":[
				"set the javascriptHandlers of <i>widget</i> to <i>pHanderList</i>"
			],
			"associations":["com.livecode.widget.browser"],
			"summary":"A list of LiveCode handlers that are made available to JavaScript calls within the browser.",
			"examples":[{
				"script":"-- Define a handler to respond to javascript calls.\non myJSHandler pMessage, pValue\n\t-- Do appropriate actions here.\n\t-- ...\nend myJSHandler\n\n-- Set up the browser javascript handler list\n-- This code goes in a suitable setup handler\nset the javascriptHandlers to \"myJSHandler\" & return & \"myOtherJSHandler\"\n\n// Calling the handler from JavaScript within the browser\nliveCode.myJSHandler(\"myMessage\", 12345);"
			}],
			"value":[{
				"name":"value",
				"type":"string",
				"description":"A return-separated list of handler names."
			}],
			"description":"The <javascriptHandlers> is a list of LiveCode handlers that are made\navailable to JavaScript calls within the browser. The handlers will\nappear as methods attached to a global `liveCode` object. You can call\nthese methods as you would any other JavaScript function and pass\nwhatever parameters you require.\n\n>*Warning:* Setting the <javascriptHandlers> property gives JavaScript\nrunning within the Web browser permission to execute parts of your\napplication through the handlers you choose to expose. If using this\nfeature, make sure that you have complete control over the webpages\nwhich you load into the browser widget, and consider using HTTPS to\nensure that third-parties cannot inject malicious code into them."
		},{
			"id":"builder-167",
			"name":"vscrollbar",
			"display name":"vScrollbar",
			"library":"builder",
			"type":"property",
			"syntax":[
				"set the vScrollbar of <widget> to <pEnabled>\nget the vScrollbar of <widget>"
			],
			"display syntax":[
				"set the vScrollbar of <i>widget</i> to <i>pEnabled</i>"
			],
			"associations":["com.livecode.widget.browser"],
			"summary":"Controls the visibility of the browser's vertical scrollbar.",
			"value":[{
				"name":"value",
				"type":"boolean",
				"description":"`true` if the vertical scrollbar should be enabled and displayed;\n`false` otherwise."
			}],
			"description":"Use the <vScrollbar> property to control the visibility of the browser's\nvertical scrollbar",
			"references":{
				"property":["hScrollbar"]
			}
		},{
			"id":"builder-168",
			"name":"url",
			"display name":"URL",
			"library":"builder",
			"type":"property",
			"syntax":[
				"set the URL of <widget> to <pUrl>\nget the URL of <widget>"
			],
			"display syntax":[
				"set the URL of <i>widget</i> to <i>pUrl</i>"
			],
			"associations":["com.livecode.widget.browser"],
			"summary":"The URL displayed by the browser.",
			"parameters":[{
				"name":"pUrl",
				"type":"string",
				"refparam":"false",
				"description":"A string specifying a URL."
			}],
			"examples":[{
				"script":"-- Navigate to livecode.com by setting the url property,\n-- keeping a copy of the previous URL\nlocal tOldUrl\nput the URL of widget \"myBrowser\" into tOldUrl\nset the URL of widget \"myBrowser\" to \"https://livecode.com\""
			}],
			"description":"The <URL> is the URL of the content be displayed in the browser.\n\n>*Note:* The <URL> must be a standards-compliant URL.  In particular, \n> `file:` URLs must be of the form `file://<absolute path>`, and the \n> path should be URL-encoded.  \n> See [RFC 1738, section 2.2](https://tools.ietf.org/html/rfc1738#section-2.2).\n\n>*Note:* The <URL> reflects the currently displaying page in the \n> browser, and will change when navigating to another page. Setting the \n> htmlText will result in the <URL> being empty.\n\n>*Note:* Setting the <URL> won't necessarily cause resources to be\n> reloaded unless URLs of the resources explicitly change. However, \n> you can force the browser widget to reload a page using \n> `do \"location.reload()\" in widget \"browser\"` after setting the url.\n\n>*Note:* Setting the <URL> to empty will clear the currently loaded \n> page, resulting in a blank page being displayed and the <URL> and \n> <htmlText> of the widget being empty.",
			"references":{
				"property":["htmlText"]
			}
		},{
			"id":"builder-169",
			"name":"browserframedocumentloadcomplete",
			"display name":"browserFrameDocumentLoadComplete",
			"library":"builder",
			"type":"message",
			"syntax":[
				"browserFrameDocumentLoadComplete <pUrl>"
			],
			"display syntax":[
				"browserFrameDocumentLoadComplete <i>pUrl</i>"
			],
			"associations":["com.livecode.widget.browser"],
			"summary":"Sent when a document has completed loading in a frame of the browser.",
			"parameters":[{
				"name":"pUrl",
				"type":"string",
				"refparam":"false",
				"description":"The URL of the loaded document."
			}],
			"description":"The <browserFrameDocumentLoadComplete> message is sent to the widget's \nscript object when a new document has completed loading in a frame of \nthe browser. The <pUrl> parameter contains the URL of the loaded \ndocument."
		},{
			"id":"builder-170",
			"name":"browserprogresschanged",
			"display name":"browserProgressChanged",
			"library":"builder",
			"type":"message",
			"syntax":[
				"browserProgressChanged <pUrl>, <pProgress>"
			],
			"display syntax":[
				"browserProgressChanged <i>pUrl</i>, <i>pProgress</i>"
			],
			"associations":["com.livecode.widget.browser"],
			"summary":"Sent when the load progress of the current document changes.",
			"parameters":[{
				"name":"pUrl",
				"type":"string",
				"refparam":"false",
				"description":"The URL of the loading document."
			},{
				"name":"pProgress",
				"type":"number",
				"refparam":"false",
				"description":"The percentage of the document loaded."
			}],
			"description":"The <browserProgressChanged> message is sent to the widget's script\nobject when a the loading progress of the current document changes. The <pUrl>\nparameter contains the URL of the loading document. The <pProgress> parameter\ncontains the percentage (between 0 and 100) of the document loaded."
		},{
			"id":"builder-171",
			"name":"htmltext",
			"display name":"htmlText",
			"library":"builder",
			"type":"property",
			"syntax":[
				"set the htmlText of <widget> to <pHtmlText>\nget the htmlText of <widget>"
			],
			"display syntax":[
				"set the htmlText of <i>widget</i> to <i>pHtmlText</i>"
			],
			"associations":["com.livecode.widget.browser"],
			"summary":"The HTML text of the content displayed by the browser.",
			"parameters":[{
				"name":"pHtmlText",
				"type":"string",
				"refparam":"false",
				"description":"A string containing HTML data to be displayed by the\nbrowser."
			}],
			"examples":[{
				"script":"-- Render a web page in the browser by specifying custom HTML\n-- content\nlocal tHTML\nput \"<html><head><title>My Page Title</title></head>\" & \\\n\t  \"<body>My Page Contents</body></html>\" into tHTML\nset the htmlText of widget \"myBrowser\" to tHTML"
			}],
			"description":"The <htmlText> is the HTML representation of the content displayed in \nthe browser.\n\n*Note:* When the <htmlText> has been set, the <URL> property will be\nempty. When the <URL> property is not empty, the <htmlText> will\ncontain the source of the current URL displayed in the browser.",
			"references":{
				"property":["URL"]
			}
		},{
			"id":"builder-172",
			"name":"browserunhandledloadrequest",
			"display name":"browserUnhandledLoadRequest",
			"library":"builder",
			"type":"message",
			"syntax":[
				"browserUnhandledLoadRequest <pUrl>"
			],
			"display syntax":[
				"browserUnhandledLoadRequest <i>pUrl</i>"
			],
			"associations":["com.livecode.widget.browser"],
			"summary":"Sent when the browser is unable to handle a load request.",
			"parameters":[{
				"name":"pUrl",
				"type":"string",
				"refparam":"false",
				"description":"The URL of the request."
			}],
			"description":"The <browserUnhandledLoadRequest> message is sent to the widget's script \nobject when the browser is unable to load a URL, typically due to an \nunrecognised URL scheme. The <pUrl> parameter contains the URL of the \nunhandled request."
		},{
			"id":"builder-173",
			"name":"androidpauseaudioplayinginbackground",
			"display name":"androidPauseAudioPlayingInBackground",
			"library":"builder",
			"type":"handler",
			"syntax":[
				"androidPauseAudioPlayingInBackground()"
			],
			"display syntax":[
				"androidPauseAudioPlayingInBackground()"
			],
			"associations":["com.livecode.library.androidbgaudio"],
			"summary":"Pause the currently playing background audio",
			"OS":["android"],
			"description":"Use the <androidPauseAudioPlayingInBackground> handler to pause the\naudio playback in the background started by the last call to \n<androidStartAudioPlayingInBackground>. It can be resumed by calling\n<androidResumeAudioPlayingInBackground>.",
			"references":{
				"handler":["androidStartAudioPlayingInBackground","androidResumeAudioPlayingInBackground"]
			}
		},{
			"id":"builder-174",
			"name":"com.livecode.library.androidbgaudio",
			"display name":"com.livecode.library.androidbgaudio",
			"library":"builder",
			"type":"library",
			"display syntax":[
				"com.livecode.library.androidbgaudio"
			],
			"associations":["com.livecode.library.androidbgaudio"],
			"summary":"This library provides an API for playing background audio on Android",
			"OS":["android"],
			"description":"Use this library to start and control a background audio service that\nwill continue playing when the current application is suspended."
		},{
			"id":"builder-175",
			"name":"androidresumeaudioplayinginbackground",
			"display name":"androidResumeAudioPlayingInBackground",
			"library":"builder",
			"type":"handler",
			"syntax":[
				"androidResumeAudioPlayingInBackground()"
			],
			"display syntax":[
				"androidResumeAudioPlayingInBackground()"
			],
			"associations":["com.livecode.library.androidbgaudio"],
			"summary":"Resume the currently paused background audio",
			"OS":["android"],
			"description":"Use the <androidResumeAudioPlayingInBackground> handler to resume the\naudio playback in the background paused by the last call to \n<androidPauseAudioPlayingInBackground>.",
			"references":{
				"handler":["androidPauseAudioPlayingInBackground"]
			}
		},{
			"id":"builder-176",
			"name":"androidisaudioplayinginbackground",
			"display name":"androidIsAudioPlayingInBackground",
			"library":"builder",
			"type":"handler",
			"syntax":[
				"androidIsAudioPlayingInBackground()"
			],
			"display syntax":[
				"androidIsAudioPlayingInBackground()"
			],
			"associations":["com.livecode.library.androidbgaudio"],
			"summary":"Whether there is currently any audio playing in the background",
			"OS":["android"],
			"examples":[{
				"script":"    if androidIsAudioPlayingInBackground() then\n       androidPauseAudioPlayingInBackground\n    end if"
			}],
			"description":"Use the <androidIsAudioPlayingInBackground> to find out if there is any\naudio playback currently occurring in the background."
		},{
			"id":"builder-177",
			"name":"androidstopaudioplayinginbackground",
			"display name":"androidStopAudioPlayingInBackground",
			"library":"builder",
			"type":"handler",
			"syntax":[
				"androidStopAudioPlayingInBackground()"
			],
			"display syntax":[
				"androidStopAudioPlayingInBackground()"
			],
			"associations":["com.livecode.library.androidbgaudio"],
			"summary":"Stop playing audio in the background.",
			"OS":["android"],
			"description":"Use the <androidStopAudioPlayingInBackground> handler to stop playing\nthe audio playback in the background started by the last call to \n<androidStartAudioPlayingInBackground>.",
			"references":{
				"handler":["androidStartAudioPlayingInBackground"]
			}
		},{
			"id":"builder-178",
			"name":"androidstartaudioplayinginbackground",
			"display name":"androidStartAudioPlayingInBackground",
			"library":"builder",
			"type":"handler",
			"syntax":[
				"androidStartAudioPlayingInBackground(<pAudio>)"
			],
			"display syntax":[
				"androidStartAudioPlayingInBackground(<i>pAudio</i>)"
			],
			"associations":["com.livecode.library.androidbgaudio"],
			"summary":"Start playing audio in the background.",
			"OS":["android"],
			"parameters":[{
				"name":"pAudio",
				"type":"",
				"refparam":"false",
				"description":"The full path to the audio file to start playing"
			}],
			"description":"Use the <androidStartAudioPlayingInBackground> handler to start playing\nthe audio contained in the file <pAudio> in the background. The audio\ncontinues playing until it finishes while the app is suspended, or until\nit is paused or stopped using the <androidStopAudioPlayingInBackground> \nor <androidPauseAudioPlayingInBackground> handlers are used.",
			"references":{
				"handler":["androidStopAudioPlayingInBackground","androidPauseAudioPlayingInBackground"]
			}
		},{
			"id":"builder-179",
			"name":"com.livecode.widget.native.ios.button",
			"display name":"com.livecode.widget.native.ios.button",
			"library":"builder",
			"type":"widget",
			"display syntax":[
				"com.livecode.widget.native.ios.button"
			],
			"associations":["com.livecode.widget.native.ios.button"],
			"summary":"This widget is a native push button on iOS.",
			"OS":["ios"],
			"description":"This widget is a native push button on iOS."
		},{
			"id":"builder-180",
			"name":"enabled",
			"display name":"enabled",
			"library":"builder",
			"type":"property",
			"syntax":[
				"set the enabled of <widget> to {true | false}\nget the enabled of <widget>"
			],
			"display syntax":[
				"set the enabled of <i>widget</i> to {true | false}"
			],
			"associations":["com.livecode.widget.native.ios.button"],
			"summary":"Whether the field is active and responds to user action",
			"OS":["ios"],
			"description":"Use the <enabled> property to enable or disable the native button. When\ndisabled, the button has a greyed out appearance and does not accept \nclicks or touches."
		},{
			"id":"builder-181",
			"name":"label",
			"display name":"label",
			"library":"builder",
			"type":"property",
			"syntax":[
				"set the label of <widget> to <pLabel>\nget the label of <widget>"
			],
			"display syntax":[
				"set the label of <i>widget</i> to <i>pLabel</i>"
			],
			"associations":["com.livecode.widget.native.ios.button"],
			"summary":"The label displayed by the button.",
			"OS":["ios"],
			"examples":[{
				"script":"set the label of widget \"iOS Button\" to \"Click me!\""
			}],
			"value":[{
				"name":"value",
				"type":"",
				"description":"The string to use as the button label"
			}],
			"description":"The <label> property is the label displayed by the button.\n"
		},{
			"id":"builder-182",
			"name":"itemlabels",
			"display name":"itemLabels",
			"library":"builder",
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
			"id":"builder-183",
			"name":"hiliteditems",
			"display name":"hilitedItems",
			"library":"builder",
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
			"id":"builder-184",
			"name":"hilitecolor",
			"display name":"hiliteColor",
			"library":"builder",
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
			"id":"builder-185",
			"name":"hiliteditemicons",
			"display name":"hilitedItemIcons",
			"library":"builder",
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
			"id":"builder-186",
			"name":"hilitechanged",
			"display name":"hiliteChanged",
			"library":"builder",
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
			"id":"builder-187",
			"name":"com.livecode.widget.segmented",
			"display name":"com.livecode.widget.segmented",
			"library":"builder",
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
			"id":"builder-188",
			"name":"backcolor",
			"display name":"backColor",
			"library":"builder",
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
			"id":"builder-189",
			"name":"forecolor",
			"display name":"foreColor",
			"library":"builder",
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
			"id":"builder-190",
			"name":"cornerradius",
			"display name":"cornerRadius",
			"library":"builder",
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
			"id":"builder-191",
			"name":"hilitedtextcolor",
			"display name":"hilitedTextColor",
			"library":"builder",
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
			"id":"builder-192",
			"name":"itemcount",
			"display name":"itemCount",
			"library":"builder",
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
			"id":"builder-193",
			"name":"showborder",
			"display name":"showBorder",
			"library":"builder",
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
			"id":"builder-194",
			"name":"multiplehilites",
			"display name":"multipleHilites",
			"library":"builder",
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
			"id":"builder-195",
			"name":"itemstyle",
			"display name":"itemStyle",
			"library":"builder",
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
			"id":"builder-196",
			"name":"itemnames",
			"display name":"itemNames",
			"library":"builder",
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
			"id":"builder-197",
			"name":"togglehilites",
			"display name":"toggleHilites",
			"library":"builder",
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
			"id":"builder-198",
			"name":"horizontal",
			"display name":"horizontal",
			"library":"builder",
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
			"id":"builder-199",
			"name":"bordercolor",
			"display name":"borderColor",
			"library":"builder",
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
			"id":"builder-200",
			"name":"itemminextents",
			"display name":"itemMinExtents",
			"library":"builder",
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
			"id":"builder-201",
			"name":"itemicons",
			"display name":"itemIcons",
			"library":"builder",
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
			"id":"builder-202",
			"name":"hiliteditemnames",
			"display name":"hilitedItemNames",
			"library":"builder",
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
			"id":"builder-203",
			"name":"com.livecode.widget.colorswatch",
			"display name":"com.livecode.widget.colorswatch",
			"library":"builder",
			"type":"widget",
			"display syntax":[
				"com.livecode.widget.colorswatch"
			],
			"associations":["com.livecode.widget.colorswatch"],
			"summary":"This widget displays a color with optional alpha channel.",
			"description":"This widget displays a color with optional alpha channel."
		},{
			"id":"builder-204",
			"name":"mouseup",
			"display name":"mouseUp",
			"library":"builder",
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
			"id":"builder-205",
			"name":"swatchcolor",
			"display name":"swatchColor",
			"library":"builder",
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
			"id":"builder-206",
			"name":"roundtonearest",
			"display name":"RoundToNearest",
			"library":"builder",
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
			"id":"builder-207",
			"name":"com.livecode.mathfoundation",
			"display name":"com.livecode.mathfoundation",
			"library":"builder",
			"type":"module",
			"display syntax":[
				"com.livecode.mathfoundation"
			],
			"associations":["com.livecode.mathfoundation"],
			"summary":"This library consists of the foundational mathematical operations included in the standard library of LiveCode Builder.",
			"description":"This library consists of the foundational mathematical operations included in the standard library of LiveCode Builder."
		},{
			"id":"builder-208",
			"name":"ceiloperator",
			"display name":"CeilOperator",
			"library":"builder",
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
			"id":"builder-209",
			"name":"flooroperator",
			"display name":"FloorOperator",
			"library":"builder",
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
			"id":"builder-210",
			"name":"roundedtonearest",
			"display name":"RoundedToNearest",
			"library":"builder",
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
			"id":"builder-211",
			"name":"piconstant",
			"display name":"PiConstant",
			"library":"builder",
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
			"id":"builder-212",
			"name":"reversecharsof",
			"display name":"ReverseCharsOf",
			"library":"builder",
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
			"id":"builder-213",
			"name":"deletesingletoncharof",
			"display name":"DeleteSingletonCharOf",
			"library":"builder",
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
			"id":"builder-214",
			"name":"repeatforeachchar",
			"display name":"RepeatForEachChar",
			"library":"builder",
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
			"id":"builder-215",
			"name":"deletelastcharof",
			"display name":"DeleteLastCharOf",
			"library":"builder",
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
			"id":"builder-216",
			"name":"charoffset",
			"display name":"CharOffset",
			"library":"builder",
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
			"id":"builder-217",
			"name":"stringbeginswithstring",
			"display name":"StringBeginsWithString",
			"library":"builder",
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
			"id":"builder-218",
			"name":"newlinecharacter",
			"display name":"NewLineCharacter",
			"library":"builder",
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
			"id":"builder-219",
			"name":"deleterangecharof",
			"display name":"DeleteRangeCharOf",
			"library":"builder",
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
			"id":"builder-220",
			"name":"charisinstring",
			"display name":"CharIsInString",
			"library":"builder",
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
			"id":"builder-221",
			"name":"countcharsof",
			"display name":"CountCharsOf",
			"library":"builder",
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
			"id":"builder-222",
			"name":"rangecharof",
			"display name":"RangeCharOf",
			"library":"builder",
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
			"id":"builder-223",
			"name":"com.livecode.char",
			"display name":"com.livecode.char",
			"library":"builder",
			"type":"module",
			"display syntax":[
				"com.livecode.char"
			],
			"associations":["com.livecode.char"],
			"summary":"This library consists of the operations on chars included in the standard library of LiveCode Builder.",
			"description":"This library consists of the operations on chars included in the standard library of LiveCode Builder."
		},{
			"id":"builder-224",
			"name":"lastcharof",
			"display name":"LastCharOf",
			"library":"builder",
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
			"id":"builder-225",
			"name":"firstcharof",
			"display name":"FirstCharOf",
			"library":"builder",
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
			"id":"builder-226",
			"name":"charoffsetafter",
			"display name":"CharOffsetAfter",
			"library":"builder",
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
			"id":"builder-227",
			"name":"charoffsetbefore",
			"display name":"CharOffsetBefore",
			"library":"builder",
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
			"id":"builder-228",
			"name":"stringendswithstring",
			"display name":"StringEndsWithString",
			"library":"builder",
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
			"id":"builder-229",
			"name":"codeofchar",
			"display name":"CodeOfChar",
			"library":"builder",
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
			"id":"builder-230",
			"name":"singletoncharof",
			"display name":"SingletonCharOf",
			"library":"builder",
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
			"id":"builder-231",
			"name":"containschars",
			"display name":"ContainsChars",
			"library":"builder",
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
			"id":"builder-232",
			"name":"deletefirstcharof",
			"display name":"DeleteFirstCharOf",
			"library":"builder",
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
			"id":"builder-233",
			"name":"charwithcode",
			"display name":"CharWithCode",
			"library":"builder",
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
			"id":"builder-234",
			"name":"bordercolor",
			"display name":"borderColor",
			"library":"builder",
			"type":"property",
			"syntax":[
				"get the borderColor of <widget>",
				"set the borderColor of <widget> to <pColor>"
			],
			"display syntax":[
				"get the borderColor of <i>widget</i>"
			],
			"associations":["com.livecode.widget.headerbar"],
			"summary":"The border color",
			"description":"The <borderColor> property controls the color of the header bar's\nborder.",
			"references":{
				"property":["showBorder"]
			}
		},{
			"id":"builder-235",
			"name":"mouseup",
			"display name":"mouseUp",
			"library":"builder",
			"type":"message",
			"syntax":[
				"mouseUp"
			],
			"display syntax":[
				"mouseUp"
			],
			"associations":["com.livecode.widget.headerbar"],
			"summary":"Sent when the header bar is clicked",
			"examples":[{
				"script":"on mouseUp\n   local tActionName\n   put the mouseAction of the target into tActionName\n   if tActionName is not empty then\n      answer merge(\"The [[tActionName]] action was clicked\")\n   else\n      answer \"Try clicking on an action\"\n   end if\nend mouseUp"
			}],
			"description":"The <mouseUp> message is sent when the header bar is clicked.",
			"references":{
				"property":["mouseAction"]
			}
		},{
			"id":"builder-236",
			"name":"hiliteditemicons",
			"display name":"hilitedItemIcons",
			"library":"builder",
			"type":"property",
			"syntax":[
				"get the hilitedItemIcons of <widget>",
				"set the hilitedItemIcons of <widget> to <iconNames>"
			],
			"display syntax":[
				"get the hilitedItemIcons of <i>widget</i>"
			],
			"associations":["com.livecode.widget.headerbar"],
			"summary":"The icons for actions when highlighted.",
			"value":[{
				"name":"value",
				"type":"",
				"description":"A comma delimited list of icon names."
			}],
			"description":"The icons of the header bar actions.  These are the icons displayed by\neach action when highlighted.\n\nEach icon name must be one of the predefined graphics provided by the \"IconSVG\"\nlibrary.  You can get a list of available predefined path names by running\n`put iconNames()` in the Message Box.\n\nIf you set the <hilitedItemIcons> to a string that has more items than the\ncurrent number of actions, the header bar will automatically create a\nnew header action with a default label and name.\n\nHowever, setting the <hilitedItemIcons> to a string that has _fewer_ items\nthan the current number of actions doesn't remove an action; it just\nresets any further actions to the default icon.",
			"references":{
				"property":["itemArray","itemIcons"]
			}
		},{
			"id":"builder-237",
			"name":"itemnames",
			"display name":"itemNames",
			"library":"builder",
			"type":"property",
			"syntax":[
				"get the itemNames of <widget>",
				"set the itemNames of <widget> to <names>"
			],
			"display syntax":[
				"get the itemNames of <i>widget</i>"
			],
			"associations":["com.livecode.widget.headerbar"],
			"summary":"The identifying names for header actions.",
			"value":[{
				"name":"value",
				"type":"",
				"description":"A comma-delimited list of action names"
			}],
			"description":"The names of the header bar actions.\n\nThe <itemNames> are used to identify the header bar actions, but are\nnot ever displayed by the header bar.  Use the <itemLabels> to control\nthe text displayed for each action.",
			"references":{
				"property":["itemArray","itemLabels"]
			}
		},{
			"id":"builder-238",
			"name":"itemicons",
			"display name":"itemIcons",
			"library":"builder",
			"type":"property",
			"syntax":[
				"get the itemIcons of <widget>",
				"set the itemIcons of <widget> to <iconNames>"
			],
			"display syntax":[
				"get the itemIcons of <i>widget</i>"
			],
			"associations":["com.livecode.widget.headerbar"],
			"summary":"The icons for actions when not highlighted.",
			"value":[{
				"name":"value",
				"type":"",
				"description":"A comma delimited list of icon names."
			}],
			"description":"The icons of the header bar actions.  These are the icons displayed by\neach action when not currently highlighted.\n\nEach icon name must be one of the predefined graphics provided by the \"IconSVG\"\nlibrary.  You can get a list of available predefined path names by running\n`put iconNames()` in the Message Box.\n\nIf you set the <itemIcons> to a string that has more items than the\ncurrent number of actions, the header bar will automatically create a\nnew header action with a default label and name.\n\nHowever, setting the <itemIcons> to a string that has _fewer_ items\nthan the current number of actions doesn't remove an action; it just\nresets any further actions to the default icon.",
			"references":{
				"property":["itemArray","hilitedItemIcons"]
			}
		},{
			"id":"builder-239",
			"name":"showlabel",
			"display name":"showLabel",
			"library":"builder",
			"type":"property",
			"syntax":[
				"get the showLabel of <widget>",
				"set the showLabel of <widget> to {true | false}"
			],
			"display syntax":[
				"get the showLabel of <i>widget</i>"
			],
			"associations":["com.livecode.widget.headerbar"],
			"summary":"Whether or not to display a title",
			"description":"Controls whether the header bar displays the <label(property)> as a\ntitle (`true`) or whether no title is shown (`false`).",
			"references":{
				"property":["label"]
			}
		},{
			"id":"builder-240",
			"name":"firstitemleft",
			"display name":"firstItemLeft",
			"library":"builder",
			"type":"property",
			"syntax":[
				"get the firstItemLeft of <widget>",
				"set the firstItemLeft of <widget> to { true | false }"
			],
			"display syntax":[
				"get the firstItemLeft of <i>widget</i>"
			],
			"associations":["com.livecode.widget.headerbar"],
			"summary":"Whether to display the first action on the left",
			"description":"If the <firstItemLeft> property is `true`, then the first action in the\n<itemArray> is displayed on the left hand side of the header bar.\n\n**Note:** In some <theme|themes>, the first action always has its\nlabel displayed when <firstItemLeft> is `true`.  If you don't want\nthis to happen, you can set the action's <itemLabels|label> to the\nempty string.",
			"references":{
				"property":["itemArray","theme","itemLabels"]
			}
		},{
			"id":"builder-241",
			"name":"itemstyle",
			"display name":"itemStyle",
			"library":"builder",
			"type":"property",
			"syntax":[
				"get the itemStyle of <widget>",
				"set the itemStyle of <widget> to <actionStyle>"
			],
			"display syntax":[
				"get the itemStyle of <i>widget</i>"
			],
			"associations":["com.livecode.widget.headerbar"],
			"summary":"The display style for header actions.",
			"value":[{
				"name":"value",
				"type":"",
				"description":"The way that actions are displayed.\n- \"icons\": Show the icons\n- \"text\": Show the labels"
			}],
			"description":"Determines whether header bar actions are displayed with their icons\nor their labels.",
			"references":{
				"property":["firstItemLeft"]
			}
		},{
			"id":"builder-242",
			"name":"itemarray",
			"display name":"itemArray",
			"library":"builder",
			"type":"property",
			"syntax":[
				"get the itemArray of <widget>",
				"set the itemArray of <widget> to <array>"
			],
			"display syntax":[
				"get the itemArray of <i>widget</i>"
			],
			"associations":["com.livecode.widget.headerbar"],
			"summary":"The full header action data.",
			"value":[{
				"name":"value",
				"type":"",
				"description":"An array containing all the action data"
			}],
			"description":"The <itemArray> is a number-indexed array that contains all of the\ninformation about the header widget's actions.  It combines the data\naccessible via the <itemIcons>, <hilitedItemIcons>, <itemLabels> and\n<itemNames> properties.\n\nThe structure of the <itemArray> must be:\n\n```\n{\n\tkey (integer): The index of the navigation item\n\tvalue (array): The array containing the data for the item at this index\n\t{\n\t\tkey : \"name\"\n\t\tvalue (string): The name of this item\n\t\tkey : \"label\"\n\t\tvalue (string): The label of this item\n\t\tkey : \"icon_name\"\n\t\tvalue (string) : The name of the icon to display when the item is not highlighted\n\t\tkey : \"hilited_icon_name\"\n\t\tvalue (string) : The name of the icon to display when the item is highlighted\n\t}\n}\n```",
			"references":{
				"property":["itemIcons","hilitedItemIcons","itemLabels","itemNames"]
			}
		},{
			"id":"builder-243",
			"name":"theme",
			"display name":"theme",
			"library":"builder",
			"type":"property",
			"syntax":[
				"get the theme of <widget>",
				"set the theme of <widget> to <widgetTheme>"
			],
			"display syntax":[
				"get the theme of <i>widget</i>"
			],
			"associations":["com.livecode.widget.headerbar"],
			"summary":"The theme to use when drawing the header bar.",
			"value":[{
				"name":"value",
				"type":"string",
				"description":"The name of a theme supported by the header bar."
			}],
			"description":"The <theme> controls the general appearance of the header bar.  The\nheader widget currently supports \"native\", \"iOS\" and \"Android\".  If\nthe <theme> is set to \"native\", then the header widget will use either\nthe \"iOS\" or \"Android\" theme depending on the platform that LiveCode\nis running on.\n\n>*Note*: The value of the <theme> property is not saved by the header\nbar. Set the <theme> property to preview the way the header bar will\nappear when used on an Android or iOS device.\n\n>*Warning*: The meaning and behaviour of the <theme> property is\nexperimental and is subject to change in a future release."
		},{
			"id":"builder-244",
			"name":"forecolor",
			"display name":"foreColor",
			"library":"builder",
			"type":"property",
			"syntax":[
				"get the foreColor of <widget>",
				"set the foreColor of <widget> to <pColor>"
			],
			"display syntax":[
				"get the foreColor of <i>widget</i>"
			],
			"associations":["com.livecode.widget.headerbar"],
			"summary":"The text color",
			"description":"The <foreColor> property controls the color of the header bar's\n<label|title text>.",
			"references":{
				"property":["label"]
			}
		},{
			"id":"builder-245",
			"name":"showborder",
			"display name":"showBorder",
			"library":"builder",
			"type":"property",
			"syntax":[
				"get the showBorder of <widget>",
				"set the showBorder of <widget> to {true | false}"
			],
			"display syntax":[
				"get the showBorder of <i>widget</i>"
			],
			"associations":["com.livecode.widget.headerbar"],
			"summary":"Whether the header bar has a dividing line at the bottom",
			"description":"If the <showBorder> property is `true`, a dividing line at the bottom\nof the header bar is drawn using the <borderColor>.",
			"references":{
				"property":["borderColor"]
			}
		},{
			"id":"builder-246",
			"name":"mouseaction",
			"display name":"mouseAction",
			"library":"builder",
			"type":"property",
			"syntax":[
				"get the mouseAction of <widget>"
			],
			"display syntax":[
				"get the mouseAction of <i>widget</i>"
			],
			"associations":["com.livecode.widget.headerbar"],
			"summary":"The header action that the mouse pointer is currently over.",
			"examples":[{
				"script":"-- Go to the previous card when the header's \"back\" action is\n-- clicked.\non mouseUp\n   if the mouseAction of the target is \"back\" then\n      go previous\n   end if\nend mouseUp"
			}],
			"value":[{
				"name":"value",
				"type":"",
				"description":"The name of the header action that the mouse pointer is currently\nover."
			}],
			"description":"The <mouseAction> property contains the <itemNames|name> of the action\nthat was just clicked, or empty when no action was clicked.\n\nYou can read the <mouseAction> property to detect which action was\nactivated when handling the <mouseUp> message.",
			"references":{
				"property":["itemNames"],
				"message":["mouseUp"]
			}
		},{
			"id":"builder-247",
			"name":"backcolor",
			"display name":"backColor",
			"library":"builder",
			"type":"property",
			"syntax":[
				"get the backColor of <widget>",
				"set the backColor of <widget> to <pColor>"
			],
			"display syntax":[
				"get the backColor of <i>widget</i>"
			],
			"associations":["com.livecode.widget.headerbar"],
			"summary":"The background color",
			"description":"The <backColor> property controls the color of the header bar's\nbackground.",
			"references":{
				"property":["opaque"]
			}
		},{
			"id":"builder-248",
			"name":"opaque",
			"display name":"opaque",
			"library":"builder",
			"type":"property",
			"syntax":[
				"get the opaque of <widget>",
				"set the opaque of <widget> to {true | false}"
			],
			"display syntax":[
				"get the opaque of <i>widget</i>"
			],
			"associations":["com.livecode.widget.headerbar"],
			"summary":"Whether the background of the header bar is filled",
			"description":"If the <opaque> property is `true`, the background of the header bar\nis filled with the <backColor>.",
			"references":{
				"property":["backColor"]
			}
		},{
			"id":"builder-249",
			"name":"itemlabels",
			"display name":"itemLabels",
			"library":"builder",
			"type":"property",
			"syntax":[
				"get the itemLabels of <widget>",
				"set the itemLabels of <widget> to <labels>"
			],
			"display syntax":[
				"get the itemLabels of <i>widget</i>"
			],
			"associations":["com.livecode.widget.headerbar"],
			"summary":"The labels for header actions.",
			"value":[{
				"name":"value",
				"type":"",
				"description":"A comma-delimited list of action labels."
			}],
			"description":"The labels of the header bar actions.\n\nThe <itemLabels> are displayed by the header bar widget when the\n<itemStyle> is set to show text for each action.",
			"references":{
				"property":["itemArray","itemStyle"]
			}
		},{
			"id":"builder-250",
			"name":"com.livecode.widget.headerbar",
			"display name":"com.livecode.widget.headerbar",
			"library":"builder",
			"type":"widget",
			"display syntax":[
				"com.livecode.widget.headerbar"
			],
			"associations":["com.livecode.widget.headerbar"],
			"summary":"A header bar intended for use by mobile apps.\n\nThe header bar has a <label(property)>, which is displayed as its\ntitle, along with a set of actions.  Each action has a\n<itemNames|name>, which is used to identify it internally, and an\n<itemIcons|icon> and <itemLabels|label> which are displayed (depending\non the chosen <itemStyle>).  One of the actions can optionally be\ndisplayed to the left of the header bar's title, when the\n<firstItemLeft> property is enabled.\n\nThe header bar widget provides two theme modes, one for Android apps\nand one for iOS apps.  By default, it automatically selects the\nappropriate one depending on which platform it is running on.  To\ntemporarily select a non-default different appearance, set the\n<theme(property)> property.\n\nThe header bar widget works well when paired with the navigation bar\nwidget.",
			"description":"A header bar intended for use by mobile apps.\n\nThe header bar has a <label(property)>, which is displayed as its\ntitle, along with a set of actions.  Each action has a\n<itemNames|name>, which is used to identify it internally, and an\n<itemIcons|icon> and <itemLabels|label> which are displayed (depending\non the chosen <itemStyle>).  One of the actions can optionally be\ndisplayed to the left of the header bar's title, when the\n<firstItemLeft> property is enabled.\n\nThe header bar widget provides two theme modes, one for Android apps\nand one for iOS apps.  By default, it automatically selects the\nappropriate one depending on which platform it is running on.  To\ntemporarily select a non-default different appearance, set the\n<theme(property)> property.\n\nThe header bar widget works well when paired with the navigation bar\nwidget.",
			"references":{
				"property":["firstItemLeft","itemIcons","itemLabels","itemNames","itemStyle","label","theme"]
			}
		},{
			"id":"builder-251",
			"name":"hilitecolor",
			"display name":"hiliteColor",
			"library":"builder",
			"type":"property",
			"syntax":[
				"get the hiliteColor of <widget>",
				"set the hiliteColor of <widget> to <pColor>"
			],
			"display syntax":[
				"get the hiliteColor of <i>widget</i>"
			],
			"associations":["com.livecode.widget.headerbar"],
			"summary":"The color of the actions' icons and text",
			"description":"The <hiliteColor> property controls the color of the text and icons of\nthe header bar's actions.",
			"references":{
				"property":["itemIcons","hilitedItemIcons","itemLabels","itemStyle"]
			}
		},{
			"id":"builder-252",
			"name":"label",
			"display name":"label",
			"library":"builder",
			"type":"property",
			"syntax":[
				"get the label of <widget>",
				"set the label of <widget> to <title>"
			],
			"display syntax":[
				"get the label of <i>widget</i>"
			],
			"associations":["com.livecode.widget.headerbar"],
			"summary":"The title displayed by the header bar.",
			"value":[{
				"name":"value",
				"type":"string",
				"description":"The text of the title of the header bar."
			}],
			"description":"The text displayed by the header bar as its title.",
			"references":{
				"property":["showLabel"]
			}
		},{
			"id":"builder-253",
			"name":"com.livecode.library.scriptitems",
			"display name":"com.livecode.library.scriptitems",
			"library":"builder",
			"type":"module",
			"display syntax":[
				"com.livecode.library.scriptitems"
			],
			"associations":["com.livecode.library.scriptitems"],
			"summary":"Utility functions for LiveCode Script-compatible item lists.\n\nMany LiveCode Builder widget and library extensions expose APIs to\nLiveCode Script that use item lists.  This library provides a set of\nfunctions for converting `List` values to-and-from comma-delimited\nitem strings.",
			"description":"Utility functions for LiveCode Script-compatible item lists.\n\nMany LiveCode Builder widget and library extensions expose APIs to\nLiveCode Script that use item lists.  This library provides a set of\nfunctions for converting `List` values to-and-from comma-delimited\nitem strings."
		},{
			"id":"builder-254",
			"name":"parseitemsasnumberlist",
			"display name":"parseItemsAsNumberList",
			"library":"builder",
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
			"id":"builder-255",
			"name":"parseitemsasstringlist",
			"display name":"parseItemsAsStringList",
			"library":"builder",
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
			"id":"builder-256",
			"name":"formatstringlistasitems",
			"display name":"formatStringListAsItems",
			"library":"builder",
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
			"id":"builder-257",
			"name":"formatnumberlistasitems",
			"display name":"formatNumberListAsItems",
			"library":"builder",
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
			"id":"builder-258",
			"name":"com.livecode.date",
			"display name":"com.livecode.date",
			"library":"builder",
			"type":"module",
			"display syntax":[
				"com.livecode.date"
			],
			"associations":["com.livecode.date"],
			"summary":"This library provides low-level system functionality for modular\nLiveCode programs.",
			"description":"This library provides low-level system functionality for modular\nLiveCode programs."
		},{
			"id":"builder-259",
			"name":"universaltime",
			"display name":"UniversalTime",
			"library":"builder",
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
			"id":"builder-260",
			"name":"localdate",
			"display name":"LocalDate",
			"library":"builder",
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
			"id":"builder-261",
			"name":"universaldate",
			"display name":"UniversalDate",
			"library":"builder",
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
			"id":"builder-262",
			"name":"editable",
			"display name":"editable",
			"library":"builder",
			"type":"property",
			"syntax":[
				"set the editable of <widget> to {true | false}\nget the editable of <widget>"
			],
			"display syntax":[
				"set the editable of <i>widget</i> to {true | false}"
			],
			"associations":["com.livecode.widget.native.android.field"],
			"summary":"Whether the field can be edited or not",
			"OS":["android"],
			"description":"Use the <editable> property to allow or disallow the user to enter text in the\nfield."
		},{
			"id":"builder-263",
			"name":"exitfield",
			"display name":"exitField",
			"library":"builder",
			"type":"message",
			"syntax":[
				"exitField"
			],
			"display syntax":[
				"exitField"
			],
			"associations":["com.livecode.widget.native.android.field"],
			"summary":"Sent to the field with the selection when the selection is being removed from\nthe field, and its contents have not changed.",
			"OS":["android"],
			"examples":[{
				"script":"on exitField -- remove visual signs that the field is being edited\n   set the enabled of the target to false\nend exitField"
			}],
			"description":"Handle the <exitField> message if you want to do something when the user leaves\na field that hasn't been changed."
		},{
			"id":"builder-264",
			"name":"selectedrange",
			"display name":"selectedRange",
			"library":"builder",
			"type":"property",
			"syntax":[
				"set the selectedRange of <widget> to <pRange>\nget the selectedRange of <widget>"
			],
			"display syntax":[
				"set the selectedRange of <i>widget</i> to <i>pRange</i>"
			],
			"associations":["com.livecode.widget.native.android.field"],
			"summary":"The range of text of the widget that is selected.",
			"OS":["android"],
			"examples":[{
				"script":"-- Select the first 20 chars of the field widget\nset the selectedRange of widget \"Android Text\" to \"1,20\""
			}],
			"value":[{
				"name":"value",
				"type":"",
				"description":"A comma-delimiter pair of the (1-based) start index and length."
			}],
			"description":"Use the <selectedRange> property to determine the start index and the length of\nthe text that is to appear as selected."
		},{
			"id":"builder-265",
			"name":"autocapitalizationtype",
			"display name":"autoCapitalizationType",
			"library":"builder",
			"type":"property",
			"syntax":[
				"set the autoCapitalizationType of <widget> to <pType>\nget the autoCapitalizationType of <widget>"
			],
			"display syntax":[
				"set the autoCapitalizationType of <i>widget</i> to <i>pType</i>"
			],
			"associations":["com.livecode.widget.native.android.field"],
			"summary":"The auto-capitalization behavior of the field widget.",
			"OS":["android"],
			"examples":[{
				"script":"set the autoCapitalizationType of widget \"Android Field\" to \"sentences\""
			}],
			"value":[{
				"name":"value",
				"type":"",
				"description":"- \"none\": the shift-key is never automatically enabled\n- \"words\": the shift-key is enabled at the start of words\n- \"sentences\": the shift-key is enabled at the start of sentences\n- \"all characters\": the shift-key is enabled at the start of each character"
			}],
			"description":"Use the <autoCapitalizationType> property to determine when the shift-key is\nautomatically enabled when typing."
		},{
			"id":"builder-266",
			"name":"enabled",
			"display name":"enabled",
			"library":"builder",
			"type":"property",
			"syntax":[
				"set the enabled of <widget> to {true | false}\nget the enabled of <widget>"
			],
			"display syntax":[
				"set the enabled of <i>widget</i> to {true | false}"
			],
			"associations":["com.livecode.widget.native.android.field"],
			"summary":"Whether the field is active and responds to user action",
			"OS":["android"],
			"description":"Use the <enabled> property to enable or disable the native field. When disabled,\nthe field has a greyed out appearance."
		},{
			"id":"builder-267",
			"name":"datadetectortypes",
			"display name":"dataDetectorTypes",
			"library":"builder",
			"type":"property",
			"syntax":[
				"set the dataDetectorTypes of <widget> to <pType>\nget the dataDetectorTypes of <widget>"
			],
			"display syntax":[
				"set the dataDetectorTypes of <i>widget</i> to <i>pType</i>"
			],
			"associations":["com.livecode.widget.native.android.field"],
			"summary":"What types of data should be clickable in the field.",
			"OS":["android"],
			"examples":[{
				"script":"set the dataDetectorTypes of widget \"Android Field\" to \"email,link\""
			},{
				"script":"set the dataDetectorTypes of widget \"Android Field\" to empty"
			}],
			"value":[{
				"name":"value",
				"type":"",
				"description":"- \"phone number\": Phone numbers should be clickable\n- \"link\": Links should be clickable\n- \"email\": Email addresses should be clickable\n- \"address\": Addresses should be clickable"
			}],
			"description":"Use the <dataDetectorTypes> property to determine what kind of data should be\ndetected and automatically converted to clikckable URLs.\n"
		},{
			"id":"builder-268",
			"name":"closefield",
			"display name":"closeField",
			"library":"builder",
			"type":"message",
			"syntax":[
				"closeField"
			],
			"display syntax":[
				"closeField"
			],
			"associations":["com.livecode.widget.native.android.field"],
			"summary":"Sent to a field when the focus is being removed from that field and the field's\ncontent has changed.",
			"OS":["android"],
			"examples":[{
				"script":"on closeField -- make sure the user has entered a valid date\n  local tText\n  put the text of me into tText\n  if tText is not a date then\n    beep\n    answer \"Please enter a date.\"\n    set the selectedRange of the target to \"1,\" & \\\n       the number of chars in tText\n  end if\nend closeField"
			}],
			"description":"Handle the <closeField> message if you want to make sure a field's content is\ncorrect after it has been changed."
		},{
			"id":"builder-269",
			"name":"openfield",
			"display name":"openField",
			"library":"builder",
			"type":"message",
			"syntax":[
				"openField"
			],
			"display syntax":[
				"openField"
			],
			"associations":["com.livecode.widget.native.android.field"],
			"summary":"Sent to an unlocked field when you click or select text in that field.",
			"OS":["android"],
			"examples":[{
				"script":"on openField -- when clicking in the field, select all its text\n  local tText\n  put the text of the target into tText\n  set the selectedRange of the target to \"1,\" & \\\n     the number of chars in tText\nend openField"
			}],
			"description":"Handle the <openField> message if you want to do something when the user enters\na field widget. The message is not sent if the field is locked."
		},{
			"id":"builder-270",
			"name":"scrollingenabled",
			"display name":"scrollingEnabled",
			"library":"builder",
			"type":"property",
			"syntax":[
				"set the scrollingEnabled of <widget> to {true | false}\nget the scrollingEnabled of <widget>"
			],
			"display syntax":[
				"set the scrollingEnabled of <i>widget</i> to {true | false}"
			],
			"associations":["com.livecode.widget.native.android.field"],
			"summary":"Whether the field can be scrolled or not.",
			"OS":["android"],
			"description":"Use the <scrollingEnabled> property to allow or disallow the user to scroll the\nfield."
		},{
			"id":"builder-271",
			"name":"focused",
			"display name":"focused",
			"library":"builder",
			"type":"property",
			"syntax":[
				"set the focused of <widget> to {true | false}\nget the focused of <widget>"
			],
			"display syntax":[
				"set the focused of <i>widget</i> to {true | false}"
			],
			"associations":["com.livecode.widget.native.android.field"],
			"summary":"Whether the field is focused or not.",
			"OS":["android"],
			"description":"Use the <focused> property to request focus for the native field, or remove it."
		},{
			"id":"builder-272",
			"name":"passreturnkey",
			"display name":"passReturnKey",
			"library":"builder",
			"type":"property",
			"syntax":[
				"set the passReturnKey of <widget> to {true|false}\nget the passReturnKey of <widget>"
			],
			"display syntax":[
				"set the passReturnKey of <i>widget</i> to {true|false}"
			],
			"associations":["com.livecode.widget.native.android.field"],
			"summary":"Whether the return key adds a new line to the field",
			"OS":["android"],
			"examples":[{
				"script":"command createField\n   create widget as \"com.livecode.widget.native.android.field\"\n   set the passReturnKey of it to false\nend createField\n\n-- In the widget script\non returnKey\n   answer \"You entered\" && the text of the target\nend returnKey"
			}],
			"description":"Use the <passReturnKey> property to control whether the\nnative keyboard return key adds a new line to the field or\nnot."
		},{
			"id":"builder-273",
			"name":"com.livecode.widget.native.android.field",
			"display name":"com.livecode.widget.native.android.field",
			"library":"builder",
			"type":"widget",
			"display syntax":[
				"com.livecode.widget.native.android.field"
			],
			"associations":["com.livecode.widget.native.android.field"],
			"summary":"This widget is a native field on Android.",
			"OS":["android"],
			"description":"This widget is a native field on Android."
		},{
			"id":"builder-274",
			"name":"multiline",
			"display name":"multiline",
			"library":"builder",
			"type":"property",
			"syntax":[
				"set the multiline of <widget> to {true | false}\nget the multiline of <widget>"
			],
			"display syntax":[
				"set the multiline of <i>widget</i> to {true | false}"
			],
			"associations":["com.livecode.widget.native.android.field"],
			"summary":"Whether the field can contain multiple lines or not.",
			"OS":["android"],
			"description":"Use the <multiline> property to allow or disallow the user to enter multiple\nlines of text in the field."
		},{
			"id":"builder-275",
			"name":"text",
			"display name":"text",
			"library":"builder",
			"type":"property",
			"syntax":[
				"set the text of <widget> to <pText>\nget the text of <widget>"
			],
			"display syntax":[
				"set the text of <i>widget</i> to <i>pText</i>"
			],
			"associations":["com.livecode.widget.native.android.field"],
			"summary":"The text contained in the field widget.",
			"OS":["android"],
			"examples":[{
				"script":"set the text of widget \"Android Field\" to \"Some text\""
			}],
			"value":[{
				"name":"value",
				"type":"",
				"description":"A string."
			}],
			"description":"Use the <text> property to change the text of the field widget."
		},{
			"id":"builder-276",
			"name":"contenttype",
			"display name":"contentType",
			"library":"builder",
			"type":"property",
			"syntax":[
				"set the contentType of <widget> to <pType>\nget the contentType of <widget>"
			],
			"display syntax":[
				"set the contentType of <i>widget</i> to <i>pType</i>"
			],
			"associations":["com.livecode.widget.native.android.field"],
			"summary":"What kind of content the field contains.",
			"OS":["android"],
			"examples":[{
				"script":"set the contentType of widget \"Android Field\" to \"password\""
			}],
			"value":[{
				"name":"value",
				"type":"",
				"description":"- \"plain\": plain, unstyled text\n- \"password\": plain text displayed in the standard password style"
			}],
			"description":"Use the <contentType> property to determine what kind of content the control\ncontains."
		},{
			"id":"builder-277",
			"name":"verticaltextalign",
			"display name":"verticalTextAlign",
			"library":"builder",
			"type":"property",
			"syntax":[
				"set the verticalTextAlign of <widget> to <pAlign>\nget the verticalTextAlign of <widget>"
			],
			"display syntax":[
				"set the verticalTextAlign of <i>widget</i> to <i>pAlign</i>"
			],
			"associations":["com.livecode.widget.native.android.field"],
			"summary":"The vertical text alignment of the field widget.",
			"OS":["android"],
			"examples":[{
				"script":"set the verticalTextAlign of widget \"Android Field\" to \"middle\""
			}],
			"value":[{
				"name":"value",
				"type":"",
				"description":"- \"top\": Top-aligned text\n- \"middle\": Middle-aligned text\n- \"bottom\": Bottom-aligned text"
			}],
			"description":"Use the <textAlign> property to change the vertical text alignment of the\nfield widget."
		},{
			"id":"builder-278",
			"name":"returnkeytype",
			"display name":"returnKeyType",
			"library":"builder",
			"type":"property",
			"syntax":[
				"set the returnKeyType of <widget> to <pType>\nget the returnKeyType of <widget>"
			],
			"display syntax":[
				"set the returnKeyType of <i>widget</i> to <i>pType</i>"
			],
			"associations":["com.livecode.widget.native.android.field"],
			"summary":"The type of action assigned to the return key on the keyboard\nassociated with this field widget.",
			"OS":["android"],
			"examples":[{
				"script":"set the returnKeyType of widget \"Android Field\" to \"previous\""
			}],
			"value":[{
				"name":"value",
				"type":"",
				"description":"- \"default\": the normal return key action\n- \"none\": no return key action\n- \"go\": take the user to the target of the text they typed\n- \"next\": move to the next field that will accept text\n- \"previous\": move to the previous field that will accept text\n- \"search\": take the user to the results of searching for the text they have typed\n- \"send\": deliver the text to its target\n- \"done\": close IME"
			}],
			"description":"Use the <returnKeyType> property to determine what kind of action should be\nperformed when the return key on the keyboard associated with this field widget\nis pressed."
		},{
			"id":"builder-279",
			"name":"fieldtextcolor",
			"display name":"fieldTextColor",
			"library":"builder",
			"type":"property",
			"syntax":[
				"set the fieldTextColor of <widget> to <pColor>\nget the fieldTextColor of <widget>"
			],
			"display syntax":[
				"set the fieldTextColor of <i>widget</i> to <i>pColor</i>"
			],
			"associations":["com.livecode.widget.native.android.field"],
			"summary":"The color of the text of the field widget.",
			"OS":["android"],
			"examples":[{
				"script":"set the fieldTextColor of widget \"Android Field\" to \"255,0,0,128\""
			}],
			"value":[{
				"name":"value",
				"type":"",
				"description":"A comma delimited string representing a color in RGB / RGBA format"
			}],
			"description":"Use the <fieldTextColor> property to change the color of the text of the field\nwidget."
		},{
			"id":"builder-280",
			"name":"textchanged",
			"display name":"textChanged",
			"library":"builder",
			"type":"message",
			"syntax":[
				"textChanged"
			],
			"display syntax":[
				"textChanged"
			],
			"associations":["com.livecode.widget.native.android.field"],
			"summary":"Sent when the native field widget text is changed.",
			"OS":["android"],
			"examples":[{
				"script":"on textChanged\n   if the text of me is not a number then\n      beep\n   end if\nend textChanged"
			}],
			"description":"Handle the <textChanged> message if you want to do something when the text of\nthe field is changed through typing."
		},{
			"id":"builder-281",
			"name":"autocorrectiontype",
			"display name":"autoCorrectionType",
			"library":"builder",
			"type":"property",
			"syntax":[
				"set the autoCorrectionType of <widget> to <pType>\nget the autoCorrectionType of <widget>"
			],
			"display syntax":[
				"set the autoCorrectionType of <i>widget</i> to <i>pType</i>"
			],
			"associations":["com.livecode.widget.native.android.field"],
			"summary":"The auto-correction behavior of the field widget.",
			"OS":["android"],
			"examples":[{
				"script":"set the autoCorrectionType of widget \"Android Field\" to \"no\""
			}],
			"value":[{
				"name":"value",
				"type":"",
				"description":"- \"default\": use the appropriate auto-correct behavior for the current script system\n- \"no\": disable auto-correct behavior\n- \"yes\": enable auto-correct behavior"
			}],
			"description":"Use the <autoCorrectionType> property to determine whether auto-correct behavior\nshould be enabled."
		},{
			"id":"builder-282",
			"name":"textalign",
			"display name":"textAlign",
			"library":"builder",
			"type":"property",
			"syntax":[
				"set the textAlign of <widget> to <pAlign>\nget the textAlign of <widget>"
			],
			"display syntax":[
				"set the textAlign of <i>widget</i> to <i>pAlign</i>"
			],
			"associations":["com.livecode.widget.native.android.field"],
			"summary":"The horizontal text alignment of the field widget.",
			"OS":["android"],
			"examples":[{
				"script":"set the textAlign of widget \"Android Field\" to \"center\""
			}],
			"value":[{
				"name":"value",
				"type":"",
				"description":"- \"left\": Left-aligned text\n- \"center\": Center-aligned text\n- \"right\": Right-aligned text"
			}],
			"description":"Use the <textAlign> property to change the horizontal text alignment of the\nfield widget."
		},{
			"id":"builder-283",
			"name":"keyboardtype",
			"display name":"keyboardType",
			"library":"builder",
			"type":"property",
			"syntax":[
				"set the keyboardType of <widget> to <pType>\nget the keyboardType of <widget>"
			],
			"display syntax":[
				"set the keyboardType of <i>widget</i> to <i>pType</i>"
			],
			"associations":["com.livecode.widget.native.android.field"],
			"summary":"The type of keyboard associated to the field widget.",
			"OS":["android"],
			"examples":[{
				"script":"set the keyboardType of widget \"Android Field\" to \"URL\""
			}],
			"value":[{
				"name":"value",
				"type":"",
				"description":"- \"default\": the default keyboard\n- \"alphabet\": the alphabetic keyboard\n- \"numeric\": the numeric keyboard with punctuation\n- \"URL\": the URL entry keyboard\n- \"number\": the number pad keyboard\n- \"phone\": the phone number pad keyboard\n- \"contact\": the phone contact pad keyboard\n- \"email\": the email keyboard\n- \"decimal\": the decimal numeric pad keyboard"
			}],
			"description":"Use the <keyboardType> property to determine what kind of keyboard should be\ndisplayed when this field widget is focused."
		},{
			"id":"builder-284",
			"name":"absoperator",
			"display name":"AbsOperator",
			"library":"builder",
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
			"id":"builder-285",
			"name":"baseelogoperator",
			"display name":"BaseELogOperator",
			"library":"builder",
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
			"id":"builder-286",
			"name":"maxlistoperator",
			"display name":"MaxListOperator",
			"library":"builder",
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
			"id":"builder-287",
			"name":"baseconvert",
			"display name":"BaseConvert",
			"library":"builder",
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
			"id":"builder-288",
			"name":"minlistoperator",
			"display name":"MinListOperator",
			"library":"builder",
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
			"id":"builder-289",
			"name":"expoperator",
			"display name":"ExpOperator",
			"library":"builder",
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
			"id":"builder-290",
			"name":"baseconvertto",
			"display name":"BaseConvertTo",
			"library":"builder",
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
			"id":"builder-291",
			"name":"base10logoperator",
			"display name":"Base10LogOperator",
			"library":"builder",
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
			"id":"builder-292",
			"name":"squarerootoperator",
			"display name":"SquareRootOperator",
			"library":"builder",
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
			"id":"builder-293",
			"name":"binaryarctanoperator",
			"display name":"BinaryArctanOperator",
			"library":"builder",
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
			"id":"builder-294",
			"name":"arcsinoperator",
			"display name":"ArcsinOperator",
			"library":"builder",
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
			"id":"builder-295",
			"name":"truncoperator",
			"display name":"TruncOperator",
			"library":"builder",
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
			"id":"builder-296",
			"name":"com.livecode.math",
			"display name":"com.livecode.math",
			"library":"builder",
			"type":"module",
			"display syntax":[
				"com.livecode.math"
			],
			"associations":["com.livecode.math"],
			"summary":"This library consists of the mathematical operations included in the standard library of LiveCode Builder.",
			"description":"This library consists of the mathematical operations included in the standard library of LiveCode Builder."
		},{
			"id":"builder-297",
			"name":"sinoperator",
			"display name":"SinOperator",
			"library":"builder",
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
			"id":"builder-298",
			"name":"arctanoperator",
			"display name":"ArctanOperator",
			"library":"builder",
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
			"id":"builder-299",
			"name":"cosoperator",
			"display name":"CosOperator",
			"library":"builder",
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
			"id":"builder-300",
			"name":"maxoperator",
			"display name":"MaxOperator",
			"library":"builder",
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
			"id":"builder-301",
			"name":"arccosoperator",
			"display name":"ArccosOperator",
			"library":"builder",
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
			"id":"builder-302",
			"name":"minoperator",
			"display name":"MinOperator",
			"library":"builder",
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
			"id":"builder-303",
			"name":"randomnumber",
			"display name":"RandomNumber",
			"library":"builder",
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
			"id":"builder-304",
			"name":"baseconvertfrom",
			"display name":"BaseConvertFrom",
			"library":"builder",
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
			"id":"builder-305",
			"name":"powoperator",
			"display name":"PowOperator",
			"library":"builder",
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
			"id":"builder-306",
			"name":"tanoperator",
			"display name":"TanOperator",
			"library":"builder",
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
			"id":"builder-307",
			"name":"hilitedcoordinatescolor",
			"display name":"hilitedCoordinatesColor",
			"library":"builder",
			"type":"property",
			"syntax":[
				"set the hilitedCoordinatesColor of <widget> to <color>\nget the hilitedCoordinatesColor of <widget>"
			],
			"display syntax":[
				"set the hilitedCoordinatesColor of <i>widget</i> to <i>color</i>"
			],
			"associations":["com.livecode.widget.linegraph"],
			"summary":"The color for drawing the highlighted point",
			"value":[{
				"name":"value",
				"type":"",
				"description":"Any string which is a valid color, including RGBA values."
			}],
			"description":"If the widget currently has some <hilitedCoordinates|highlighted\ncoordinates> set, the <hilitedCoordinatesColor> determines the color\nused to draw the highlighting dot and lines.",
			"references":{
				"property":["hilitedCoordinates"]
			}
		},{
			"id":"builder-308",
			"name":"graphylines",
			"display name":"graphYLines",
			"library":"builder",
			"type":"property",
			"syntax":[
				"set the graphYLines of <widget> to { true | false }\nget the graphYLines of <widget>"
			],
			"display syntax":[
				"set the graphYLines of <i>widget</i> to { true | false }"
			],
			"associations":["com.livecode.widget.linegraph"],
			"summary":"Whether vertical grid lines are displayed",
			"value":[{
				"name":"value",
				"type":"",
				"description":"True if grid lines should be shown; false otherwise"
			}],
			"description":"If true, the graph widget will draw vertical grid lines on the graph.\nThe number and spacing of the grid lines is determined automatically.",
			"references":{
				"property":["graphXLines"]
			}
		},{
			"id":"builder-309",
			"name":"markerstyles",
			"display name":"markerStyles",
			"library":"builder",
			"type":"property",
			"syntax":[
				"set the markerStyles of <widget> to { <string> | empty }\nget the markerStyles of <widget>"
			],
			"display syntax":[
				"set the markerStyles of <i>widget</i> to { <i>string</i> | empty }"
			],
			"associations":["com.livecode.widget.linegraph"],
			"summary":"The marker styles for drawing vertices on the graph",
			"value":[{
				"name":"value",
				"type":"",
				"description":"A line-delimited list of the marker styles for each line\non the graph"
			}],
			"description":"The <markerStyles> are the marker styles of each line in the graph\nwidget.\n\nIf set to empty then no markers will be shown and\nshowLines will be set to true. Available marker styles may be one of:\n\n- \"filled circle\"\n- \"filled square\"\n- \"filled diamond\"\n- \"circle\"\n- \"square\"\n- \"diamond\"\n- any icon name from the svg icon library\n\nBy default the markerStyles will repeat in the following order:\n\n- \"filled circle\"\n- \"filled square\"\n- \"filled diamond\"\n- \"circle\"\n- \"square\"\n- \"diamond\"",
			"references":{
				"property":["showLines","markerScale"]
			}
		},{
			"id":"builder-310",
			"name":"graphcolors",
			"display name":"graphColors",
			"library":"builder",
			"type":"property",
			"syntax":[
				"set the graphColors of <widget> to <pColors>\nget the graphColors of <widget>"
			],
			"display syntax":[
				"set the graphColors of <i>widget</i> to <i>pColors</i>"
			],
			"associations":["com.livecode.widget.linegraph"],
			"summary":"The colors for drawing lines on the graph",
			"examples":[{
				"script":"local tVar\nput \"255,0,155,255\\n155,100,255,255\\n100,255,100,255\" into tVar\nreplace \"\\n\" with return in tVar\nset the graphColors of widget \"My Graph\" to tVar"
			}],
			"value":[{
				"name":"value",
				"type":"",
				"description":"A line-delimited list of the colors for each line on the graph"
			}],
			"description":"The <graphColors> are the colors of each line in the graph widget.\n\nEach line of the <graphColors> should be a comma delimited list with\nfour items.  The items are the red, green, blue, and alpha (opacity)\ncomponents of the line color."
		},{
			"id":"builder-311",
			"name":"markerscale",
			"display name":"markerScale",
			"library":"builder",
			"type":"property",
			"syntax":[
				"set the markerScale of <widget> to <real>\nget the markerScale of <widget>"
			],
			"display syntax":[
				"set the markerScale of <i>widget</i> to <i>real</i>"
			],
			"associations":["com.livecode.widget.linegraph"],
			"summary":"A scale factor to apply to markers",
			"value":[{
				"name":"value",
				"type":"",
				"description":"A scale factor to apply to markers"
			}],
			"description":"The default scale factor is 1 which corresponds to an 8x8 point marker.",
			"references":{
				"property":["markerStyles","showLines"]
			}
		},{
			"id":"builder-312",
			"name":"hilitedcoordinates",
			"display name":"hilitedCoordinates",
			"library":"builder",
			"type":"property",
			"syntax":[
				"set the hilitedCoordinates of <widget> to { <point> | empty }\nget the hilitedCoordinates of <widget>"
			],
			"display syntax":[
				"set the hilitedCoordinates of <i>widget</i> to { <i>point</i> | empty }"
			],
			"associations":["com.livecode.widget.linegraph"],
			"summary":"The coordinates of a highlighted point on the graph",
			"value":[{
				"name":"value",
				"type":"",
				"description":"The comma-delimited coordinates of a point, or empty."
			}],
			"description":"If the <hilitedCoordinates> of the graph widget is not empty, then the\nwidget will highlight the specified coordinates with a dot and dashed\nhorizontal and vertical lines.\n\n>*Note:* If the x-axis values in the graph data are non-numeric,\n>then the x-value of the point set must match one of those values.",
			"references":{
				"property":["hilitedCoordinatesColor"]
			}
		},{
			"id":"builder-313",
			"name":"showlines",
			"display name":"showLines",
			"library":"builder",
			"type":"property",
			"syntax":[
				"set the showLines of <widget> to { true | false }\nget the showLines of <widget>"
			],
			"display syntax":[
				"set the showLines of <i>widget</i> to { true | false }"
			],
			"associations":["com.livecode.widget.linegraph"],
			"summary":"Whether chart lines are displayed",
			"value":[{
				"name":"value",
				"type":"",
				"description":"True if lines should be shown; false otherwise"
			}],
			"description":"If true, the graph widget will draw graph lines on the graph.",
			"references":{
				"property":["markerStyles","markerScale"]
			}
		},{
			"id":"builder-314",
			"name":"graphxlines",
			"display name":"graphXLines",
			"library":"builder",
			"type":"property",
			"syntax":[
				"set the graphXLines of <widget> to { true | false }\nget the graphXLines of <widget>"
			],
			"display syntax":[
				"set the graphXLines of <i>widget</i> to { true | false }"
			],
			"associations":["com.livecode.widget.linegraph"],
			"summary":"Whether horizontal grid lines are displayed",
			"value":[{
				"name":"value",
				"type":"",
				"description":"True if grid lines should be shown; false otherwise"
			}],
			"description":"If true, the graph widget will draw horizontal grid lines on the\ngraph.  The number and spacing of the grid lines is determined\nautomatically.",
			"references":{
				"property":["graphYLines"]
			}
		},{
			"id":"builder-315",
			"name":"graphdata",
			"display name":"graphData",
			"library":"builder",
			"type":"property",
			"syntax":[
				"set the graphData of <widget> to <pData>\nget the graphData of <widget>"
			],
			"display syntax":[
				"set the graphData of <i>widget</i> to <i>pData</i>"
			],
			"associations":["com.livecode.widget.linegraph"],
			"summary":"The data displayed by the graph.",
			"examples":[{
				"script":"    local tVar\n    put \"mon,1000,300,0\\ntue,720,340,123\\nwed,889,400,80\\nthu,800,360,10\\nfri,1000,301,234\\nsat,964,400,200\\nsun,1000,500,0\" into tVar\n    replace \"\\n\" with return in tVar\n    set the graphData of widget \"My Graph\" to tVar"
			}],
			"value":[{
				"name":"value",
				"type":"",
				"description":"A line delimited list of the data for each point on the x-axis."
			}],
			"description":"The <graphData> is the data to be displayed by the graph widget.\n\nEach line of the <graphData> should be a a comma delimited list.  The\nfirst item of each line is the label for that point on the x-axis.\nThe second and following items are the values for each series of data\nto plot."
		},{
			"id":"builder-316",
			"name":"com.livecode.widget.linegraph",
			"display name":"com.livecode.widget.linegraph",
			"library":"builder",
			"type":"widget",
			"display syntax":[
				"com.livecode.widget.linegraph"
			],
			"associations":["com.livecode.widget.linegraph"],
			"summary":"A configurable line graph widget.\n\nThe graph has labelled axes and allows multiple lines to be displayed.\n\n- Load comma-delimited data into the graph with the <graphData> property\n- Set the <graphColors> to control the color of each line in the graph\n- Call out a specific point on the graph by setting the\n  <hilitedCoordinates>",
			"description":"A configurable line graph widget.\n\nThe graph has labelled axes and allows multiple lines to be displayed.\n\n- Load comma-delimited data into the graph with the <graphData> property\n- Set the <graphColors> to control the color of each line in the graph\n- Call out a specific point on the graph by setting the\n  <hilitedCoordinates>",
			"references":{
				"property":["graphData","graphColors","hilitedCoordinates"]
			}
		},{
			"id":"builder-317",
			"name":"fghovercolor",
			"display name":"fgHoverColor",
			"library":"builder",
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
			"id":"builder-318",
			"name":"hoverstate",
			"display name":"hoverState",
			"library":"builder",
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
			"id":"builder-319",
			"name":"hovericonname",
			"display name":"hoverIconName",
			"library":"builder",
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
			"id":"builder-320",
			"name":"bgcolor",
			"display name":"bgColor",
			"library":"builder",
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
			"id":"builder-321",
			"name":"fgcolor",
			"display name":"fgColor",
			"library":"builder",
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
			"id":"builder-322",
			"name":"mouseenter",
			"display name":"mouseEnter",
			"library":"builder",
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
			"id":"builder-323",
			"name":"bghovercolor",
			"display name":"bgHoverColor",
			"library":"builder",
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
			"id":"builder-324",
			"name":"mouseleave",
			"display name":"mouseLeave",
			"library":"builder",
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
			"id":"builder-325",
			"name":"iconname",
			"display name":"iconName",
			"library":"builder",
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
			"id":"builder-326",
			"name":"com.livecode.widget.tile",
			"display name":"com.livecode.widget.tile",
			"library":"builder",
			"type":"widget",
			"display syntax":[
				"com.livecode.widget.tile"
			],
			"associations":["com.livecode.widget.tile"],
			"summary":"A tile widget with icon and label",
			"description":"A tile widget with icon and label"
		},{
			"id":"builder-327",
			"name":"tilelabel",
			"display name":"tileLabel",
			"library":"builder",
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
			"id":"builder-328",
			"name":"mouseup",
			"display name":"mouseUp",
			"library":"builder",
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
			"id":"builder-329",
			"name":"com.livecode.widget.spinner",
			"display name":"com.livecode.widget.spinner",
			"library":"builder",
			"type":"widget",
			"display syntax":[
				"com.livecode.widget.spinner"
			],
			"associations":["com.livecode.widget.spinner"],
			"summary":"This widget is a spinner or activity indicator. Spinners provide visual\nfeedback to users use when performing an activity for an unknown\nduration such as processing a large amount of data or presenting a\ncomplex user interface.",
			"description":"This widget is a spinner or activity indicator. Spinners provide visual\nfeedback to users use when performing an activity for an unknown\nduration such as processing a large amount of data or presenting a\ncomplex user interface."
		},{
			"id":"builder-330",
			"name":"markercount",
			"display name":"markerCount",
			"library":"builder",
			"type":"property",
			"syntax":[
				"set the markerCount of <widget> to <markers>\nget the markerCount of <widget>"
			],
			"display syntax":[
				"set the markerCount of <i>widget</i> to <i>markers</i>"
			],
			"associations":["com.livecode.widget.spinner"],
			"summary":"The number of markers to display in the spinner",
			"value":[{
				"name":"value",
				"type":"",
				"description":"The number of markers to display around the circle"
			}],
			"description":"The markerCount is an integer greater than 4. The default value is 8."
		},{
			"id":"builder-331",
			"name":"scalemarkers",
			"display name":"scaleMarkers",
			"library":"builder",
			"type":"property",
			"syntax":[
				"set the scaleMarkers of <widget> to { true | false }\nget the scaleMarkers of <widget>"
			],
			"display syntax":[
				"set the scaleMarkers of <i>widget</i> to { true | false }"
			],
			"associations":["com.livecode.widget.spinner"],
			"summary":"Whether to scale the markers to or maintain a constant size",
			"value":[{
				"name":"value",
				"type":"",
				"description":"True if markers should be scaled; false otherwise"
			}],
			"description":"If true, the markers will be scaled as in addition to changing\ntransparency. The default value is true.\n"
		},{
			"id":"builder-332",
			"name":"iconlist",
			"display name":"iconList",
			"library":"builder",
			"type":"handler",
			"syntax":[
				"iconList()"
			],
			"display syntax":[
				"iconList()"
			],
			"associations":["com.livecode.library.iconsvg"],
			"summary":"Return the available icons in the current icon family.",
			"value":[{
				"name":"return",
				"type":"",
				"description":"The icon names for which SVG paths are available."
			}],
			"description":"Return an LCB list of the icon names in the iconsvg library's current\nicon family.\n\nFor each icon name, the SVG path string can be obtained with\n<iconSVGPathFromName> or its corresponding codepoint with\n<iconCodepointFromName>.",
			"references":{
				"handler":["iconSVGPathFromName","iconCodepointFromName","iconFamilies","iconListForFamily","iconNames","iconNamesForFamily"]
			}
		},{
			"id":"builder-333",
			"name":"setcurrenticonfamily",
			"display name":"setCurrentIconFamily",
			"library":"builder",
			"type":"handler",
			"syntax":[
				"setCurrentIconFamily(<pFamily>)"
			],
			"display syntax":[
				"setCurrentIconFamily(<i>pFamily</i>)"
			],
			"associations":["com.livecode.library.iconsvg"],
			"summary":"Set the current icon family.",
			"parameters":[{
				"name":"pFamily",
				"type":"",
				"refparam":"false",
				"description":"The icon family."
			}],
			"description":"Sets the iconsvg library's current icon family.  Handlers that do not specify\nan icon family will use the current icon family.",
			"references":{
				"handler":["addIconFamily","iconData","iconFamilies","iconList","iconNames"]
			}
		},{
			"id":"builder-334",
			"name":"icondata",
			"display name":"iconData",
			"library":"builder",
			"type":"handler",
			"syntax":[
				"iconData()"
			],
			"display syntax":[
				"iconData()"
			],
			"associations":["com.livecode.library.iconsvg"],
			"summary":"Return the available icon data in the current icon family.",
			"value":[{
				"name":"return",
				"type":"",
				"description":"The current icon family's data (name, SVG path, codepoint)."
			}],
			"description":"Return an LCB array of the icon data in the iconsvg library's current\nicon family.",
			"references":{
				"handler":["iconList","iconNames"]
			}
		},{
			"id":"builder-335",
			"name":"getcurrenticonfamily",
			"display name":"getCurrentIconFamily",
			"library":"builder",
			"type":"handler",
			"syntax":[
				"getCurrentIconFamily()"
			],
			"display syntax":[
				"getCurrentIconFamily()"
			],
			"associations":["com.livecode.library.iconsvg"],
			"summary":"Return the current icon family.",
			"value":[{
				"name":"return",
				"type":"",
				"description":"The current icon family."
			}],
			"description":"Returns the iconsvg library's current icon family.  Handlers that do not specify\nan icon family will use the current icon family.  \"fontawesome\" is the\ncurrent family when the library is first initialized.",
			"references":{
				"handler":["addIconFamily","iconData","iconFamilies","iconList","iconNames"]
			}
		},{
			"id":"builder-336",
			"name":"iconnamesforfamily",
			"display name":"iconNamesForFamily",
			"library":"builder",
			"type":"handler",
			"syntax":[
				"iconNamesForFamily(<pFamily>)"
			],
			"display syntax":[
				"iconNamesForFamily(<i>pFamily</i>)"
			],
			"associations":["com.livecode.library.iconsvg"],
			"summary":"Returns the available icons in the specified icon family.",
			"parameters":[{
				"name":"pFamily",
				"type":"",
				"refparam":"false",
				"description":"The name of the icon family"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"The icon names for which SVG paths are available, one per line."
			}],
			"description":"The <iconNamesForFamily> handler returns the names of the icons in the \nlibrary of the specified icon family.\n\nCall <iconSVGPathFromName> or <iconCodepointFromName> to retrieve either the\nSVG path string or codepoint corresponding to the icon with this name.",
			"references":{
				"handler":["iconSVGPathFromName","iconCodepointFromName","iconFamilies","iconList","iconListForFamily"]
			}
		},{
			"id":"builder-337",
			"name":"iconarraymatchinginallfamilies",
			"display name":"iconArrayMatchingInAllFamilies",
			"library":"builder",
			"type":"handler",
			"syntax":[
				"iconArrayMatchingInAllFamilies(<pSearch>)"
			],
			"display syntax":[
				"iconArrayMatchingInAllFamilies(<i>pSearch</i>)"
			],
			"associations":["com.livecode.library.iconsvg"],
			"summary":"Return the available icons in all icon families that match the\nsearch string.",
			"parameters":[{
				"name":"pSearch",
				"type":"",
				"refparam":"false",
				"description":"The string used to search icon names."
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"Each key is a family that contained icon matches to the\nsearch string.  Each value is a list of the icon matches."
			}],
			"description":"Returns an array of families with icon names matching the search string.\nEach value is a list of the icon matches.\n\nFor each icon name, the SVG path string can be obtained with\n<iconSVGPathFromName> or its corresponding codepoint with\n<iconCodepointFromName>.",
			"references":{
				"handler":["iconSVGPathFromName","iconCodepointFromName","iconList","iconListForFamily"]
			}
		},{
			"id":"builder-338",
			"name":"icondataforfamily",
			"display name":"iconDataForFamily",
			"library":"builder",
			"type":"handler",
			"syntax":[
				"iconDataForFamily(<pFamily>)"
			],
			"display syntax":[
				"iconDataForFamily(<i>pFamily</i>)"
			],
			"associations":["com.livecode.library.iconsvg"],
			"summary":"Return the available icon data in the specified icon family.",
			"parameters":[{
				"name":"pFamily",
				"type":"",
				"refparam":"false",
				"description":"The name of the icon family"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"The specified icon family's data (name, SVG path, codepoint)."
			}],
			"description":"Return an LCB array of the icon data in the iconsvg library's specified\nicon family.",
			"references":{
				"handler":["addIconFamily","deleteIconFamily","iconFamilies","iconListForFamily","iconNamesForFamily"]
			}
		},{
			"id":"builder-339",
			"name":"addiconfamily",
			"display name":"addIconFamily",
			"library":"builder",
			"type":"handler",
			"syntax":[
				"addIconFamily(<pFamily>,<pIconData>)"
			],
			"display syntax":[
				"addIconFamily(<i>pFamily</i>,<i>pIconData</i>)"
			],
			"associations":["com.livecode.library.iconsvg"],
			"summary":"Add an icon family to the iconsvg library.",
			"parameters":[{
				"name":"pFamily",
				"type":"",
				"refparam":"false",
				"description":"The family for the icons."
			},{
				"name":"pIconData",
				"type":"",
				"refparam":"false",
				"description":"The icon data.  Each key is an icon name with\na key for the SVG data and a key for the codepoint."
			}],
			"description":"Add icons to the iconsvg library.\n\n> Note:  If the family already exists, then the data will be merged.\nIcons with matching names will be replaced.\nTo replace a family, use <deleteIconFamily> first.",
			"references":{
				"handler":["addIcon","deleteIconFamily","iconFamilies","iconList","iconListForFamily","iconNames","iconNamesForFamily"]
			}
		},{
			"id":"builder-340",
			"name":"deleteiconfamily",
			"display name":"deleteIconFamily",
			"library":"builder",
			"type":"handler",
			"syntax":[
				"deleteIconFamily(<pFamily>)"
			],
			"display syntax":[
				"deleteIconFamily(<i>pFamily</i>)"
			],
			"associations":["com.livecode.library.iconsvg"],
			"summary":"Delete an icon family from the iconsvg library.",
			"parameters":[{
				"name":"pFamily",
				"type":"",
				"refparam":"false",
				"description":"The family to delete."
			}],
			"description":"Delete an icon family from the iconsvg library.\n\n> Note:  The current icon family may not be deleted.",
			"references":{
				"handler":["addIconFamily","iconFamilies","iconListForFamily","iconNamesForFamily"]
			}
		},{
			"id":"builder-341",
			"name":"iconcodepointfromname",
			"display name":"iconCodepointFromName",
			"library":"builder",
			"type":"handler",
			"syntax":[
				"iconCodepointFromName(<pName>)"
			],
			"display syntax":[
				"iconCodepointFromName(<i>pName</i>)"
			],
			"associations":["com.livecode.library.iconsvg"],
			"summary":"Returns the codepoint corresponding to the given icon in the current font.",
			"parameters":[{
				"name":"pName",
				"type":"",
				"refparam":"false",
				"description":"The name of the icon"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"The codepoint of the icon with name <pName>"
			}],
			"description":"Returns the codepoint corresponding to the icon with name <pName> in the \ncurrent font.  Use the <iconNames> handler to obtain the names of the \nicons for which this library is able to access SVG paths.\n\n>Note:  The icon name is accepted in the form \"name\" or \"family/name\".  \nIf no family is specified, then the current family is searched first.  \nIf not found, other families are searched for the provided name.",
			"references":{
				"handler":["iconNames","iconNamesForFamily"]
			}
		},{
			"id":"builder-342",
			"name":"iconnames",
			"display name":"iconNames",
			"library":"builder",
			"type":"handler",
			"syntax":[
				"iconNames()"
			],
			"display syntax":[
				"iconNames()"
			],
			"associations":["com.livecode.library.iconsvg"],
			"summary":"Returns the available icons in the current icon family.",
			"value":[{
				"name":"return",
				"type":"",
				"description":"The icon names for which SVG paths are available,\none per line."
			}],
			"description":"The <iconNames> handler returns the names of the icons in the library's\ncurrent icon family.\n\nCall <iconSVGPathFromName> or <iconCodepointFromName> to retrieve either the\nSVG path string or codepoint corresponding to the icon with this name.",
			"references":{
				"handler":["iconSVGPathFromName","iconCodepointFromName","iconFamilies","iconList","iconListForFamily","iconNamesForFamily"]
			}
		},{
			"id":"builder-343",
			"name":"iconlistforfamily",
			"display name":"iconListForFamily",
			"library":"builder",
			"type":"handler",
			"syntax":[
				"iconListForFamily(<pFamily>)"
			],
			"display syntax":[
				"iconListForFamily(<i>pFamily</i>)"
			],
			"associations":["com.livecode.library.iconsvg"],
			"summary":"Return the available icons in the specified icon family.",
			"parameters":[{
				"name":"pFamily",
				"type":"",
				"refparam":"false",
				"description":"The name of the icon family"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"The icon names for which SVG paths are available."
			}],
			"description":"Return an LCB list of the icon names of the specified family in the \niconsvg library.\n\nFor each icon name, the SVG path string can be obtained with\n<iconSVGPathFromName> or its corresponding codepoint with\n<iconCodepointFromName>.",
			"references":{
				"handler":["iconSVGPathFromName","iconCodepointFromName","iconFamilies","iconNames","iconNamesForFamily"]
			}
		},{
			"id":"builder-344",
			"name":"iconlistmatching",
			"display name":"iconListMatching",
			"library":"builder",
			"type":"handler",
			"syntax":[
				"iconListMatching(<pSearch>)"
			],
			"display syntax":[
				"iconListMatching(<i>pSearch</i>)"
			],
			"associations":["com.livecode.library.iconsvg"],
			"summary":"Return the available icons in the current icon family that match the\nsearch string.",
			"parameters":[{
				"name":"pSearch",
				"type":"",
				"refparam":"false",
				"description":"The string used to search icon names."
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"The icon names for which SVG paths are available matching\nthe search string."
			}],
			"description":"Return an LCB list of the icon names in the current icon family that match \nthe search string.\n\nFor each icon name, the SVG path string can be obtained with\n<iconSVGPathFromName> or its corresponding codepoint with\n<iconCodepointFromName>.",
			"references":{
				"handler":["iconSVGPathFromName","iconCodepointFromName","iconList","iconListForFamily"]
			}
		},{
			"id":"builder-345",
			"name":"iconsvgpathfromname",
			"display name":"iconSVGPathFromName",
			"library":"builder",
			"type":"handler",
			"syntax":[
				"iconSVGPathFromName(<pName>)"
			],
			"display syntax":[
				"iconSVGPathFromName(<i>pName</i>)"
			],
			"associations":["com.livecode.library.iconsvg"],
			"summary":"Returns the SVG path for the given icon.",
			"parameters":[{
				"name":"pName",
				"type":"",
				"refparam":"false",
				"description":"The name of the icon"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"The SVG path to draw the icon with name <pName>"
			}],
			"description":"Returns the SVG path for the icon with name <pName>. Use the \n<iconNames> handler to obtain the names of the icons for which this \nlibrary is able to access SVG paths.\n\n>Note:  The icon name is accepted in the form \"name\" or \"family/name\".  \nIf no family is specified, then the current family is searched first.  \nIf not found, other families are searched for the provided name.",
			"references":{
				"handler":["iconNames","iconNamesForFamily"]
			}
		},{
			"id":"builder-346",
			"name":"com.livecode.library.iconsvg",
			"display name":"com.livecode.library.iconsvg",
			"library":"builder",
			"type":"library",
			"display syntax":[
				"com.livecode.library.iconsvg"
			],
			"associations":["com.livecode.library.iconsvg"],
			"summary":"This is an SVG icon path library.",
			"description":"This is an SVG icon path library."
		},{
			"id":"builder-347",
			"name":"addicon",
			"display name":"addIcon",
			"library":"builder",
			"type":"handler",
			"syntax":[
				"addIcon(<pName>,<pSVG>,<pCodepoint>)"
			],
			"display syntax":[
				"addIcon(<i>pName</i>,<i>pSVG</i>,<i>pCodepoint</i>)"
			],
			"associations":["com.livecode.library.iconsvg"],
			"summary":"Add an icon to the iconsvg library.",
			"parameters":[{
				"name":"pName",
				"type":"",
				"refparam":"false",
				"description":"The name of the icon.  By default, new icons are added to the\n\"custom\" family.  The family may be specified by including the family \nname and a \"/\" before the icon name (`bootstrap/adjust`)."
			},{
				"name":"pSVG",
				"type":"",
				"refparam":"false",
				"description":"The SVG path for the icon."
			},{
				"name":"pCodepoint",
				"type":"",
				"refparam":"false",
				"description":"The codepoint for the icon."
			}],
			"description":"Add an icon to the iconsvg library.  By default, new icons are added to\nthe \"custom\" family.  The family may be specified by including the \nfamily name and a \"/\" before the icon name (`bootstrap/adjust`).",
			"references":{
				"handler":["addIconFamily","iconFamilies","iconList","iconListForFamily","iconNames","iconNamesForFamily"]
			}
		},{
			"id":"builder-348",
			"name":"iconfamilies",
			"display name":"iconFamilies",
			"library":"builder",
			"type":"handler",
			"syntax":[
				"iconFamilies()"
			],
			"display syntax":[
				"iconFamilies()"
			],
			"associations":["com.livecode.library.iconsvg"],
			"summary":"Returns the available icons families.",
			"value":[{
				"name":"return",
				"type":"",
				"description":"The icon family names for which SVG paths are available, one per line."
			}],
			"description":"The <iconFamilies> handler returns the names of the families in the icon library.",
			"references":{
				"handler":["iconSVGPathFromName","iconCodepointFromName","iconList","iconListForFamily","iconNames","iconNamesForFamily"]
			}
		},{
			"id":"builder-349",
			"name":"bordercolor",
			"display name":"borderColor",
			"library":"builder",
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
			"id":"builder-350",
			"name":"hilitechanged",
			"display name":"hiliteChanged",
			"library":"builder",
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
			"id":"builder-351",
			"name":"itemnames",
			"display name":"itemNames",
			"library":"builder",
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
			"id":"builder-352",
			"name":"hiliteditemicons",
			"display name":"hilitedItemIcons",
			"library":"builder",
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
			"id":"builder-353",
			"name":"opaque",
			"display name":"opaque",
			"library":"builder",
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
			"id":"builder-354",
			"name":"editmode",
			"display name":"editMode",
			"library":"builder",
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
			"id":"builder-355",
			"name":"itemstyle",
			"display name":"itemStyle",
			"library":"builder",
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
			"id":"builder-356",
			"name":"itemicons",
			"display name":"itemIcons",
			"library":"builder",
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
			"id":"builder-357",
			"name":"hiliteditem",
			"display name":"hilitedItem",
			"library":"builder",
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
			"id":"builder-358",
			"name":"itemlabels",
			"display name":"itemLabels",
			"library":"builder",
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
			"id":"builder-359",
			"name":"hilitecolor",
			"display name":"hiliteColor",
			"library":"builder",
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
			"id":"builder-360",
			"name":"showborder",
			"display name":"showBorder",
			"library":"builder",
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
			"id":"builder-361",
			"name":"itemarray",
			"display name":"itemArray",
			"library":"builder",
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
			"id":"builder-362",
			"name":"forecolor",
			"display name":"foreColor",
			"library":"builder",
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
			"id":"builder-363",
			"name":"hiliteditemname",
			"display name":"hilitedItemName",
			"library":"builder",
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
			"id":"builder-364",
			"name":"com.livecode.widget.navbar",
			"display name":"com.livecode.widget.navbar",
			"library":"builder",
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
			"id":"builder-365",
			"name":"backcolor",
			"display name":"backColor",
			"library":"builder",
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
			"id":"builder-366",
			"name":"desiredheight",
			"display name":"desiredHeight",
			"library":"builder",
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
			"id":"builder-367",
			"name":"com.livecode.widget.native.mac.button",
			"display name":"com.livecode.widget.native.mac.button",
			"library":"builder",
			"type":"widget",
			"display syntax":[
				"com.livecode.widget.native.mac.button"
			],
			"associations":["com.livecode.widget.native.mac.button"],
			"summary":"This widget is a native push button on Mac.",
			"OS":["mac"],
			"description":"This widget is a native push button on Mac."
		},{
			"id":"builder-368",
			"name":"enabled",
			"display name":"enabled",
			"library":"builder",
			"type":"property",
			"syntax":[
				"set the enabled of <widget> to {true | false}\nget the enabled of <widget>"
			],
			"display syntax":[
				"set the enabled of <i>widget</i> to {true | false}"
			],
			"associations":["com.livecode.widget.native.mac.button"],
			"summary":"Whether the button is active and responds to user action",
			"OS":["mac"],
			"description":"Use the <enabled> property to enable or disable the native button. When\ndisabled, the button has a greyed out appearance and does not accept \nclicks or touches."
		},{
			"id":"builder-369",
			"name":"label",
			"display name":"label",
			"library":"builder",
			"type":"property",
			"syntax":[
				"set the label of <widget> to <pLabel>\nget the label of <widget>"
			],
			"display syntax":[
				"set the label of <i>widget</i> to <i>pLabel</i>"
			],
			"associations":["com.livecode.widget.native.mac.button"],
			"summary":"The label displayed by the button.",
			"OS":["mac"],
			"examples":[{
				"script":"set the label of widget \"Mac Button\" to \"Click me!\""
			}],
			"value":[{
				"name":"value",
				"type":"",
				"description":"The string to use as the button label"
			}],
			"description":"The <label> property is the label displayed by the button.\n"
		},{
			"id":"builder-370",
			"name":"repeatwhile",
			"display name":"RepeatWhile",
			"library":"builder",
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
			"id":"builder-371",
			"name":"if",
			"display name":"If",
			"library":"builder",
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
			"id":"builder-372",
			"name":"putinto",
			"display name":"PutInto",
			"library":"builder",
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
			"id":"builder-373",
			"name":"throwerror",
			"display name":"ThrowError",
			"library":"builder",
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
			"id":"builder-374",
			"name":"nextrepeat",
			"display name":"NextRepeat",
			"library":"builder",
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
			"id":"builder-375",
			"name":"theresult",
			"display name":"TheResult",
			"library":"builder",
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
			"id":"builder-376",
			"name":"return",
			"display name":"Return",
			"library":"builder",
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
			"id":"builder-377",
			"name":"exitrepeat",
			"display name":"ExitRepeat",
			"library":"builder",
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
			"id":"builder-378",
			"name":"get",
			"display name":"Get",
			"library":"builder",
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
			"id":"builder-379",
			"name":"repeatforeach",
			"display name":"RepeatForEach",
			"library":"builder",
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
			"id":"builder-380",
			"name":"repeatuntil",
			"display name":"RepeatUntil",
			"library":"builder",
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
			"id":"builder-381",
			"name":"repeatforever",
			"display name":"RepeatForever",
			"library":"builder",
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
			"id":"builder-382",
			"name":"repeatwith",
			"display name":"RepeatWith",
			"library":"builder",
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
			"id":"builder-383",
			"name":"com.livecode.language",
			"display name":"com.livecode.language",
			"library":"builder",
			"type":"",
			"display syntax":[
				"com.livecode.language"
			],
			"associations":["com.livecode.language"]
		},{
			"id":"builder-384",
			"name":"repeattimes",
			"display name":"RepeatTimes",
			"library":"builder",
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
			"id":"builder-385",
			"name":"setto",
			"display name":"SetTo",
			"library":"builder",
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
			"id":"builder-386",
			"name":"booleanisequaltoboolean",
			"display name":"BooleanIsEqualToBoolean",
			"library":"builder",
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
			"id":"builder-387",
			"name":"booleanformattedasstring",
			"display name":"BooleanFormattedAsString",
			"library":"builder",
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
			"id":"builder-388",
			"name":"logicnot",
			"display name":"LogicNot",
			"library":"builder",
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
			"id":"builder-389",
			"name":"booleanisnotequaltoboolean",
			"display name":"BooleanIsNotEqualToBoolean",
			"library":"builder",
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
			"id":"builder-390",
			"name":"formatbooleanasstring",
			"display name":"FormatBooleanAsString",
			"library":"builder",
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
			"id":"builder-391",
			"name":"stringparsedasboolean",
			"display name":"StringParsedAsBoolean",
			"library":"builder",
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
			"id":"builder-392",
			"name":"parsestringasboolean",
			"display name":"ParseStringAsBoolean",
			"library":"builder",
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
			"id":"builder-393",
			"name":"com.livecode.logic",
			"display name":"com.livecode.logic",
			"library":"builder",
			"type":"module",
			"display syntax":[
				"com.livecode.logic"
			],
			"associations":["com.livecode.logic"],
			"summary":"This library consists of the logical operations included in the standard library of LiveCode Builder.",
			"description":"This library consists of the logical operations included in the standard library of LiveCode Builder."
		},{
			"id":"builder-394",
			"name":"firstelementof",
			"display name":"FirstElementOf",
			"library":"builder",
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
			"id":"builder-395",
			"name":"com.livecode.list",
			"display name":"com.livecode.list",
			"library":"builder",
			"type":"module",
			"display syntax":[
				"com.livecode.list"
			],
			"associations":["com.livecode.list"],
			"summary":"This library consists of the operations on lists included in the standard library of LiveCode Builder.",
			"description":"This library consists of the operations on lists included in the standard library of LiveCode Builder."
		},{
			"id":"builder-396",
			"name":"repeatforeachelementinlist",
			"display name":"RepeatForEachElementInList",
			"library":"builder",
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
			"id":"builder-397",
			"name":"splicebeforeelementoflist",
			"display name":"SpliceBeforeElementOfList",
			"library":"builder",
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
			"id":"builder-398",
			"name":"listoffset",
			"display name":"ListOffset",
			"library":"builder",
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
			"id":"builder-399",
			"name":"pushontolist",
			"display name":"PushOntoList",
			"library":"builder",
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
			"id":"builder-400",
			"name":"listindexafter",
			"display name":"ListIndexAfter",
			"library":"builder",
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
			"id":"builder-401",
			"name":"concatenatelists",
			"display name":"ConcatenateLists",
			"library":"builder",
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
			"id":"builder-402",
			"name":"reverseelementsoflist",
			"display name":"ReverseElementsOfList",
			"library":"builder",
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
			"id":"builder-403",
			"name":"deletesingletonelementof",
			"display name":"DeleteSingletonElementOf",
			"library":"builder",
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
			"id":"builder-404",
			"name":"singletonelementoflist",
			"display name":"SingletonElementOfList",
			"library":"builder",
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
			"id":"builder-405",
			"name":"listendswithlist",
			"display name":"ListEndsWithList",
			"library":"builder",
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
			"id":"builder-406",
			"name":"listindexbefore",
			"display name":"ListIndexBefore",
			"library":"builder",
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
			"id":"builder-407",
			"name":"spliceintorangeoflist",
			"display name":"SpliceIntoRangeOfList",
			"library":"builder",
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
			"id":"builder-408",
			"name":"poplist",
			"display name":"PopList",
			"library":"builder",
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
			"id":"builder-409",
			"name":"headoflist",
			"display name":"HeadOfList",
			"library":"builder",
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
			"id":"builder-410",
			"name":"spliceintoelementoflist",
			"display name":"SpliceIntoElementOfList",
			"library":"builder",
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
			"id":"builder-411",
			"name":"listcontainselements",
			"display name":"ListContainsElements",
			"library":"builder",
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
			"id":"builder-412",
			"name":"emptylist",
			"display name":"EmptyList",
			"library":"builder",
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
			"id":"builder-413",
			"name":"countelementsoflist",
			"display name":"CountElementsOfList",
			"library":"builder",
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
			"id":"builder-414",
			"name":"deleterangeelementof",
			"display name":"DeleteRangeElementOf",
			"library":"builder",
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
			"id":"builder-415",
			"name":"indexedelementoflist",
			"display name":"IndexedElementOfList",
			"library":"builder",
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
			"id":"builder-416",
			"name":"tailoflist",
			"display name":"TailOfList",
			"library":"builder",
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
			"id":"builder-417",
			"name":"listislist",
			"display name":"ListIsList",
			"library":"builder",
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
			"id":"builder-418",
			"name":"listoffsetafter",
			"display name":"ListOffsetAfter",
			"library":"builder",
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
			"id":"builder-419",
			"name":"listindex",
			"display name":"ListIndex",
			"library":"builder",
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
			"id":"builder-420",
			"name":"listoffsetbefore",
			"display name":"ListOffsetBefore",
			"library":"builder",
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
			"id":"builder-421",
			"name":"deletefirstelementof",
			"display name":"DeleteFirstElementOf",
			"library":"builder",
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
			"id":"builder-422",
			"name":"spliceafterelementoflist",
			"display name":"SpliceAfterElementOfList",
			"library":"builder",
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
			"id":"builder-423",
			"name":"listbeginswithlist",
			"display name":"ListBeginsWithList",
			"library":"builder",
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
			"id":"builder-424",
			"name":"rangeelementsoflist",
			"display name":"RangeElementsOfList",
			"library":"builder",
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
			"id":"builder-425",
			"name":"elementisinlist",
			"display name":"ElementIsInList",
			"library":"builder",
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
			"id":"builder-426",
			"name":"lastelementof",
			"display name":"LastElementOf",
			"library":"builder",
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
			"id":"builder-427",
			"name":"deletelastelementof",
			"display name":"DeleteLastElementOf",
			"library":"builder",
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
			"id":"builder-428",
			"name":"listisnotlist",
			"display name":"ListIsNotList",
			"library":"builder",
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
			"id":"builder-429",
			"name":"paintplaceholderimage",
			"display name":"paintPlaceholderImage",
			"library":"builder",
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
			"id":"builder-430",
			"name":"constrainpathtorect",
			"display name":"constrainPathToRect",
			"library":"builder",
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
			"id":"builder-431",
			"name":"stringtocolor",
			"display name":"stringToColor",
			"library":"builder",
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
			"id":"builder-432",
			"name":"inttostring",
			"display name":"intToString",
			"library":"builder",
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
			"id":"builder-433",
			"name":"stripzeros",
			"display name":"stripZeros",
			"library":"builder",
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
			"id":"builder-434",
			"name":"colortostring",
			"display name":"colorToString",
			"library":"builder",
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
			"id":"builder-435",
			"name":"placeholdericon",
			"display name":"placeholderIcon",
			"library":"builder",
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
			"id":"builder-436",
			"name":"getnativethemename",
			"display name":"getNativeThemeName",
			"library":"builder",
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
			"id":"builder-437",
			"name":"com.livecode.library.widgetutils",
			"display name":"com.livecode.library.widgetutils",
			"library":"builder",
			"type":"module",
			"display syntax":[
				"com.livecode.library.widgetutils"
			],
			"associations":["com.livecode.library.widgetutils"],
			"summary":"A library of utility handlers for functions commonly needed by widgets.",
			"description":"A library of utility handlers for functions commonly needed by widgets."
		},{
			"id":"builder-438",
			"name":"numbertonsnumber",
			"display name":"NumberToNSNumber",
			"library":"builder",
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
			"id":"builder-439",
			"name":"listfromnsarray",
			"display name":"ListFromNSArray",
			"library":"builder",
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
			"id":"builder-440",
			"name":"createobjcinformaldelegatewithcontext",
			"display name":"CreateObjcInformalDelegateWithContext",
			"library":"builder",
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
			"id":"builder-441",
			"name":"createobjcdelegate",
			"display name":"CreateObjcDelegate",
			"library":"builder",
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
			"id":"builder-442",
			"name":"arrayfromnsdictionary",
			"display name":"ArrayFromNSDictionary",
			"library":"builder",
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
			"id":"builder-443",
			"name":"stringfromnsstring",
			"display name":"StringFromNSString",
			"library":"builder",
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
			"id":"builder-444",
			"name":"createobjcblockpointerfromhandler",
			"display name":"CreateObjcBlockPointerFromHandler",
			"library":"builder",
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
			"id":"builder-445",
			"name":"createobjcdelegatewithcontext",
			"display name":"CreateObjcDelegateWithContext",
			"library":"builder",
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
			"id":"builder-446",
			"name":"datatonsdata",
			"display name":"DataToNSData",
			"library":"builder",
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
			"id":"builder-447",
			"name":"stringtonsstring",
			"display name":"StringToNSString",
			"library":"builder",
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
			"id":"builder-448",
			"name":"listtonsarray",
			"display name":"ListToNSArray",
			"library":"builder",
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
			"id":"builder-449",
			"name":"pointerfromobjcobject",
			"display name":"PointerFromObjcObject",
			"library":"builder",
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
			"id":"builder-450",
			"name":"pointertoobjcobject",
			"display name":"PointerToObjcObject",
			"library":"builder",
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
			"id":"builder-451",
			"name":"arraytonsdictionary",
			"display name":"ArrayToNSDictionary",
			"library":"builder",
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
			"id":"builder-452",
			"name":"createobjcinformaldelegate",
			"display name":"CreateObjcInformalDelegate",
			"library":"builder",
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
			"id":"builder-453",
			"name":"datafromnsdata",
			"display name":"DataFromNSData",
			"library":"builder",
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
			"id":"builder-454",
			"name":"com.livecode.objc",
			"display name":"com.livecode.objc",
			"library":"builder",
			"type":"module",
			"display syntax":[
				"com.livecode.objc"
			],
			"associations":["com.livecode.objc"],
			"summary":"This module provides utility handlers for converting to and from Obj-C types.",
			"description":"This module provides utility handlers for converting to and from Obj-C types."
		},{
			"id":"builder-455",
			"name":"numberfromnsnumber",
			"display name":"NumberFromNSNumber",
			"library":"builder",
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
			"id":"builder-456",
			"name":"deleteobjcblockpointer",
			"display name":"DeleteObjcBlockPointer",
			"library":"builder",
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
			"id":"builder-457",
			"name":"flipped",
			"display name":"flipped",
			"library":"builder",
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
			"id":"builder-458",
			"name":"iconpresetname",
			"display name":"iconPresetName",
			"library":"builder",
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
			"id":"builder-459",
			"name":"iconname",
			"display name":"iconName",
			"library":"builder",
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
			"id":"builder-460",
			"name":"iconpath",
			"display name":"iconPath",
			"library":"builder",
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
			"id":"builder-461",
			"name":"scaledwidth",
			"display name":"scaledWidth",
			"library":"builder",
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
			"id":"builder-462",
			"name":"angle",
			"display name":"angle",
			"library":"builder",
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
			"id":"builder-463",
			"name":"highlight",
			"display name":"highlight",
			"library":"builder",
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
			"id":"builder-464",
			"name":"scaledheight",
			"display name":"scaledHeight",
			"library":"builder",
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
			"id":"builder-465",
			"name":"maintainaspectratio",
			"display name":"maintainAspectRatio",
			"library":"builder",
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
			"id":"builder-466",
			"name":"fillrule",
			"display name":"fillRule",
			"library":"builder",
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
			"id":"builder-467",
			"name":"com.livecode.widget.svgpath",
			"display name":"com.livecode.widget.svgpath",
			"library":"builder",
			"type":"widget",
			"display syntax":[
				"com.livecode.widget.svgpath"
			],
			"associations":["com.livecode.widget.svgpath"],
			"summary":"This widget displays an SVG path as an icon.  It has a default state and a\n\"highlighted\" state.",
			"description":"This widget displays an SVG path as an icon.  It has a default state and a\n\"highlighted\" state."
		},{
			"id":"builder-468",
			"name":"com.livecode.library.timezone",
			"display name":"com.livecode.library.timezone",
			"library":"builder",
			"type":"library",
			"display syntax":[
				"com.livecode.library.timezone"
			],
			"associations":["com.livecode.library.timezone"],
			"summary":"This library provides access to the tz timezone database",
			"description":"This library provides access to the tz timezone database"
		},{
			"id":"builder-469",
			"name":"fromuniversaltime",
			"display name":"FromUniversalTime",
			"library":"builder",
			"type":"handler",
			"syntax":[
				"FromUniversalTime(<pSeconds>,<pTimeZone>)"
			],
			"display syntax":[
				"FromUniversalTime(<i>pSeconds</i>,<i>pTimeZone</i>)"
			],
			"associations":["com.livecode.library.timezone"],
			"summary":"Convert universal time to local time",
			"parameters":[{
				"name":"pSeconds",
				"type":"",
				"refparam":"false",
				"description":"The universal time, i.e. seconds since the beginning of the epoch."
			},{
				"name":"pTimeZone",
				"type":"",
				"refparam":"false",
				"description":"The time zone, in the form returned by the <TimeZones> function."
			}],
			"examples":[{
				"script":"local tDateTime\nput \"2018,2,14,13,38,0,4\" into tDateTime\nconvert tDateTime to seconds\nput FromUniversalTime(tDateTime, \"Antarctica/Vostok\") into tDateTime\nconvert tDateTime to dateitems\n-- tDateTime contains \"2018,2,14,19,38,0,4\""
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"The local time"
			}],
			"description":"Use the <FromUniversalTime> function to find the local time for the \nspecified timezone, given the universal time.",
			"references":{
				"handler":["TimeZones"]
			},
			"tags":["datetime","library"]
		},{
			"id":"builder-470",
			"name":"touniversaltime",
			"display name":"ToUniversalTime",
			"library":"builder",
			"type":"handler",
			"syntax":[
				"ToUniversalTime(<pSeconds>,<pTimeZone>)"
			],
			"display syntax":[
				"ToUniversalTime(<i>pSeconds</i>,<i>pTimeZone</i>)"
			],
			"associations":["com.livecode.library.timezone"],
			"summary":"Convert local time to universal time",
			"parameters":[{
				"name":"pSeconds",
				"type":"",
				"refparam":"false",
				"description":"The local time"
			},{
				"name":"pTimeZone",
				"type":"",
				"refparam":"false",
				"description":"The time zone, in the form returned by the <TimeZones> function."
			}],
			"examples":[{
				"script":"local tDateTime\nput \"2018,2,14,13,38,0,4\" into tDateTime\nconvert tDateTime to seconds\nput ToUniversalTime(tDateTime, \"Africa/Windhoek\") into tDateTime\nconvert tDateTime to dateitems\n-- tDateTime contains \"2018,2,14,11,38,0,4\""
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"The universal time"
			}],
			"description":"Use the <ToUniversalTime> function to find the universal time, given the \nlocal time for the specified time zone. ",
			"references":{
				"handler":["TimeZones"]
			},
			"tags":["datetime","library"]
		},{
			"id":"builder-471",
			"name":"timezones",
			"display name":"TimeZones",
			"library":"builder",
			"type":"handler",
			"syntax":[
				"TimeZones()"
			],
			"display syntax":[
				"TimeZones()"
			],
			"associations":["com.livecode.library.timezone"],
			"summary":"List the time zones used by the Time zone library",
			"examples":[{
				"script":"-- List all time zones and their times\nlocal tList, tTime, tData\nput the seconds into tTime\nrepeat for each line tLine in TimeZones()\n   put tLine & tab & FromUniversalTime(tTime, tLine) into tData\n   if tList is empty then\n      put tData into tList\n   else\n      put tData & return after tList\n   end if\nend repeat"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"A list of time zones, one per line."
			}],
			"description":"Use the <TimeZones> function to find a list of valid timezones used by <ToUniversalTime> and <FromUniversalTime>,",
			"references":{
				"handler":["ToUniversalTime","FromUniversalTime"]
			},
			"tags":["datetime","library"]
		},{
			"id":"builder-472",
			"name":"showselectedelement",
			"display name":"showSelectedElement",
			"library":"builder",
			"type":"property",
			"syntax":[
				"set the showSelectedElement of <widget> to {true | false}\nget the showSelectedElement of <widget>"
			],
			"display syntax":[
				"set the showSelectedElement of <i>widget</i> to {true | false}"
			],
			"associations":["com.livecode.widget.iconpicker"],
			"summary":"Controls whether a title bar is drawn displaying the currently selected icon",
			"description":"Controls whether a title bar is drawn displaying the currently selected icon"
		},{
			"id":"builder-473",
			"name":"selectedicon",
			"display name":"selectedIcon",
			"library":"builder",
			"type":"property",
			"syntax":[
				"set the selectedIcon of <widget> to pIcon\nget the selectedIcon of <widget>"
			],
			"display syntax":[
				"set the selectedIcon of <i>widget</i> to pIcon"
			],
			"associations":["com.livecode.widget.iconpicker"],
			"summary":"The selected icon name",
			"value":[{
				"name":"value",
				"type":"",
				"description":"An icon name, from the IconSVG library"
			}],
			"description":"The selected icon name"
		},{
			"id":"builder-474",
			"name":"filterstring",
			"display name":"filterString",
			"library":"builder",
			"type":"property",
			"syntax":[
				"set the filterString of <widget> to pString\nget the filterString of <widget>"
			],
			"display syntax":[
				"set the filterString of <i>widget</i> to pString"
			],
			"associations":["com.livecode.widget.iconpicker"],
			"summary":"Filters the list of icons to display according to a string",
			"description":"Filters the list of icons to display according to a string"
		},{
			"id":"builder-475",
			"name":"showframeborder",
			"display name":"showFrameBorder",
			"library":"builder",
			"type":"property",
			"syntax":[
				"set the showFrameBorder of <widget> to {true | false}\nget the showFrameBorder of <widget>"
			],
			"display syntax":[
				"set the showFrameBorder of <i>widget</i> to {true | false}"
			],
			"associations":["com.livecode.widget.iconpicker"],
			"summary":"Whether the icon picker has a border or not",
			"description":"Whether the icon picker has a border or not"
		},{
			"id":"builder-476",
			"name":"iconsize",
			"display name":"iconSize",
			"library":"builder",
			"type":"property",
			"syntax":[
				"set the iconSize of <widget> to pSize\nget the iconSize of <widget>"
			],
			"display syntax":[
				"set the iconSize of <i>widget</i> to pSize"
			],
			"associations":["com.livecode.widget.iconpicker"],
			"summary":"The width and height of the rectangles in which the icons are rendered",
			"value":[{
				"name":"value",
				"type":"",
				"description":"A two-item list with the width and height of the rect in which the icons are rendered"
			}],
			"description":"The width and height of the rectangles in which the icons are rendered"
		},{
			"id":"builder-477",
			"name":"preferredsize",
			"display name":"preferredSize",
			"library":"builder",
			"type":"property",
			"syntax":[
				"get the preferredSize of <widget>"
			],
			"display syntax":[
				"get the preferredSize of <i>widget</i>"
			],
			"associations":["com.livecode.widget.iconpicker"],
			"summary":"The preferred size of the widget.",
			"value":[{
				"name":"value",
				"type":"",
				"description":"A two-item list with the width and height needed to display the widget\nwith the current display preferences."
			}],
			"description":"The <preferredSize> property is used when the icon widget is popped up\nusing the 'popup widget' syntax"
		},{
			"id":"builder-478",
			"name":"shownames",
			"display name":"showNames",
			"library":"builder",
			"type":"property",
			"syntax":[
				"set the showNames of <widget> to {true | false}\nget the showNames of <widget>"
			],
			"display syntax":[
				"set the showNames of <i>widget</i> to {true | false}"
			],
			"associations":["com.livecode.widget.iconpicker"],
			"summary":"Whether to display the names of the icons or not\n",
			"description":"Whether to display the names of the icons or not\n"
		},{
			"id":"builder-479",
			"name":"com.livecode.widget.iconpicker",
			"display name":"com.livecode.widget.iconpicker",
			"library":"builder",
			"type":"widget",
			"display syntax":[
				"com.livecode.widget.iconpicker"
			],
			"associations":["com.livecode.widget.iconpicker"],
			"summary":"This widget is an icon picker, using icons from the iconSVG library.",
			"description":"This widget is an icon picker, using icons from the iconSVG library."
		},{
			"id":"builder-480",
			"name":"lowercasestring",
			"display name":"LowercaseString",
			"library":"builder",
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
			"id":"builder-481",
			"name":"putstringbefore",
			"display name":"PutStringBefore",
			"library":"builder",
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
			"id":"builder-482",
			"name":"stringisstring",
			"display name":"StringIsString",
			"library":"builder",
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
			"id":"builder-483",
			"name":"emptystring",
			"display name":"EmptyString",
			"library":"builder",
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
			"id":"builder-484",
			"name":"stringisgreaterthanstring",
			"display name":"StringIsGreaterThanString",
			"library":"builder",
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
			"id":"builder-485",
			"name":"uppercasestring",
			"display name":"UppercaseString",
			"library":"builder",
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
			"id":"builder-486",
			"name":"putstringafter",
			"display name":"PutStringAfter",
			"library":"builder",
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
			"id":"builder-487",
			"name":"stringislessthanstring",
			"display name":"StringIsLessThanString",
			"library":"builder",
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
			"id":"builder-488",
			"name":"replacestring",
			"display name":"ReplaceString",
			"library":"builder",
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
			"id":"builder-489",
			"name":"stringisnotstring",
			"display name":"StringIsNotString",
			"library":"builder",
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
			"id":"builder-490",
			"name":"com.livecode.string",
			"display name":"com.livecode.string",
			"library":"builder",
			"type":"module",
			"display syntax":[
				"com.livecode.string"
			],
			"associations":["com.livecode.string"],
			"summary":"This library consists of the operations on strings included in the standard library of LiveCode Builder.",
			"description":"This library consists of the operations on strings included in the standard library of LiveCode Builder."
		},{
			"id":"builder-491",
			"name":"concatenatestringswithspace",
			"display name":"ConcatenateStringsWithSpace",
			"library":"builder",
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
			"id":"builder-492",
			"name":"concatenatestrings",
			"display name":"ConcatenateStrings",
			"library":"builder",
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
			"id":"builder-493",
			"name":"countcodeunitsof",
			"display name":"CountCodeunitsOf",
			"library":"builder",
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
			"id":"builder-494",
			"name":"deletelastcodeunitof",
			"display name":"DeleteLastCodeunitOf",
			"library":"builder",
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
			"id":"builder-495",
			"name":"repeatforeachcodeunit",
			"display name":"RepeatForEachCodeunit",
			"library":"builder",
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
			"id":"builder-496",
			"name":"deletesingletoncodeunitof",
			"display name":"DeleteSingletonCodeunitOf",
			"library":"builder",
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
			"id":"builder-497",
			"name":"codeunitoffset",
			"display name":"CodeunitOffset",
			"library":"builder",
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
			"id":"builder-498",
			"name":"singletoncodeunitof",
			"display name":"SingletonCodeunitOf",
			"library":"builder",
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
			"id":"builder-499",
			"name":"codeunitoffsetafter",
			"display name":"CodeunitOffsetAfter",
			"library":"builder",
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
			"id":"builder-500",
			"name":"lastcodeunitof",
			"display name":"LastCodeunitOf",
			"library":"builder",
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
			"id":"builder-501",
			"name":"deletefirstcodeunitof",
			"display name":"DeleteFirstCodeunitOf",
			"library":"builder",
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
			"id":"builder-502",
			"name":"codeunitoffsetbefore",
			"display name":"CodeunitOffsetBefore",
			"library":"builder",
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
			"id":"builder-503",
			"name":"rangecodeunitof",
			"display name":"RangeCodeunitOf",
			"library":"builder",
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
			"id":"builder-504",
			"name":"com.livecode.codeunit",
			"display name":"com.livecode.codeunit",
			"library":"builder",
			"type":"module",
			"display syntax":[
				"com.livecode.codeunit"
			],
			"associations":["com.livecode.codeunit"],
			"summary":"This library consists of the operations on codeunits included in the standard library of LiveCode Builder.",
			"description":"This library consists of the operations on codeunits included in the standard library of LiveCode Builder."
		},{
			"id":"builder-505",
			"name":"deleterangecodeunitof",
			"display name":"DeleteRangeCodeunitOf",
			"library":"builder",
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
			"id":"builder-506",
			"name":"firstcodeunitof",
			"display name":"FirstCodeunitOf",
			"library":"builder",
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
			"id":"builder-507",
			"name":"com.livecode.library.json",
			"display name":"com.livecode.library.json",
			"library":"builder",
			"type":"library",
			"display syntax":[
				"com.livecode.library.json"
			],
			"associations":["com.livecode.library.json"],
			"summary":"This library provides support for generating and parsing JavaScript\nObject Notation (JSON) data.  See also <http://json.org> and\n<https://tools.ietf.org/html/rfc7159>.",
			"description":"This library provides support for generating and parsing JavaScript\nObject Notation (JSON) data.  See also <http://json.org> and\n<https://tools.ietf.org/html/rfc7159>."
		},{
			"id":"builder-508",
			"name":"jsonimport",
			"display name":"JsonImport",
			"library":"builder",
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
			"id":"builder-509",
			"name":"jsonexport",
			"display name":"JsonExport",
			"library":"builder",
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
			"id":"builder-510",
			"name":"canvassetcolor",
			"display name":"canvasSetColor",
			"library":"builder",
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
			"id":"builder-511",
			"name":"canvasapplytoimage",
			"display name":"canvasApplyToImage",
			"library":"builder",
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
			"id":"builder-512",
			"name":"canvascomputeboundingboxofpath",
			"display name":"canvasComputeBoundingBoxOfPath",
			"library":"builder",
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
			"id":"builder-513",
			"name":"canvasdestroy",
			"display name":"canvasDestroy",
			"library":"builder",
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
			"id":"builder-514",
			"name":"canvasfillcircle",
			"display name":"canvasFillCircle",
			"library":"builder",
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
			"id":"builder-515",
			"name":"canvascreate",
			"display name":"canvasCreate",
			"library":"builder",
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
			"id":"builder-516",
			"name":"com.livecode.library.canvas",
			"display name":"com.livecode.library.canvas",
			"library":"builder",
			"type":"library",
			"display syntax":[
				"com.livecode.library.canvas"
			],
			"associations":["com.livecode.library.canvas"],
			"summary":"Gives access to the LiveCode Builder canvas syntax from LiveCode Script",
			"description":"This library wraps a few simple handlers of the LiveCode Builder Canvas\nmodule to provide access to the syntax for creating and manipulating\ncanvas objects.\n\nFor example:\n\n    canvasCreate 100, 100\n\tcanvasSetColor 1, 0, 0, 1\n\tcanvasFillCircle 50, 50, 25\n\tcanvasApplyToImage \"image 1\"\n    canvasDestroy\n\nThis creates a canvas of size 100x100, fills a circle of radius 25 at\nthe centre, then copies the contents of the canvas to 'image 1' (which\nmust already exist)."
		},{
			"id":"builder-518",
			"name":"listofstringparsedaslistofnumber",
			"display name":"ListOfStringParsedAsListOfNumber",
			"library":"builder",
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
			"id":"builder-519",
			"name":"plusunaryoperator",
			"display name":"PlusUnaryOperator",
			"library":"builder",
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
			"id":"builder-520",
			"name":"numberformattedasstring",
			"display name":"NumberFormattedAsString",
			"library":"builder",
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
			"id":"builder-521",
			"name":"plusoperator",
			"display name":"PlusOperator",
			"library":"builder",
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
			"id":"builder-522",
			"name":"minusunaryoperator",
			"display name":"MinusUnaryOperator",
			"library":"builder",
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
			"id":"builder-523",
			"name":"numberisgreaterthanorequaltonumber",
			"display name":"NumberIsGreaterThanOrEqualToNumber",
			"library":"builder",
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
			"id":"builder-524",
			"name":"addnumberto",
			"display name":"AddNumberTo",
			"library":"builder",
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
			"id":"builder-525",
			"name":"subtractnumberfrom",
			"display name":"SubtractNumberFrom",
			"library":"builder",
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
			"id":"builder-526",
			"name":"numberislessthannumber",
			"display name":"NumberIsLessThanNumber",
			"library":"builder",
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
			"id":"builder-527",
			"name":"numberisequaltonumber",
			"display name":"NumberIsEqualToNumber",
			"library":"builder",
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
			"id":"builder-528",
			"name":"dividenumberby",
			"display name":"DivideNumberBy",
			"library":"builder",
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
			"id":"builder-529",
			"name":"numberislessthanorequaltonumber",
			"display name":"NumberIsLessThanOrEqualToNumber",
			"library":"builder",
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
			"id":"builder-530",
			"name":"overoperator",
			"display name":"OverOperator",
			"library":"builder",
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
			"id":"builder-531",
			"name":"numberisnotnumber",
			"display name":"NumberIsNotNumber",
			"library":"builder",
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
			"id":"builder-532",
			"name":"modoperator",
			"display name":"ModOperator",
			"library":"builder",
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
			"id":"builder-533",
			"name":"com.livecode.arithmetic",
			"display name":"com.livecode.arithmetic",
			"library":"builder",
			"type":"module",
			"display syntax":[
				"com.livecode.arithmetic"
			],
			"associations":["com.livecode.arithmetic"],
			"summary":"This library consists of the basic arithmetic operations of standard library of LiveCode Builder.",
			"description":"This library consists of the basic arithmetic operations of standard library of LiveCode Builder."
		},{
			"id":"builder-534",
			"name":"parsestringasnumber",
			"display name":"ParseStringAsNumber",
			"library":"builder",
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
			"id":"builder-535",
			"name":"parselistofstringaslistofnumber",
			"display name":"ParseListOfStringAsListOfNumber",
			"library":"builder",
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
			"id":"builder-536",
			"name":"minusoperator",
			"display name":"MinusOperator",
			"library":"builder",
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
			"id":"builder-537",
			"name":"wrapoperator",
			"display name":"WrapOperator",
			"library":"builder",
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
			"id":"builder-538",
			"name":"numberisnumber",
			"display name":"NumberIsNumber",
			"library":"builder",
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
			"id":"builder-539",
			"name":"formatnumberasstring",
			"display name":"FormatNumberAsString",
			"library":"builder",
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
			"id":"builder-540",
			"name":"timesoperator",
			"display name":"TimesOperator",
			"library":"builder",
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
			"id":"builder-541",
			"name":"stringparsedasnumber",
			"display name":"StringParsedAsNumber",
			"library":"builder",
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
			"id":"builder-542",
			"name":"numberisgreaterthannumber",
			"display name":"NumberIsGreaterThanNumber",
			"library":"builder",
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
			"id":"builder-543",
			"name":"multiplynumberby",
			"display name":"MultiplyNumberBy",
			"library":"builder",
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
			"id":"builder-544",
			"name":"com.livecode.library.objectrepository",
			"display name":"com.livecode.library.objectrepository",
			"library":"builder",
			"type":"library",
			"display syntax":[
				"com.livecode.library.objectrepository"
			],
			"associations":["com.livecode.library.objectrepository"],
			"summary":"This library provides support persistent object references within a session",
			"description":"This library provides support persistent object references within a session"
		},{
			"id":"builder-545",
			"name":"objectrepositorystore",
			"display name":"objectRepositoryStore",
			"library":"builder",
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
			"id":"builder-546",
			"name":"objectrepositoryflush",
			"display name":"objectRepositoryFlush",
			"library":"builder",
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
			"id":"builder-547",
			"name":"objectrepositoryretrieve",
			"display name":"objectRepositoryRetrieve",
			"library":"builder",
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
			"id":"builder-548",
			"name":"objectrepositoryremove",
			"display name":"objectRepositoryRemove",
			"library":"builder",
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
		},{
			"id":"builder-549",
			"name":"com.livecode.stream",
			"display name":"com.livecode.stream",
			"library":"builder",
			"type":"module",
			"display syntax":[
				"com.livecode.stream"
			],
			"associations":["com.livecode.stream"],
			"summary":"This module specifies the syntax definitions and bindings for\nstream input and output operations in modular LiveCode.",
			"description":"This module specifies the syntax definitions and bindings for\nstream input and output operations in modular LiveCode."
		},{
			"id":"builder-550",
			"name":"writetostream",
			"display name":"WriteToStream",
			"library":"builder",
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
			"id":"builder-551",
			"name":"defaulterrorstream",
			"display name":"DefaultErrorStream",
			"library":"builder",
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
			"id":"builder-552",
			"name":"defaultoutputstream",
			"display name":"DefaultOutputStream",
			"library":"builder",
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
			"id":"builder-553",
			"name":"selectednavitem",
			"display name":"selectedNavItem",
			"library":"builder",
			"type":"property",
			"syntax":[
				"set the selectedNavItem of <widget> to <pItemName>\nget the selectedNavItem of <widget>"
			],
			"display syntax":[
				"set the selectedNavItem of <i>widget</i> to <i>pItemName</i>"
			],
			"associations":["com.livecode.widget.paletteactions"],
			"summary":"The name of the currently selected nav item",
			"value":[{
				"name":"value",
				"type":"",
				"description":"The item in the <navNames> corresponding to the selected nav item"
			}],
			"description":"The name of the currently selected nav item"
		},{
			"id":"builder-554",
			"name":"selectednavcolor",
			"display name":"selectedNavColor",
			"library":"builder",
			"type":"property",
			"syntax":[
				"set the selectedNavColor of <widget> to <pColor>\nget the selectedNavColor of <widget>"
			],
			"display syntax":[
				"set the selectedNavColor of <i>widget</i> to <i>pColor</i>"
			],
			"associations":["com.livecode.widget.paletteactions"],
			"summary":"The color to use for the selected nav item",
			"value":[{
				"name":"value",
				"type":"",
				"description":"The color of the selected nav item, in RGB form"
			}],
			"description":"The color to use for the selected nav item"
		},{
			"id":"builder-555",
			"name":"navchanged",
			"display name":"navChanged",
			"library":"builder",
			"type":"message",
			"syntax":[
				"navChanged"
			],
			"display syntax":[
				"navChanged"
			],
			"associations":["com.livecode.widget.paletteactions"],
			"summary":"Sent when the nav items property is changed",
			"description":"Sent when the nav items property is changed"
		},{
			"id":"builder-556",
			"name":"showactionicons",
			"display name":"showActionIcons",
			"library":"builder",
			"type":"property",
			"syntax":[
				"set the showActionIcons of <widget> to { true | false }\nget the showActionIcons of <widget>"
			],
			"display syntax":[
				"set the showActionIcons of <i>widget</i> to { true | false }"
			],
			"associations":["com.livecode.widget.paletteactions"],
			"summary":"Whether to show the action icons or not",
			"description":"Whether to show the action icons or not"
		},{
			"id":"builder-557",
			"name":"menupick",
			"display name":"menuPick",
			"library":"builder",
			"type":"message",
			"syntax":[
				"menuPick <pPick>"
			],
			"display syntax":[
				"menuPick <i>pPick</i>"
			],
			"associations":["com.livecode.widget.paletteactions"],
			"summary":"Sent when a menu item is chosen",
			"parameters":[{
				"name":"pPick",
				"type":"",
				"refparam":"false",
				"description":"The item picked"
			}],
			"description":"Sent when a menu item is chosen"
		},{
			"id":"builder-558",
			"name":"com.livecode.widget.paletteactions",
			"display name":"com.livecode.widget.paletteactions",
			"library":"builder",
			"type":"widget",
			"display syntax":[
				"com.livecode.widget.paletteactions"
			],
			"associations":["com.livecode.widget.paletteactions"],
			"summary":"Palette header bar widget.",
			"description":"Palette header bar widget."
		},{
			"id":"builder-559",
			"name":"navselected",
			"display name":"navSelected",
			"library":"builder",
			"type":"message",
			"syntax":[
				"navSelected <pItemName>"
			],
			"display syntax":[
				"navSelected <i>pItemName</i>"
			],
			"associations":["com.livecode.widget.paletteactions"],
			"summary":"Sent when a nav item is selected",
			"parameters":[{
				"name":"pItemName",
				"type":"",
				"refparam":"false",
				"description":"The name of the selected nav item"
			}],
			"description":"Sent when a nav item is selected"
		},{
			"id":"builder-560",
			"name":"actionselected",
			"display name":"actionSelected",
			"library":"builder",
			"type":"message",
			"syntax":[
				"actionSelected <pItemName>"
			],
			"display syntax":[
				"actionSelected <i>pItemName</i>"
			],
			"associations":["com.livecode.widget.paletteactions"],
			"summary":"Sent when an action item is clicked",
			"parameters":[{
				"name":"pItemName",
				"type":"",
				"refparam":"false",
				"description":"The name of the clicked action item"
			}],
			"description":"Sent when an action item is clicked"
		},{
			"id":"builder-561",
			"name":"actionlabels",
			"display name":"actionLabels",
			"library":"builder",
			"type":"property",
			"syntax":[
				"set the actionLabels of <widget> to <pLabelList>\nget the actionLabels of <widget>"
			],
			"display syntax":[
				"set the actionLabels of <i>widget</i> to <i>pLabelList</i>"
			],
			"associations":["com.livecode.widget.paletteactions"],
			"summary":"The labels of the action items",
			"value":[{
				"name":"value",
				"type":"",
				"description":"A list of labels of the action items"
			}],
			"description":"The labels of the action items"
		},{
			"id":"builder-562",
			"name":"actiondata",
			"display name":"actionData",
			"library":"builder",
			"type":"property",
			"syntax":[
				"set the actionData of <widget> to <pActionArray>\nget the actionData of <widget>"
			],
			"display syntax":[
				"set the actionData of <i>widget</i> to <i>pActionArray</i>"
			],
			"associations":["com.livecode.widget.paletteactions"],
			"summary":"The array of action data",
			"value":[{
				"name":"value",
				"type":"",
				"description":"An array describing the <actionNames>, <actionIcons> and <actionLabels> of the widget."
			}],
			"description":"The array of action data"
		},{
			"id":"builder-563",
			"name":"navbarright",
			"display name":"navBarRight",
			"library":"builder",
			"type":"property",
			"syntax":[
				"get the navBarRight of <widget>"
			],
			"display syntax":[
				"get the navBarRight of <i>widget</i>"
			],
			"associations":["com.livecode.widget.paletteactions"],
			"summary":"The horizontal extent of the rendered navigation items",
			"description":"The horizontal extent of the rendered navigation items"
		},{
			"id":"builder-564",
			"name":"navicons",
			"display name":"navIcons",
			"library":"builder",
			"type":"property",
			"syntax":[
				"set the navIcons of <widget> to <pIconList>\nget the navIcons of <widget>"
			],
			"display syntax":[
				"set the navIcons of <i>widget</i> to <i>pIconList</i>"
			],
			"associations":["com.livecode.widget.paletteactions"],
			"summary":"The icons of the nav items",
			"value":[{
				"name":"value",
				"type":"",
				"description":"A list of icons of the nav items"
			}],
			"description":"The icons of the nav items"
		},{
			"id":"builder-565",
			"name":"isheader",
			"display name":"isHeader",
			"library":"builder",
			"type":"property",
			"syntax":[
				"set the isHeader of <widget> to { true | false }\nget the isHeader of <widget>"
			],
			"display syntax":[
				"set the isHeader of <i>widget</i> to { true | false }"
			],
			"associations":["com.livecode.widget.paletteactions"],
			"summary":"Whether the widget is a header or footer",
			"description":"Whether the widget is a header or footer"
		},{
			"id":"builder-566",
			"name":"shownavicons",
			"display name":"showNavIcons",
			"library":"builder",
			"type":"property",
			"syntax":[
				"set the showNavIcons of <widget> to { true | false }\nget the showNavIcons of <widget>"
			],
			"display syntax":[
				"set the showNavIcons of <i>widget</i> to { true | false }"
			],
			"associations":["com.livecode.widget.paletteactions"],
			"summary":"Whether to show the nav icons or not",
			"description":"Whether to show the nav icons or not"
		},{
			"id":"builder-567",
			"name":"actionicons",
			"display name":"actionIcons",
			"library":"builder",
			"type":"property",
			"syntax":[
				"set the actionIcons of <widget> to <pIconList>\nget the actionIcons of <widget>"
			],
			"display syntax":[
				"set the actionIcons of <i>widget</i> to <i>pIconList</i>"
			],
			"associations":["com.livecode.widget.paletteactions"],
			"summary":"The icons of the action items",
			"value":[{
				"name":"value",
				"type":"",
				"description":"A list of icons of the action items"
			}],
			"description":"The icons of the action items"
		},{
			"id":"builder-568",
			"name":"navlabels",
			"display name":"navLabels",
			"library":"builder",
			"type":"property",
			"syntax":[
				"set the navLabels of <widget> to <pLabelList>\nget the navLabels of <widget>"
			],
			"display syntax":[
				"set the navLabels of <i>widget</i> to <i>pLabelList</i>"
			],
			"associations":["com.livecode.widget.paletteactions"],
			"summary":"The labels of the nav items",
			"value":[{
				"name":"value",
				"type":"",
				"description":"A list of labels of the nav items"
			}],
			"description":"The labels of the nav items"
		},{
			"id":"builder-569",
			"name":"minwidth",
			"display name":"minWidth",
			"library":"builder",
			"type":"property",
			"syntax":[
				"get the minWidth of <widget>"
			],
			"display syntax":[
				"get the minWidth of <i>widget</i>"
			],
			"associations":["com.livecode.widget.paletteactions"],
			"summary":"The minimum width needed to display nav items and action items",
			"description":"The minimum width needed to display nav items and action items"
		},{
			"id":"builder-570",
			"name":"actionnames",
			"display name":"actionNames",
			"library":"builder",
			"type":"property",
			"syntax":[
				"set the actionNames of <widget> to <pNameList>\nget the actionNames of <widget>"
			],
			"display syntax":[
				"set the actionNames of <i>widget</i> to <i>pNameList</i>"
			],
			"associations":["com.livecode.widget.paletteactions"],
			"summary":"The names of the action items",
			"value":[{
				"name":"value",
				"type":"",
				"description":"A list of names of the action items"
			}],
			"description":"The names of the action items"
		},{
			"id":"builder-571",
			"name":"navnames",
			"display name":"navNames",
			"library":"builder",
			"type":"property",
			"syntax":[
				"set the navNames of <widget> to <pNameList>\nget the navNames of <widget>"
			],
			"display syntax":[
				"set the navNames of <i>widget</i> to <i>pNameList</i>"
			],
			"associations":["com.livecode.widget.paletteactions"],
			"summary":"The names of the nav items",
			"value":[{
				"name":"value",
				"type":"",
				"description":"A list of names of the nav items"
			}],
			"description":"The names of the nav items"
		},{
			"id":"builder-572",
			"name":"navdata",
			"display name":"navData",
			"library":"builder",
			"type":"property",
			"syntax":[
				"set the navData of <widget> to <pNavArray>\nget the navData of <widget>"
			],
			"display syntax":[
				"set the navData of <i>widget</i> to <i>pNavArray</i>"
			],
			"associations":["com.livecode.widget.paletteactions"],
			"summary":"The array of navigation data",
			"value":[{
				"name":"value",
				"type":"",
				"description":"An array describing the <navNames>, <navIcons> and <navLabels> of the widget."
			}],
			"description":"The array of navigation data"
		},{
			"id":"builder-573",
			"name":"unitplan",
			"display name":"UnitPlan",
			"library":"builder",
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
			"id":"builder-574",
			"name":"unittestfailsdescription",
			"display name":"UnitTestFailsDescription",
			"library":"builder",
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
			"id":"builder-575",
			"name":"unittestfailsdescriptionandreason",
			"display name":"UnitTestFailsDescriptionAndReason",
			"library":"builder",
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
			"id":"builder-576",
			"name":"unittestfailsreason",
			"display name":"UnitTestFailsReason",
			"library":"builder",
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
			"id":"builder-577",
			"name":"unittestfails",
			"display name":"UnitTestFails",
			"library":"builder",
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
			"id":"builder-578",
			"name":"unittestskipdescriptionandreason",
			"display name":"UnitTestSkipDescriptionAndReason",
			"library":"builder",
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
			"id":"builder-579",
			"name":"unittestskip",
			"display name":"UnitTestSkip",
			"library":"builder",
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
			"id":"builder-580",
			"name":"unittestskipreason",
			"display name":"UnitTestSkipReason",
			"library":"builder",
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
			"id":"builder-581",
			"name":"unitdiagnostic",
			"display name":"UnitDiagnostic",
			"library":"builder",
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
			"id":"builder-582",
			"name":"unittestskipdescription",
			"display name":"UnitTestSkipDescription",
			"library":"builder",
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
			"id":"builder-583",
			"name":"com.livecode.unittest",
			"display name":"com.livecode.unittest",
			"library":"builder",
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
			"id":"builder-584",
			"name":"unittest",
			"display name":"UnitTest",
			"library":"builder",
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
			"id":"builder-585",
			"name":"unittestdescription",
			"display name":"UnitTestDescription",
			"library":"builder",
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
			"id":"builder-586",
			"name":"label",
			"display name":"label",
			"library":"builder",
			"type":"property",
			"syntax":[
				"set the label of <widget> to <pLabel>\nget the label of <widget>"
			],
			"display syntax":[
				"set the label of <i>widget</i> to <i>pLabel</i>"
			],
			"associations":["com.livecode.widget.native.emscripten.button"],
			"summary":"The label displayed by the button.",
			"OS":["html5"],
			"examples":[{
				"script":"set the label of widget \"HTML5 Button\" to \"Click me!\""
			}],
			"value":[{
				"name":"value",
				"type":"",
				"description":"The string to use as the button label"
			}],
			"description":"The <label> property is the label displayed by the button.\n"
		},{
			"id":"builder-587",
			"name":"com.livecode.widget.native.emscripten.button",
			"display name":"com.livecode.widget.native.emscripten.button",
			"library":"builder",
			"type":"widget",
			"display syntax":[
				"com.livecode.widget.native.emscripten.button"
			],
			"associations":["com.livecode.widget.native.emscripten.button"],
			"summary":"This widget is a native button in HTML5.",
			"OS":["html5"],
			"description":"This widget is a native button in HTML5."
		},{
			"id":"builder-588",
			"name":"deletedirectory",
			"display name":"DeleteDirectory",
			"library":"builder",
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
			"id":"builder-589",
			"name":"com.livecode.file",
			"display name":"com.livecode.file",
			"library":"builder",
			"type":"module",
			"display syntax":[
				"com.livecode.file"
			],
			"associations":["com.livecode.file"],
			"summary":"This module specifies the syntax definitions and bindings for\nfilesystem operations in LiveCode Builder.\n\n>*Note:* This module is currently experimental and unstable.  The\n>syntax is likely to change in future versions of LiveCode.",
			"description":"This module specifies the syntax definitions and bindings for\nfilesystem operations in LiveCode Builder.\n\n>*Note:* This module is currently experimental and unstable.  The\n>syntax is likely to change in future versions of LiveCode."
		},{
			"id":"builder-590",
			"name":"getdirectoryentries",
			"display name":"GetDirectoryEntries",
			"library":"builder",
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
			"id":"builder-591",
			"name":"deletefile",
			"display name":"DeleteFile",
			"library":"builder",
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
			"id":"builder-592",
			"name":"createdirectory",
			"display name":"CreateDirectory",
			"library":"builder",
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
			"id":"builder-593",
			"name":"filecontents",
			"display name":"FileContents",
			"library":"builder",
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
			"id":"builder-594",
			"name":"macstatusmenusetcustomicon",
			"display name":"macStatusMenuSetCustomIcon",
			"library":"builder",
			"type":"handler",
			"syntax":[
				"macStatusMenuSetCustomIcon(<pCharacter>,<pImage>)"
			],
			"display syntax":[
				"macStatusMenuSetCustomIcon(<i>pCharacter</i>,<i>pImage</i>)"
			],
			"associations":["com.livecode.library.native.mac.statusmenu"],
			"summary":"Create a custom icon for use when setting menu items",
			"OS":["mac"],
			"platforms":["desktop"],
			"parameters":[{
				"name":"pCharacter",
				"type":"",
				"refparam":"false",
				"description":"a single character to associate with the icon. May not be\nc, n or m as those characters are reserved"
			},{
				"name":"pImage",
				"type":"",
				"refparam":"false",
				"description":"the path to an image file or a reference to an image object. If\nit is an imported image then it must be in a format supported by\n`NSImage -initWithContentsOfFile`."
			}],
			"examples":[{
				"script":"macStatusMenuCreate \"r\", the long id of image \"dot\""
			}],
			"description":"When creating the menu items the icon to use for the item is identified by `!`\nfollowed by a character. The builtin icons are `c` (checkmark), `n` (no checkmark)\nand `m` (mixed state). Use <macStatusMenuSetCustomIcon> to add another custom icon\nto use.\n"
		},{
			"id":"builder-595",
			"name":"macstatusmenucreate",
			"display name":"macStatusMenuCreate",
			"library":"builder",
			"type":"handler",
			"syntax":[
				"macStatusMenuCreate(<pName>)"
			],
			"display syntax":[
				"macStatusMenuCreate(<i>pName</i>)"
			],
			"associations":["com.livecode.library.native.mac.statusmenu"],
			"summary":"Create a status menu",
			"OS":["mac"],
			"platforms":["desktop"],
			"parameters":[{
				"name":"pName",
				"type":"",
				"refparam":"false",
				"description":"The name of the status menu to create"
			}],
			"examples":[{
				"script":"macStatusMenuCreate \"mymenu\""
			}],
			"description":"Use <pName> to refer to the status menu when setting properties and deleting\nthe status menu."
		},{
			"id":"builder-596",
			"name":"macstatusmenunames",
			"display name":"macStatusMenuNames",
			"library":"builder",
			"type":"handler",
			"syntax":[
				"macStatusMenuNames()"
			],
			"display syntax":[
				"macStatusMenuNames()"
			],
			"associations":["com.livecode.library.native.mac.statusmenu"],
			"summary":"Get the names of any menus that have been created",
			"OS":["mac"],
			"platforms":["desktop"],
			"examples":[{
				"script":"if \"mymenu\" is among the lines of macStatusMenuNames() then\n\tmacStatusMenuDelete \"mymenu\"\nend if"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"A return delimited list of menu names."
			}],
			"description":"Use macStatusMenuNames to ensure that a menu has been created before calling a\nhandler that may throw an error if called with a menu that does not exist."
		},{
			"id":"builder-597",
			"name":"macstatusmenudelete",
			"display name":"macStatusMenuDelete",
			"library":"builder",
			"type":"handler",
			"syntax":[
				"macStatusMenuDelete(<pName>)"
			],
			"display syntax":[
				"macStatusMenuDelete(<i>pName</i>)"
			],
			"associations":["com.livecode.library.native.mac.statusmenu"],
			"summary":"Delete a status menu",
			"OS":["mac"],
			"platforms":["desktop"],
			"parameters":[{
				"name":"pName",
				"type":"",
				"refparam":"false",
				"description":"The name of a previously created status menu"
			}],
			"examples":[{
				"script":"macStatusMenuDelete \"mymenu\""
			}],
			"description":"Deleting the status menu removes it from the staus menubar"
		},{
			"id":"builder-598",
			"name":"macstatusmenupick",
			"display name":"macStatusMenuPick",
			"library":"builder",
			"type":"message",
			"syntax":[
				"macStatusMenuPick <pName>, <pChosenItem>"
			],
			"display syntax":[
				"macStatusMenuPick <i>pName</i>, <i>pChosenItem</i>"
			],
			"associations":["com.livecode.library.native.mac.statusmenu"],
			"summary":"Sent when an item is picked from the menu",
			"OS":["mac"],
			"platforms":["desktop"],
			"parameters":[{
				"name":"pName",
				"type":"",
				"refparam":"false",
				"description":"The name of the status menu that the item was picked from"
			},{
				"name":"pChosenItem",
				"type":"",
				"refparam":"false",
				"description":"The label of the menu item the user chose. If the menu item chosen\nis part of a submenu, the menu item label is followed by a vertical bar (|) and\nthe submenu's label."
			}],
			"description":"The <macStatusMenuPick> message is sent to the object that created the status\nmenu using the <macStatusMenuCreate> handler.",
			"references":{
				"handler":["macStatusMenuCreate"]
			}
		},{
			"id":"builder-599",
			"name":"macstatusmenuset",
			"display name":"macStatusMenuSet",
			"library":"builder",
			"type":"handler",
			"syntax":[
				"macStatusMenuSet(<pName>,<pProperty>,<pValue>)"
			],
			"display syntax":[
				"macStatusMenuSet(<i>pName</i>,<i>pProperty</i>,<i>pValue</i>)"
			],
			"associations":["com.livecode.library.native.mac.statusmenu"],
			"summary":"Set a property on a status menu",
			"OS":["mac"],
			"platforms":["desktop"],
			"parameters":[{
				"name":"pName",
				"type":"",
				"refparam":"false",
				"description":"The name of a previously created status menu"
			},{
				"name":"pProperty",
				"type":"",
				"refparam":"false",
				"description":" - \"visible\" - (boolean) set to false to hide the menu. Defaults to true.\n - \"enabled\" - (boolean) set to false to make the menu appear disabled. Use in\n comination with setting the items to empty so that the menu does not show when\n the user clicks on it. Defaults to true.\n - \"tooltip\" - (string) the tooltip to show over the status menu\n - \"icongravity\" - (enum) one of \"left\", \"right\" or \"center\". Used when displaying\n both a menu title and icon\n - \"length\" - one of \"square\", \"variable\" or a number. Note \"variable\" mode does\n not appear to dynamically update the width as stated in Apple documentation.\n - \"icon\" - (string) the full path to an image file or a reference to an image object. If\n the image object has its filename set it must be a full path. If it is an imported\n image then it must be in a format supported by NSImage -initWithContentsOfFile.\n Setting the icon to empty to clear it.\n - \"title\" - (string) the title of the menu. Set to empty (the default) to only use an icon.\n - \"items\" - (string) the items of is a similar format used by LiveCode menus"
			},{
				"name":"pValue",
				"type":"",
				"refparam":"false",
				"description":"The value as described for each property"
			}],
			"examples":[{
				"script":"on EnableStatusMenu pEnabled\n   macStatusMenuSet \"mymenu\", \"enabled\", pEnabled\n   if pEnabled then\n      macStatusMenuSet \"mymenu\", \"icon\", the long id of image \"enabled\"\n      macStatusMenuSet \"mymenu\", \"items\", \"Open\" & return & \"-\" & return & \"Settings\" \n   else\n      macStatusMenuSet \"mymenu\", \"icon\", the long id of image \"disabled\"\n      macStatusMenuSet \"mymenu\", \"items\", empty\n   end if\nend EnableStatusMenu"
			}],
			"description":"Specify the menu items in the following form:\n\n    [<flags>] <label> ['/' <accelerator> ['|' <tag>]]\n\nWhere <flags> may include:\n\n!c, !n, !m: the menu item has respectively, a check, no check, or a mixed state icon\n\n>**Note:** A difference between standard LiveCode menus and the macStatusMenu\n> library is that the radio button (!r) used in LiveCode menus is not supported,\n> however, the mixed state (!m) is. Additionally you can use the <macStatusMenuSetCustomIcon>\n> command to specify a custom icon.\n\n(: the menu item is disabled\n\n-: the menu item is replaced with a menu separator\n\nmultiple tab characters: the number of tabs specifes the depth of the menu item;\nuse this to create submenus \n\nThe <accelerator> can be specified as one of:\nchar:Command key + specified char\nkeyname:Named key without modifiers\nmodifiers char: Specified modifiers + character\nmodifiers keyname: Specified modifiers + named key\nIn the accelerator, modifiers is either a space separated list of: \n\n- 'command' or 'cmd'\n- 'control' or 'ctrl'\n- 'option' or 'opt', 'alt', 'shift'\n\nIn this case the keyname/char should be separated from the list by a space\n\nOr modifiers may be a sequence of characters, including:\n\n^: Command\n@: Shift\n#: Option\n%: Control\n\nIn this case no space between the sequence and keyname/char is required\n\nThe following named keys are supported:\n\nF1, F2, F3, F4, ... F15,\nLeft, Up, Right, Down,\nBackspace, Delete,\nTab, Space,\nReturn, Enter,\nHome, End, Escape,\nPgUp, PgDown\n\nA tag can be specified as a | character followed by a string of ASCII characters. \nIf such a tag is present then that tag will take the place of the menu label as \nthe parameter to the menuPick.\n\nA tag will only be recognised following the <accelerator>. To specify a menu tag \nwithout an accelerator shortcut, an empty <accelerator> can be specified using /| \nfollowed by the tag text.",
			"references":{
				"handler":["macStatusMenuSetCustomIcon"]
			}
		},{
			"id":"builder-600",
			"name":"com.livecode.library.native.mac.statusmenu",
			"display name":"com.livecode.library.native.mac.statusmenu",
			"library":"builder",
			"type":"library",
			"display syntax":[
				"com.livecode.library.native.mac.statusmenu"
			],
			"associations":["com.livecode.library.native.mac.statusmenu"],
			"summary":"Manage mac status menus",
			"description":"This library allows the creation and management of mac status menus"
		},{
			"id":"builder-601",
			"name":"com.livecode.library.toast",
			"display name":"com.livecode.library.toast",
			"library":"builder",
			"type":"library",
			"display syntax":[
				"com.livecode.library.toast"
			],
			"associations":["com.livecode.library.toast"],
			"summary":"A library for displaying toasts on mobile",
			"OS":["android"],
			"description":"A toast is a non-modal temporary notification displayed to the user."
		},{
			"id":"builder-602",
			"name":"mobiletoastcancel",
			"display name":"mobileToastCancel",
			"library":"builder",
			"type":"handler",
			"syntax":[
				"mobileToastCancel()"
			],
			"display syntax":[
				"mobileToastCancel()"
			],
			"associations":["com.livecode.library.toast"],
			"summary":"Cancel the current toast",
			"OS":["android"],
			"description":"Use <mobileToastCancel> to cancel the currently displayed toast."
		},{
			"id":"builder-603",
			"name":"mobiletoast",
			"display name":"mobileToast",
			"library":"builder",
			"type":"handler",
			"syntax":[
				"mobileToast(<pMessage>,<pDuration>)"
			],
			"display syntax":[
				"mobileToast(<i>pMessage</i>,<i>pDuration</i>)"
			],
			"associations":["com.livecode.library.toast"],
			"summary":"Display a toast notification",
			"OS":["android"],
			"parameters":[{
				"name":"pMessage",
				"type":"",
				"refparam":"false",
				"description":"The message to display"
			},{
				"name":"pDuration",
				"type":"",
				"refparam":"false",
				"description":"The duration of the notification. Either a positive integer, the string\n\"long\" or the string \"short\"."
			}],
			"examples":[{
				"script":"mobileToast \"Hello, I am a toast!\", \"short\""
			}],
			"description":"Use the <mobileToast> handler to display a temporary non-modal \nnotification with a specified message, for the given duration.\n"
		},{
			"id":"builder-604",
			"name":"bitwiseshiftleft",
			"display name":"BitwiseShiftLeft",
			"library":"builder",
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
			"id":"builder-605",
			"name":"bitwiseor",
			"display name":"BitwiseOr",
			"library":"builder",
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
			"id":"builder-606",
			"name":"bitwisexor",
			"display name":"BitwiseXor",
			"library":"builder",
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
			"id":"builder-607",
			"name":"bitwisenot",
			"display name":"BitwiseNot",
			"library":"builder",
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
			"id":"builder-608",
			"name":"bitwiseshiftright",
			"display name":"BitwiseShiftRight",
			"library":"builder",
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
			"id":"builder-609",
			"name":"bitwiseand",
			"display name":"BitwiseAnd",
			"library":"builder",
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
			"id":"builder-610",
			"name":"com.livecode.bitwise",
			"display name":"com.livecode.bitwise",
			"library":"builder",
			"type":"module",
			"display syntax":[
				"com.livecode.bitwise"
			],
			"associations":["com.livecode.bitwise"],
			"summary":"This module specifies the bitwise operations on integers included in the standard library of LiveCode Builder.",
			"description":"This module specifies the bitwise operations on integers included in the standard library of LiveCode Builder."
		},{
			"id":"builder-611",
			"name":"commandname",
			"display name":"CommandName",
			"library":"builder",
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
			"id":"builder-612",
			"name":"systemerrorcode",
			"display name":"SystemErrorCode",
			"library":"builder",
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
			"id":"builder-613",
			"name":"operatingsystem",
			"display name":"OperatingSystem",
			"library":"builder",
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
			"id":"builder-614",
			"name":"resetsystemerror",
			"display name":"ResetSystemError",
			"library":"builder",
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
			"id":"builder-615",
			"name":"commandarguments",
			"display name":"CommandArguments",
			"library":"builder",
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
			"id":"builder-616",
			"name":"quitwithstatus",
			"display name":"QuitWithStatus",
			"library":"builder",
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
			"id":"builder-617",
			"name":"architecture",
			"display name":"Architecture",
			"library":"builder",
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
			"id":"builder-618",
			"name":"systemerrordescription",
			"display name":"SystemErrorDescription",
			"library":"builder",
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
			"id":"builder-619",
			"name":"com.livecode.system",
			"display name":"com.livecode.system",
			"library":"builder",
			"type":"module",
			"display syntax":[
				"com.livecode.system"
			],
			"associations":["com.livecode.system"],
			"summary":"This library provides low-level system functionality for modular\nLiveCode programs.",
			"description":"This library provides low-level system functionality for modular\nLiveCode programs."
		},{
			"id":"builder-620",
			"name":"com.livecode.widget.gradientrampeditor",
			"display name":"com.livecode.widget.gradientrampeditor",
			"library":"builder",
			"type":"widget",
			"display syntax":[
				"com.livecode.widget.gradientrampeditor"
			],
			"associations":["com.livecode.widget.gradientrampeditor"],
			"summary":"This widget is displays a gradient according to the value of its *gradientStops* property.",
			"description":"This widget is displays a gradient according to the value of its *gradientStops* property."
		},{
			"id":"builder-621",
			"name":"gradientstopschanged",
			"display name":"gradientStopsChanged",
			"library":"builder",
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
			"id":"builder-622",
			"name":"selectedstopchanged",
			"display name":"selectedStopChanged",
			"library":"builder",
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
			"id":"builder-623",
			"name":"selectedstop",
			"display name":"selectedStop",
			"library":"builder",
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
			"id":"builder-624",
			"name":"gradientstops",
			"display name":"gradientStops",
			"library":"builder",
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
		}