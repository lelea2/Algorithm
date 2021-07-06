#### Design @mention component

Requirements:
- typeahead feature
    - @ for people typeahead and @ # for room typeahead
    - no restriction means recommendation could fire after the first character
    - in order to support this, use debounce
- How data would be send to the server
- How data would be receive from the server
- When click on @user or #room, get more information of #user or room
   -- we need to a way to parse the text in order to recognize the syntax formation 
   -- specialTextModel {
          startIndex:
          endIndex:
          item: {
             type: USER|ROOM // specific per entity type / FE has to had logic to render each entity type separately
             firstName:
             lastName:
          }
      }
    -- {
         specialTextModel {
           startIndex:
           endIndex: 
           item: {
              associatedId: '',
          }
         },
         associatedIdResolution{
            associatedId: {
                
            }
         }
       } 
    -- {
           user: ...
           message: { // TextModel
              text: pure-string
              textView: [{
                  specialTextModel,
                  specialTextModel,
              }]
           }
       }
  1) Ui component: TextModel: pure, and also any cursor to render the text accordingly
  2) Ui component: TextWithToolTip ///  
         - {
                text:
                 tooltipData: {
                   imgUrl:
                   title: (firstName + lastName | roomName)
                   subtitle: 
                   url: href link to click on
                 }
           }
 - Typeahead: 
    -- /v1/typeahead/?q=<>&type=
    - Ui Component
        -onChange input. if and prev != '' or space '@' => /v1/typeahead/?q=<>&type=user & # /v1/typeahead/?q=<>&type=room&start=0&count=10 => debounce
        - when you hit space (' ') and ('enter') => you know should stop fetching 
             {
                 type: 'user',
                 data: [{
                     text
                     image
                 }]
             }
        - complete by space of enter, it look at your previous word to monitor
               - currText = ''; // store word
               -- temp word = '',
               - onChange keep track of word in temp, once hit enter or space, based on this temp word, if tempword exist pure match suggestion (1 suggest return) => re-modify your string. 
 
        - Dropdown:
            - render item => list item
            - arrow up/arrow down | once click on 1 item / tempword => change. => tempword = '', add space.
               {
                   text:
                   specialTextModel: {
                      startIndex: 
                      endIndex:
                      {
                         startIndex, endIndex, id
                      } 
                   }
               } 
       - remove the character:
 
            