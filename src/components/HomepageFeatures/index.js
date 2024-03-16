import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Free',
    Svg: require('@site/static/img/free-icon.svg').default,
    description: (
      <>
        PolyUploader is completely <strong>free</strong> and can be downloaded from GitHub right now!
      </>
    ),
  },
  {
    title: 'Open-source',
    Svg: require('@site/static/img/opensource-icon.svg').default,
    description: (
      <>
        PolyUploader is <strong>open-source</strong>, with its code also available on the GitHub repository. 
      </>
    ),
  },
  {
    title: 'Powered by Rust',
    Svg: require('@site/static/img/rust-icon.svg').default,
    description: (
      <>
        PolyUploader is powered by <strong>Tauri</strong>, a tool developed in <strong>Rust</strong>. This makes it fast, reliable and secure.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
