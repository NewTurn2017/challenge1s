import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
} from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  title: {
    textAlign: 'center',
    margin: theme.spacing(2, 0),
  },
}))

const reviews = [
  {
    title: '챌린지 도전기 1 -> 클릭 상세내용 보기',
    content:
      '바로 두 주 전, "AI코리아 커뮤니티"에서 열린 "내 생에 첫 개발 챌린지 프로젝트 1기"에 참가하게 된 것은 신선한 시작이었습니다. 그 주된 원동력은 "ChatGPT를 활용하여 누구든지 홈페이지나 앱을 만들 수 있다"는 잠재력에 대한 희망이었습니다. 비록 개발 경험이 전무했지만, 자신의 생각을 현실로 구현하는 능력에 대한 열망은 늘 간직하고 있었습니다. 그래서 시작했습니다. 첫날 강의를 통해 ChatGPT와의 함께하는 여정이 시작되었고, 현재까지 이어져오고 있습니다. 2주간의 과정을 마치며 느끼는 것은 "참가하기를 잘했다."라는 확신입니다. 코딩에 대해 전혀 몰랐던 제가 이제는 강의를 보며 코딩을 배우고, 막히는 부분은 ChatGPT와 대화하며 해결하는 것에 익숙해졌습니다. 그 결과, 이제 원하던 결과물을 만들어내는데 성공하고 있습니다. 이런 과정을 통해 점차 깨달아갔습니다. "ChatGPT와 함께라면 나도 개발자가 될 수 있다!"라는 자신감이 생겼습니다. 더불어, 현재 1기 멤버들과, 특히 우리의 훌륭한 재현 강사님과 함께 프로젝트를 완성할 때까지 최선을 다하겠다는 결심을 갖게 되었습니다. 3주차에 진행될 개인 프로젝트에 대한 기대와 설렘이 가슴을 두근거리게 합니다. "내 생에 첫 개발 프로젝트 1기"의 모든 참가자들, 끝까지 힘내요! 이 여정이 여러분 모두에게 풍성한 성장과 무한한 가능성을 선사하기를 바랍니다.',
  },
  {
    title: '챌린지 도전기 2 -> 클릭 상세내용 보기',
    content:
      "에코에 조인하면서 닥치는 대로 막무가내로 모든 프로젝트에 다 참여하고 싶었다. 그리고 실제로 그렇게 했다. 직장 다니면서 짬짬이 하는데 피곤했지만 너무 흥미롭고 재미있고 할수록 성취감도 있었다. 그느낌 그대로 '내생애 첫개발 챌린지'도 신청했다. 아뿔싸! 이건 아니었다 막무가내로 할수있는것이. 생전 첨보는 코드와 용어들…식은땀, 후회, 연휴에 맘편히 놀지도 못하고 가족들도 눈총이다. 너무 낑낑대면 싸부님이 1:1로 도와 주시지만 결국은 내가 해야할 몫이다.컴을켜고 옆에 노드북을 켜서 강의를 틀어놓구 일시정지를 수없이 하면서따라 하기를 2주. 이제 좀 코드가 익숙해 지고 외계어 같았던 글자들이 눈에 들어오기 시작했다. 코딩외적인 기초지식만 갖춰진다면 chatgpt 와 못할코딩이 없을거 같다. 아직 엉망진창 이지만 이시첨에서 뭔가 알아간다는 뿌듯함이 밀려온다 본업 하시면서 밤낮 가리지 않고 열정 뿜으시는 재현싸부,1기 동기분들 열정적으로 서로 서로 도와주는 끈끈함!(죄송스럽게도 나는 도움만 받는 케이스 ㅠ) 오늘도 피곤하지만 '내생애 첫개발' 을 할수 있을거 같은 어렴풋한 희망속에 잠든다.",
  },
  {
    title: '챌린지 도전기 3 -> 클릭 상세내용 보기',
    content:
      '대학교때 코딩을 밥말아먹은 배가입니나. 소화를 시키지 못해 구석에 넣어두고 어디 있는지도 못찾을정도로잊었던 코딩이리는 녀석을 이번 재현사부 강의를 통해 다시 한번 진수성찬을 만들어 먹어보려고 합니다. 고기를 잡아주는것이 아닌 chatgpt를 통해 고기 잡는 법을 알려주시려고 하는 모습에 저도 저만에 고기 잡는 법을 chatgpt를 통해 알아가고 있어 너무 행복합니다. 최종 과제인 개인앱을 잘 만들어서 수익화에 성공 하고이를 통해 에코의 모든 분들에게 희망을 드리면 좋겠습니다. 저도 chatgpt이용한 코딩 초보 교육이 가능할지도 모르죠 ㅎㅎㅎ여튼 내생에 첫 유료 강의이지만 정말 잘 들었다고 생각합니다',
  },
  {
    title: '챌린지 도전기 4 -> 클릭 상세내용 보기',
    content:
      '만들고 싶은 앱이 생겨서 내 생에 첫 개발 챌린지에 참여하게 되었습니다. 첫 주에는 당황스러웠습니다. 경단녀이긴 하지만 웹디자인을 10년을 넘게 했던 사람인데 Chatgpt와 코딩을 하니 너무나 막막했습니다.      질문을 하는 방법을 모르니 꼬여만 가는 코드를 보며 내 스스로가 한심하기까지 했습니다.      그냥 질문을 하지 말고 내가 손으로 직접 수정을 하고 싶은 마음이 계속해서 들었지만      만들고 싶은 앱을 생각하면서 어떻게든 Chatgpt와 친해지려 노력했습니다.      그렇게 자꾸 연습하다 보니 어느 순간 Chatgpt와 말이 통하는듯한 신기한 기분을 느꼈습니다.      그때부터 코딩에 재미가 생겼고 끙끙 앓다가 해결했을 때의 통쾌함이 정말이지 짜릿했습니다.      그리고 할 수 있다는 자신감이 생겼습니다.      만들고 싶은 앱 하나씩은 가지고 있는 개발자와는 거리가 먼 보통분들도      Chatgpt와 함께라면 개발자가 될 수 있는 세상이 되었습니다.      많은 분들이 도전해 보시면 좋겠습니다. 정말 값진 경험들을 하실 것입니다.      낮이고 밤이고 열정을 불태우며 공부하시는 1기 동기님들을 보면서 코딩 외에도      배운것이 너무 많습니다. 남은 2주 서로 도와가며 원하는 앱만들기 모두 다 성공하시면 좋겠습니다.',
  },
  {
    title: '챌린지 도전기 5 -> 클릭 상세내용 보기',
    content:
      "올해 2월경에 기억됩니다. Chat GPT를 알게 된 이후, 불안감이 생겼습니다. 원래부터 불안감이 높았지만, 앞으로 세상이 어떻게 변할지 모르니 두려웠습니다. 그 시기에는 유튜브 영상, 블로그, 뉴스 기사 등에서 Chat GPT가 얼마나 강력한 도구이며 앞으로 다가올 미래가 어떻게 될지에 대한 전망이 난무하고 있었습니다.         저는 유튜브에 중독된 것 같아 한 달에 벌 수 있는 금액 등과 5분만에 뚝딱 끝나는 자극적인 컨텐츠를 무조건 걸러내고 있었습니다. 이러한 이유로 Chat GPT와 관련된 컨텐츠들을 멀리했던 것도 있습니다. 그러던 중에 에코 커뮤니티에서 Chat GPT를 이용한 코딩 클래스에 대한 이야기를 듣게 되었고, 코딩에 관심이 많았기 때문에 도전해보기로 결심했습니다.       최초 결제 비용이 부담스러웠지만, 유튜브 같은 곳에서 보여주는 컨텐츠보다 훨씬 유익하다고 생각했기 때문에 결제를 결심했습니다.    클래스의 첫 주차에서 Chat GPT를 이용해 홈페이지를 제작해보니 너무나 간단한 작업이었습니다. 단순히 '이렇게 만들고 싶어요'나 '이렇게 만들어주세요'라는 명령을 내리면 다 끝나는 일이었습니다. 하지만 홈페이지 디테일을 살려가면서 작업을 진행할수록 점점 어려워졌습니다. Chat GPT는 정말 기억을 못하고 실수도 많은 친구 였습니다. 그리고 알게된 게 있다면 Chat GPT는 프롬프트가 알파와 오메가 라는 사실이었죠. 클래스를 하지 않았다면 알 수 없는 사실이었습니다.        그보다 더 중요한 것은, 불안해하며 시작하지 않았던 순간에서, 답답함이 있었지만 AI가 저의 일을 도와주는 세상으로 한 발 내딛은 것이라는 점입니다.",
  },
  {
    title: '챌린지 도전기 6 -> 클릭 상세내용 보기',
    content:
      "'내생애 첫개발 프로그램 챌린지' 강의 수강을 두고 며칠 고민을 했습니다.    챗GPT에게 물어서 하면 다 된다고 하지만 컴맹인 내가 할 수 있을까? 나는 컴맹인데 그리고 사추기를 넘은 나이여서 이해도 못해라면서 포기하려고도 했습니다.   그런데 사전에 아이디어 제출 후, 수강 여부 결정이라는 말에 그냥 제출했습니다.  떨어지면 제가 포기하는 것이 아니게 되니까요.         아무튼 그렇게 시작된 챌린지는 예상했던대로 처음부터 난관에 부딪혔습니다.    무슨 소리인지 도대체 알아들을 수가 없었습니다.    아! 하지말껄! 괜히 여러 사람 괴롭히네하면서...     역시나 저는 첫 강의부터 도움을 요청했습니다. 단톡방에서 도움을 요청하면 사부님이 출동해주시거든요. 저희 세대는 다 아는 짱가의 노랫말처럼. 짜잔~나타나셔서 해결해주셨지요.  그리고 1기 멤버님들 또한 도와주시고 격려해주셔서  왕왕초보인 제가 2주만에 조금은 알아듣게 되었습니다. 챗GPT에게 질문하는 방법까지 알려주시는 든든한 사부님을 믿으며 2주 후에는 제생애 첫개발앱이 나오리라 믿습니다. 도전해보세요 저처럼 몰라도 할 수 있습니다! 내생애 첫 개발앱 멋지지 않나요? 덤으로 동기분들의 소중한 인연도 있답니다.",
  },
  {
    title: '챌린지 도전기 7 -> 클릭 상세내용 보기',
    content:
      "저에게는 내생애 첫개발 찰랜지라는 말이 적용이 않되는 상황이였습니다. 그 이유는 저는 현업개발자 이기때문입니다. 누군가 묻더군요. 아 그렇게 오랫동안 이 field에 계신분이 뭐하러 개발의 '개'자도 모르는 신입들과 함께 이 강좌를 듣냐고요? ㅎ       강사님의 2000시간 chatgpt와 함께 했다는 소리에 귀가 번쩍!! 그리고 Al field에서는 나역시도 신입임을 자각하였기 때문에 'Over Qualify'라는 볼멘 강사님의 멘트를 무시하고 접수 강의를 듣기 시작 하였습니다. 아!!! 왼걸이요~~~ 젊어서 지금의 와이프와 결혼을 결정한 이후 내가 내린 결정중에 최고의 결정이였다고 할 수 있겠습니다. ㅎ  첫째주 시작한지 불과 3시간 30분만에 portfolio website를 ChatGPT의 도움으로 완성하는걸 보고는 과연 새로운 세대가 도래했다는것을 몸소 느낍니다. (보통 1주일에서 2주는 소요될 내용일듯 싶은데)      또한, 개발의 문외인들이였던 같은 기수의 멤버들이 만들어내는 결과물을 보면서 또 한번 놀람을 감추지 못했습니다.     늘쌍 좋았던 감정만은 아니였습니다. 어떤면에서는 먼가 공허함을 느끼기도 했습니다. 아놔~~여태 축척해논 나의 Knowhow라는게 무슨 의미가 있을까? 하는 그런 공허함. 이제는 Gap이 없다는 그런 생각으로 헛헛함이 있기도 했습니다.     그러나, 어찌할수 없는 문명의 변화로, 이제는 Paradigm Shift로만 그치는것이 아니라 Revolution이라는 생각이 들 정도로 AI의 세상은 이미 도래했고, 무섭게 진행하고 있음을 몸소 느낍니다.      하루라도 더 빨리 친해지는게 나에게 놓여진 단 하나의 선택일듯 싶습니다. 만약, 1기생도로 발을 담그지 않았다면 이런 자각도 없었겠지요.      늘 그렇듯 인생은 파란약과 빨간약을 양쪽 손에 들고 말합니다. 파란 약을 먹으면 보고 싶은 것만 보게 되고, 믿고 싶은 것만 믿게 된다고. 평범한 일상을 함께 한다고 말입니다.    지금은 빨간약(AI)를 먹고 갈때까지 가봐야할 시기일겁니다. 지금 누군가도, 문앞에 서성인다면, 문을 열고 들어가십시요.",
  },
  {
    title: '챌린지 도전기 8 -> 클릭 상세내용 보기',
    content:
      "챗GPT를 일반인들이 쓰기는 하는 건가? 뉴스와 유튜브에서는 온통 챗GPT 얘기인데, 내 주변엔 쓰는 사람이 나밖에는 없었다. 내 수준이라는 것도 가끔 질문 몇개하고, 그 경험으로 주변사람들에게 자랑할 정도였으니.....지금 돌이켜 보면 어질어질하다. 그러던 중, 에코에서 재현쌤의 강의를 보고 전자책을 구매한게 이 모든 일의 시작이 되었다. 정말 아무나 가능할까? 챗GPT를 이용해서 코딩이라는 게 가능할까? 코딩을 느낌으로 아는 내가 홈페이지를 제작한다고? 컴맹이 괜히 껴서 걸림돌이 되는건 아닐까? 이 모든 걱정은 단톡방에 초대되면서 싸그리 날라갔다. 개발자도 계셨지만, 나같은 분들도 계셨셨으니까. ^^ '하루 1시간 정도만 집중하면 잘 따라오실꺼에요' 라는 재현쌤의 말도 철썩같이 믿었다. 그렇게 한주를 보내면서, 나는, 이거 장난 아님을 깨달았다. 그날부터 때아닌 야근을 하게 됐다. 쌤이 가르쳐주신대로 하다보니, 코딩이 짜지면서 어설프지만 뭔가가 만들어져 갔다. 깃허브를 통해 홈페이지가 나타날때의 순간은 지금도 잊을 수가 없다. 나 정말 개발자가 된건가? 하고 혼자 웃고, 발을 동동 굴렀다. 가르쳐주시는 재현쌤도 대단했고, 참여하신 분들의 열정에도 놀랐다. 1기분들께 도움도 많이 받았다. 남을 가르쳐주는 것만큼 큰공부가 없음을 이분들을 통해 일깨웠다. 이제 2주가 지나고 남은 2주간 개인프로젝트에 돌입한다. 나는 1기 모두의 프로젝트가 잘 마무리 될 것을 의심치 않는다. 해결되지 않는 문제는 챗GPT와 우리들이 해결해 줄 테니까! ",
  },
  {
    title: '챌린지 도전기 9 -> 클릭 상세내용 보기',
    content:
      "단톡방에서 코딩 수업이 개설된다는 소식을 듣자마자 물어봤습니다.' 완벽한 제로 상태에서 가능하겠습니까?' 돌아오는 대답은... 가능하다는 말이었습니다. 딱 3분 생각하고 무작정 신청서를 썼습니다. 1기가 시작된 첫날 올라오는 강의 영상을 보면서 이런 생각을 했습니다. ' 내가 미쳤었구나...'지옥의 첫 일주일이었습니다. 기본적인 컴퓨터에 대한 지식도 블로그를 쓰는 수준이었기 때문에 기본적인 구조를 이해해야 하는 시간은 때론 고통이었습니다. 만들면서 이해하는 과정은 힘들었지만 새로운 시냅스가 뇌에 깔린 것처럼 신기한 경험을 하기 시작합니다. 힘든 일주일이 지나자 코딩 언어가 점점 더 눈에 보이기 시작했으니까요.....^^ 2주 차가 되자 또 다른 경험을 합니다. 챗과 대화하는 방법에 대한 구체적인 실전에 돌입합니다. 질문에 따라 코드를 주는 방식이 얼마나 달라지고 그 정확도가 얼마나 달라지는지를 경험하게 됩니다. 개발자가 아니어도 코딩이 가능하는 것이 무엇인지 느끼기 시작하는 순간입니다. 이때부터는 챗과의 대화가 친밀해집니다. 대화가 거듭될수록 질문하는 스킬을 연구하게 됩니다. 아마도 이 과정이 무한 반복된다면 상상하는 모든 것이 가능해지는 순간이 올 것 같습니다. 1기 단톡방의 열정은 활활 타오르는 수준이어서 하루를 이틀처럼 쓰는 분들이 대부분입니다. 각자의 아이디어를 현실화 시키기 위한 열정이 시간이 지날수록 커지는 걸 느끼고 있습니다. 어려운 순간에 서로 도움을 주고받기도 합니다. 먼저 익힌 사람이 어려움을 겪고 있는 사람에게 도움을 주는 멋진 순간이죠.. 재현님이 해결사처럼 나타나 직접 해주시는 코칭도 대단합니다. 1기의 열정이 꺼지지 않길 바라며 모두의 아이디어가 탄생되는 순간 그리고 앞으로도 끝없이 이어질 도전에 화이팅을 외쳐봅니다~~!!",
  },
  {
    title: '챌린지 도전기 10 -> 클릭 상세내용 보기',
    content:
      '만들고 싶은 것이  있을 때 1.	내 손을 직접  거쳐  만든다. 2.	나의 생각, 감각, 아이디어가 그대로 반영되게 한다.3.	나의 의도가 반영되는 작업 과정 자체로도  즐겁다. 4.	머리 속 구상이 작업물이라는 실체로 만들어지면, 마치 창조주라고 된듯한 기분이 드는데  결과가 원하는데로 나오면  성취감을 크게 느끼고, 그렇치 않다고 해도 결과물의 수정을 거쳐  발전시켜 나아가는  첫 걸음을  내딛었다는  의미와 함께   매력을 느낀다 5.	어느 때인가부터  유튜브 채널에서  추천해주는 조코딩 채널에 - 일반인도 코딩을, 뚝딱 홈페이지를 만들고, 게임을 만들고, 배포하는 과정을 보여주는 영상을 보고나서  심한 감동을 받고  실천을 해야겠는 강한 의지가  나를 사로 잡기 시작했었다. 그래서 틈틈히 조코딩과 기타 관련 채널을. 챙겨보는 과정중에  연관된 아이디어들이 새싹나듯 돋아나면서 나를 자극했기에, 컴퓨터를 켜고 이것저것 설치도 해보고 따라서 해보기도 했었다. 하지만, 혼자서  전문 개발자의  과정을  영상만 보고 따라 한다는데엔  한계가  있어 -원인도 모를 막힘과 함께, 프로그램 설치부터 안되는 경우도 있고, 전문 용어의  정의나, 그 기능이 의미하는 바가 정확하게 뭔지 모르겠는 경우가 많아 중도에  컴퓨터 창을  닫아놓고 , 우선 순위의 일들에 밀려  보류해두곤 했다. 그런데 이번 챌린지 과정에서 내가 얻은건, 1.	혼자하는게 아니다. 막히면 재현 리더님한테 바로바로  물어서 해결이 가능하다.(물론 혼자 고민하면서 써칭해가며 알아가면  습득하는게 더 있지만, 든든한 지원군이 대기하고 있다없다와  시간을 많이 단축시킬 수있다없다의 차이는  크다고 본다.) 2.	데드라인이 있다.  나의 경우 개인적인 스케쥴로 거의 10일간 수업 강의에  진입을 못하고 있어,  그룹내에서 제일 뒤쳐지고 있었는데, 모든 멤버들이 열정적으로 참여해서 결과물을 올린다거나 , 실시간 질문과 답변을 주고 받는다거나하는 과정 때문에 긴장감을 늦출수가 없었다. 아마 혼자서하는 코딩 공부였다면, 긴장감이 없어 장기전으로 갔을 것이다. 3.	ChatGPT라는 핵심  트렌드를  충분히 반영하여, 평소 알고 싶었던 API key 발급과 적용하는 위치, 코딩의 어느요소가 어떤 작용과 관련이 있다를  익히게되고,  4.	오픈 AI 사이트에서 보이는 많은 활용 예시들은  도대체  어떻게 사용하는거야? 하던 궁금증  일부 해소가 되었다는점,  5.	파이썬 가상공간을 이용하고, 모바일 가상공간을 다뤄보고,  깃허브를 통해 홈페이지 사이트를 배포하고,  깃허브를 다뤄보는 과정 6.	챗지피티에게  역할을 부여하고, 원하는 답을 구하기위해  질문을  정리하는 사고를 하게되는건 말할 것도 없고, 챗지피티를 다루면서 원하는 결과물을 도출하도록 계속 훈련한다는 점 7.	A~Z 까지를 다 알 필요는 없고 , 재현 리더님이 미리 준비해주신  폴더 자료를 가지고  핵심  요소요소들을  콕  찝어  익혔다는 점. 즉, 조금만 아이디어를 내보면 활용할 범위가 엄청 많다는것. 8.	전체 과정속에서  디테일하게  알게되는 것들이  일반인이었던  내겐  무수히 많았다는 점. 9.	개별 맞춤 앱 개발을 포함해서  1달의 챌린지과정에  5가지나되는  내 소유의 결과물들이 트로피처럼  생긴다는 것 뿐만 아니라, 10. 전체 결과물 숫자로만 본다면  5가지일지 모르나,  7번에서 언급한것처럼 동일한 선상의 아이디어 범위를  확장하는 것을 넘어서,심도있게  + 챗지피티 ==> 더 발전된 업그레이드  버젼을  만들 수있는 가능성이 무려 200프로라는 것이다. 처음 시작하고는  얼마안되서,  1기 시즌 2 다음 챌린지도 쭉 진행이 되냐고  물어볼 정도로  너무  만족하는  과정이었고, 참여하시는 멤버분들이 다들 잠도 안자고 열의를 가지고 집중할 정도여서 ,  일단 같이 하는 구성원분들도  너무 좋았고, 원래 제자가 열의를 보이고, 자주 질문하고,  상호 리액션이 오가면, 가르치는 사람 또한 재미가 나서 더 열성적이게 되는데, 이번의 경우를 봐도 , 재현 리더님이 얼마나 열의있고, 재미있게  수업을 진행하시는지를  볼 수 있었던 , 시너지가 배가되는  챌린지였던거 같다.    여기까지  이번 챌린지 과정을 참여하면서  얻은 것들과 소감들을  개인 노트하듯 적다보니  어조가 짧게  끝나는 점을 감안하고  봐주시면  감사하겠다. 읽어주셔서 감사합니다.',
  },
  // ...more reviews
]

export default function SimpleAccordion() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Typography variant="h3" className={classes.title}>
        <Box fontWeight="fontWeightBold">생생한 경험담</Box>
      </Typography>
      {reviews.map((review, index) => (
        <Accordion key={index}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${index}a-content`}
            id={`panel${index}a-header`}
          >
            <Typography className={classes.heading}>{review.title}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{review.content}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  )
}
