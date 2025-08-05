import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWindows } from '@fortawesome/free-brands-svg-icons';
import { faBolt, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import Heading from '@theme/Heading';
import styles from './index.module.css';
import Silk from '@site/src/components/Silk';

function ShowMoreButton() {
  const scrollToFeatures = () => {
    const featuresSection = document.getElementById('why-choose');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <button 
      onClick={scrollToFeatures}
      className={styles.showMoreButton}
      aria-label="Show more"
    >
      Show more
      <FontAwesomeIcon icon={faChevronDown} className={styles.chevronIcon} />
    </button>
  );
}

function HeroStats() {
  return (
    <div className={styles.heroStats}>
      <div className={styles.statItem}>
        <div className={styles.statNumber}>1.7.0</div>
        <div className={styles.statLabel}>Current Version</div>
      </div>
      <div className={styles.statItem}>
        <div className={styles.statNumber}>100%</div>
        <div className={styles.statLabel}>Free</div>
      </div>
      <div className={styles.statItem}>
        <div className={styles.statNumber}>Open</div>
        <div className={styles.statLabel}>Source</div>
      </div>
    </div>
  );
}

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  const silkColor = '#3e38a1';
  const WindowPreview = require('@site/static/img/window.png').default;
  
  return (
    <header className={clsx('', styles.heroBanner)}>
    <div className={styles.silkBackground}>
      <Silk 
        speed={3} 
        scale={0.5} 
        color={silkColor} 
        noiseIntensity={1.7} 
        rotation={2.15}
      /></div>
      <div className={styles.heroBackground}></div>
      <div className="container">
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <div className={styles.badge}>
              <FontAwesomeIcon icon={faBolt} className={styles.badgeIcon} />
              Powered by Rust & Tauri
            </div>
            <Heading as="h1" className={`hero__title font-space-grotesk ${styles.heroTitle}`}>
              {siteConfig.title}
            </Heading>
            <p className={`hero__subtitle ${styles.heroSubtitle}`}>
              {siteConfig.tagline}
            </p>

            <div className={styles.buttons}>
              <Link
                className={`button button--lg ${styles.gradientButton} ${styles.buttonSpace}`}
                to="https://github.com/spel987/PolyUploader/releases/download/1.7.0/PolyUploader_1.7.0_x64-setup.exe">
                <FontAwesomeIcon icon={faWindows} className={styles.buttonIcon} />
                Download for Windows
              </Link>
              <Link
                className={`button button--secondary button--lg ${styles.secondaryButton}`}
                to="/presentation">
                Documentation
              </Link>
            </div>
            <HeroStats />
          </div>
          <div className={styles.heroVisual}>
            <div className={styles.appPreview}>
              <img src={WindowPreview} alt="PolyUploader Window Preview" className={styles.windowImage} />
            </div>
          </div>
        </div>
      </div>
      <ShowMoreButton />
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Home`}
      description="Upload your files remotely to different hosting sites">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}