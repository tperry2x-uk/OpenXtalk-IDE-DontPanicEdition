﻿script "com.livecode.interface.classic.OptionMenu"
-- Sent when a menu item is picked from the option menu
on menuPick pItemName
   switch pItemName
   case empty
      break
   default
      pass menuPick
   end switch
end menuPick
