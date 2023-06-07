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
