
import { StepData } from './types';

export const STEPS_CONFIG: Record<number, Omit<StepData, 'value'>> = {
  1: {
    id: 1,
    title: 'Step1 이름',
    description: '당신의 이름(성명)',
    placeholder: '이름을 입력하세요...'
  },
  2: {
    id: 2,
    title: 'Step2 최고의 작업',
    description: '고마워요 당신 덕분에 OO할 수 있었어요! or 고마워요 당신이 OO해줘서 정말 기뻤어요! (고마워요!) 감사한 사람은 어떤 사람인가요? OO한 사람을 OO으로 도와주는 것',
    placeholder: '기억에 남는 최고의 작업 사례를 적어주세요...'
  },
  3: {
    id: 3,
    title: 'Step3 지금의 일',
    description: '기술, 지식에 초점을 맞추어 "무엇을 하고 있는가?"를 최대한 구체적으로 기입',
    placeholder: '현재 하고 있는 업무의 구체적인 내용을 입력하세요...'
  },
  4: {
    id: 4,
    title: 'Step4 당신의 실적',
    description: '업무 관련 실적이 가장 좋지만 사적인 실적이나 경험도 OK!',
    placeholder: '성과나 경험치를 입력하세요...'
  },
  5: {
    id: 5,
    title: 'Step5 당신이 할 수 있는 일',
    description: '지금의 일, 과거의 실적(업무)을 바탕으로 당신이 할 수 있는 일은 무엇인가요? 기술, 지식의 관점에서 구체적으로 기재\nOO할 수 있는 것 or OO하는 것 ➔ 잘할 수 있는 것 or OO하는 것',
    placeholder: '자신의 핵심 역량을 구체적으로 적어보세요...'
  },
  6: {
    id: 6,
    title: 'Step6 최고의 업무에 부족한 것들',
    description: '최고의 작업을 실현하기 위해 부족한 것은 무엇일까?',
    placeholder: '보완이 필요한 점을 입력하세요...'
  },
  7: {
    id: 7,
    title: 'Step7 부족함 해소',
    description: '지금 당신이 이미 가지고 있는 것으로 그 부족함을 해소할 수 있는 것이 있다면 무엇일까? 빌리거나 도움을 받는 관점도 OK',
    placeholder: '부족함을 어떻게 해결할지 적어보세요...'
  },
  8: {
    id: 8,
    title: 'Step8 타인과의 비교',
    description: "Step5의 '당신이 할 수 있는 일'이 다른 일반인과 다른 점, 쉽게 흉내 낼 수 없는 점은 무엇인가요? 다른 곳과 다른 OO점",
    placeholder: '차별화된 강점을 입력하세요...'
  },
  9: {
    id: 9,
    title: 'Step9 그것은 무엇이 좋은가?',
    description: "Step5의 '당신이 할 수 있는 일'에는 어떤 좋은 점이 있을까? OO(차별화요소)이기 때문에 OO할 수 있다 그 결과, OO할 수 있다",
    placeholder: '내 역량의 가치를 정의해보세요...'
  },
  10: {
    id: 10,
    title: 'Step10 가장 가치 있는 누릴 수 있는 사람은?',
    description: 'Step9의 가치를 가장 많이 누릴 수 있습니다. (돈을 내어줄 것 같은) 어떤 사람(or 회사)? OO으로 고민하는 OO한 사람 or OO하고 싶은 OO한 사람',
    placeholder: '나의 타겟 고객이나 대상을 입력하세요...'
  },
  11: {
    id: 11,
    title: 'Step11 새로운 커리어 이미지',
    description: '전체를 종합하여 새로운 커리어 이미지를 채워보세요. 0~한 사람에게 남들과는 다른 0~을 제공함으로써 ~할 수 있게 한다 or 커리어 이미지의 캐치프레이즈',
    placeholder: '당신만의 새로운 커리어 정의를 완성하세요...'
  }
};
