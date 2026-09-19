import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindows, faApple, faLinux } from '@fortawesome/free-brands-svg-icons';
import { faBolt, faChevronDown, faDownload, faInfoCircle, faCheck, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import Heading from '@theme/Heading';
import styles from './index.module.css';
import Silk from '@site/src/components/Silk';

function useDetectedOS() {
  const [detectedOS, setDetectedOS] = useState('Windows');

  useEffect(() => {
    if (typeof window === 'undefined' || !window.navigator) return;
    const ua = (window.navigator.userAgent || '').toLowerCase();
    const platform = (window.navigator.platform || '').toLowerCase();

    if (ua.includes('mac') || platform.includes('mac')) {
      setDetectedOS('macOS');
    } else if (ua.includes('linux') || platform.includes('linux') || ua.includes('x11')) {
      setDetectedOS('Linux');
    } else {
      setDetectedOS('Windows');
    }
  }, []);

  return detectedOS;
}

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
        <div className={styles.statNumber}>1.7.2</div>
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

function HomepageHeader({ detectedOS }) {
  const {siteConfig} = useDocusaurusContext();
  const silkColor = '#3e38a1';
  const WindowPreview = require('@site/static/img/window.png').default;

  const scrollToDownloads = (e) => {
    e.preventDefault();
    const downloadsSection = document.getElementById('downloads');
    if (downloadsSection) {
      downloadsSection.scrollIntoView({ behavior: 'smooth' });
      if (window.history?.pushState) {
        window.history.pushState(null, '', '#downloads');
      }
    }
  };

  const osConfig = {
    Windows: { label: 'Download for Windows', icon: faWindows },
    macOS: { label: 'Download for macOS', icon: faApple },
    Linux: { label: 'Download for Linux', icon: faLinux },
  }[detectedOS] || { label: 'Download for Windows', icon: faWindows };

  return (
    <header className={clsx('', styles.heroBanner)}>
      <div className={styles.silkBackground}>
        <Silk 
          speed={3} 
          scale={0.5} 
          color={silkColor} 
          noiseIntensity={1.7} 
          rotation={2.15}
        />
      </div>
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
              <a
                href="#downloads"
                onClick={scrollToDownloads}
                className={`button button--lg ${styles.gradientButton} ${styles.buttonSpace}`}
                aria-label={osConfig.label}
              >
                <FontAwesomeIcon icon={osConfig.icon} className={styles.buttonIcon} />
                {osConfig.label}
              </a>
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

function DownloadSection({ detectedOS }) {
  const isWindows = detectedOS === 'Windows';
  const isMac = detectedOS === 'macOS';
  const isLinux = detectedOS === 'Linux';

  return (
    <section className={styles.downloadSection}>
      <div className="container">
        <div className={styles.downloadHeader}>
          <Heading as="h2" id="downloads" className={styles.downloadSectionTitle}>
            Downloads
          </Heading>
          <p className={styles.downloadSectionSubtitle}>
            PolyUploader is cross-platform. Choose your operating system to get started.
          </p>
        </div>

        <div className={`row ${styles.downloadRow}`}>
          {/* Windows Card */}
          <div className={clsx('col col--4', styles.downloadCol)}>
            <div className={clsx(styles.downloadCard, isWindows && styles.downloadCardActive)}>
              {isWindows && (
                <div className={styles.osBadge}>
                  <FontAwesomeIcon icon={faCheck} className={styles.osBadgeIcon} />
                  Detected OS
                </div>
              )}
              <div className={styles.downloadCardIcon}>
                <FontAwesomeIcon icon={faWindows} />
              </div>
              <Heading as="h3" className={styles.downloadCardTitle}>
                Windows
              </Heading>
              <p className={styles.downloadCardSubtitle}>
                Windows 10 / 11 (64-bit)
              </p>
              <div className={styles.downloadAction}>
                <a
                  href="https://github.com/spel987/PolyUploader/releases/download/v1.7.2/PolyUploader_1.7.2_x64-setup.exe"
                  className={clsx(
                    styles.downloadBtn,
                    isWindows ? styles.gradientButton : styles.downloadButtonSecondary
                  )}
                >
                  <FontAwesomeIcon icon={faDownload} className={styles.buttonIcon} />
                  Download .exe
                </a>
              </div>
              <div className={styles.downloadMeta}>
                <span>Installer (Setup x64)</span>
              </div>
            </div>
          </div>

          {/* Linux Card */}
          <div className={clsx('col col--4', styles.downloadCol)}>
            <div className={clsx(styles.downloadCard, isLinux && styles.downloadCardActive)}>
              {isLinux && (
                <div className={styles.osBadge}>
                  <FontAwesomeIcon icon={faCheck} className={styles.osBadgeIcon} />
                  Detected OS
                </div>
              )}
              <div className={styles.downloadCardIcon}>
                <FontAwesomeIcon icon={faLinux} />
              </div>
              <Heading as="h3" className={styles.downloadCardTitle}>
                Linux
              </Heading>
              <p className={styles.downloadCardSubtitle}>
                Ubuntu, Debian, Fedora, Arch & more
              </p>
              <div className={styles.downloadAction}>
                <a
                  href="https://github.com/spel987/PolyUploader/releases/download/v1.7.2/PolyUploader_1.7.2_amd64.AppImage"
                  className={clsx(
                    styles.downloadBtn,
                    isLinux ? styles.gradientButton : styles.downloadButtonSecondary
                  )}
                >
                  <FontAwesomeIcon icon={faDownload} className={styles.buttonIcon} />
                  Download .AppImage
                </a>
              </div>
              <div className={styles.additionalLinks}>
                <span className={styles.additionalLabel}>Other packages:</span>
                <div className={styles.pillGroup}>
                  <a
                    href="https://github.com/spel987/PolyUploader/releases/download/v1.7.2/PolyUploader_1.7.2_amd64.deb"
                    className={styles.downloadPill}
                    title="Debian / Ubuntu package"
                  >
                    .deb
                  </a>
                  <a
                    href="https://github.com/spel987/PolyUploader/releases/download/v1.7.2/PolyUploader-1.7.2-1.x86_64.rpm"
                    className={styles.downloadPill}
                    title="Red Hat / Fedora package"
                  >
                    .rpm
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* macOS Card */}
          <div className={clsx('col col--4', styles.downloadCol)}>
            <div className={clsx(styles.downloadCard, isMac && styles.downloadCardActive)}>
              {isMac && (
                <div className={styles.osBadge}>
                  <FontAwesomeIcon icon={faCheck} className={styles.osBadgeIcon} />
                  Detected OS
                </div>
              )}
              <div className={styles.downloadCardIcon}>
                <FontAwesomeIcon icon={faApple} />
              </div>
              <Heading as="h3" className={styles.downloadCardTitle}>
                macOS
              </Heading>
              <p className={styles.downloadCardSubtitle}>
                macOS 10.15+ (Universal Intel & Apple Silicon)
              </p>
              <div className={styles.downloadAction}>
                <a
                  href="https://github.com/spel987/PolyUploader/releases/download/v1.7.2/PolyUploader_1.7.2_universal.dmg"
                  className={clsx(
                    styles.downloadBtn,
                    isMac ? styles.gradientButton : styles.downloadButtonSecondary
                  )}
                >
                  <FontAwesomeIcon icon={faDownload} className={styles.buttonIcon} />
                  Download .dmg
                </a>
              </div>
              <div className={styles.additionalLinks}>
                <span className={styles.additionalLabel}>Archive:</span>
                <div className={styles.pillGroup}>
                  <a
                    href="https://github.com/spel987/PolyUploader/releases/download/v1.7.2/PolyUploader_universal.app.tar.gz"
                    className={styles.downloadPill}
                    title="Universal App tar.gz"
                  >
                    .app.tar.gz
                  </a>
                </div>
              </div>
              <p className={styles.macNote}>
                *Unsigned: Right-click app &gt; Open on first run to bypass Gatekeeper.
              </p>
            </div>
          </div>
        </div>

        {/* Cross-platform notice & GitHub release link */}
        <div className={styles.downloadNotice}>
          <div className={styles.noticeIcon}>
            <FontAwesomeIcon icon={faInfoCircle} />
          </div>
          <p className={styles.noticeText}>
            PolyUploader is cross-platform. While the Windows version is the most tested, Linux and macOS builds are actively improving and may experience occasional quirks.{' '}
            <a
              href="https://github.com/spel987/PolyUploader/releases/tag/v1.7.2"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.releaseLink}
            >
              View all release assets & checksums on GitHub <FontAwesomeIcon icon={faExternalLinkAlt} className={styles.externalIcon} />
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  const detectedOS = useDetectedOS();

  return (
    <Layout
      title="Home"
      description="Upload your files remotely to different hosting sites">
      <HomepageHeader detectedOS={detectedOS} />
      <main>
        <HomepageFeatures />
        <DownloadSection detectedOS={detectedOS} />
      </main>
    </Layout>
  );
}