import clsx from 'clsx';
import React from 'react';

import styles from './styles.module.css';

interface FeatureItem {
  title: string;
  description: JSX.Element;
}

const FeatureList: FeatureItem[] = [
  {
    title: 'React 전용',
    description: (
      <>
        코어 라이브러리를 React 로 래핑한 것이 아닌 순수 React 용 라이브러리입니다.
      </>
    ),
  },
  {
    title: 'Headless UI',
    description: (
      <>
        특정 디자인이 입혀지지 않은 Headless 함을 지향합니다.
      </>
    ),
  },
  {
    title: '고급 컴포넌트 지원',
    description: (
      <>
        그리드나 테이블과 같은 복잡한 컴포넌트를 지원합니다.
      </>
    ),
  },
];

function Feature({ title, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className='text--center padding-horiz--md'>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className='container'>
        <div className='row'>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}