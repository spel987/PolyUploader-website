import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Multi-host upload',
    Svg: require('@site/static/img/upload-icon.svg').default || (() => <div className={styles.placeholderIcon}>📤</div>),
    description: (
      <>
        Upload from local storage or via URL to <strong>130 hosts</strong> at once.
      </>
    ),
  },
  {
    title: 'API key integration',
    Svg: require('@site/static/img/api-icon.svg').default || (() => <div className={styles.placeholderIcon}>🔑</div>),
    description: (
      <>
        Link your <strong>own API keys</strong> for compatible hosts.
      </>
    ),
  },
  {
    title: 'Upload history',
    Svg: require('@site/static/img/history-icon.svg').default || (() => <div className={styles.placeholderIcon}>⏱️</div>),
    description: (
      <>
        View a <strong>detailed history</strong> of your uploads with expiration status and delete buttons.
      </>
    ),
  },
  {
    title: 'Upload profiles',
    Svg: require('@site/static/img/profiles-icon.svg').default || (() => <div className={styles.placeholderIcon}>⚙️</div>),
    description: (
      <>
        Create and manage <strong>upload profiles</strong> to automate frequent tasks.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--3', styles.featureCol)}>
      <div className={styles.featureCard}>
        <div className={styles.featureIconContainer}>
          <Svg className={styles.featureSvg} role="img" />
        </div>
        <div className={styles.featureContent}>
          <Heading as="h3" className={styles.featureTitle}>{title}</Heading>
          <p className={styles.featureDescription}>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section id="why-choose" className={styles.features}>
      <div className="container">
        <div className={styles.featuresHeader}>
          <Heading as="h2" className={styles.sectionTitle}>
            Why choose PolyUploader?
          </Heading>  
          <p className={styles.sectionSubtitle}>
            A modern and efficient solution for all your upload needs
          </p>
        </div>
        <div className={`row ${styles.featuresRow}`}>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
        <div className="row">
          <div className="col col--12">
            <div className={`${styles.featureCard} ${styles.competitiveSection}`}>
              <div className={styles.competitiveContent}>
                <Heading as="h3" className={styles.competitiveTitle}>More features. No account. Full control.</Heading>
                <p className={styles.competitiveText}>
                  PolyUploader is a <strong>serious alternative</strong> to{' '}<a href="https://www.mirrored.to" target="_blank" rel="noopener noreferrer" className={styles.platformLink}><strong>Mirrored.to</strong></a>,{' '}<a href="https://www.mirrorace.org" target="_blank" rel="noopener noreferrer" className={styles.platformLink}><strong>Mirrorace.org</strong></a>, and{' '}<a href="https://www.multiup.io" target="_blank" rel="noopener noreferrer" className={styles.platformLink}><strong>Multiup.io</strong></a>. Fast, open-source, and designed for a smooth, reliable experience.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.moreInfo}>
          <p>
            And find out more in the <span className={styles.highlight}>application</span>
          </p>
        </div>
      </div>
    </section>
  );
}