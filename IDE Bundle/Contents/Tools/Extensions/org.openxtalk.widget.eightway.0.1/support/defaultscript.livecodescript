script "community.livecode.widget.piano.__DefaultScript"
on DPadOn pNum , pName
   switch pNum
      case 0
         put pName &" N" into fld 1
         break
      case 1
         put pName & " NE" into fld 1
         break
      case 2
         put pName &" E" into fld 1
         break
      case 3
         put pName &" SE" into fld 1
         break
      case 4
         put pName &" S" into fld 1
         break
      case 5
         put pName &" SW" into fld 1
         break
      case 6
         put pName &" W" into fld 1
         break
      case 7
         put pName &" NW" into fld 1
         break
      case 8
         put " DeadZone" into fld 1
         break
      default
         put pNum , pName
         break
   end switch
end DPadOn

on DPadOff pNum , pName
   put pName & " Off " & pNum
end DPadOff

