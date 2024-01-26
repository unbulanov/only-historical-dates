import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";
import "../assets/styles/historical-dates.scss";
import { Theme } from '../types/themes';
import ThemesSlider from "./Themes";
import YearsCircle from "./YearsCircle";

interface Props {
  className: string;
  themes: Array<Theme>;
}

const HistoricalDates = ({ className, themes }: Props) => {
  const [activeTheme, setActiveTheme] = useState(0);
  const scope = useRef(null);

  const getFirstDate = (theme: Theme): number => {
    return theme?.dates[0].date;
  }

  const getLastDate = (theme: Theme) => {
    const lastIndex = theme?.dates.length - 1;
    return theme?.dates[lastIndex].date;
  }

  useEffect(() => {
    // @ts-ignore
    const ctx = gsap.context(() => {
      gsap.to('.historical-dates__date--first', { duration: 0.5, textContent: getFirstDate(themes[activeTheme]), snap: { textContent: 1 } });
      gsap.to('.historical-dates__date--last', { duration: 0.5, textContent: getLastDate(themes[activeTheme]), snap: { textContent: 1 } });
    }, scope);

  }, [activeTheme])

  return (
    <section className={`${className} historical-dates`} ref={scope}>
      <div className="container historical-dates__inner">
        <h2 className="historical-dates__title">
          Исторические<br />даты
        </h2>
        <div className="historical-dates__main-dates container">
          <h3 className="historical-dates__date historical-dates__date--first"></h3>
          <h3 className="historical-dates__date historical-dates__date--last"></h3>
        </div>
        <div className="historical-dates__circle">
          <YearsCircle themes={themes} activeTheme={activeTheme} setActiveTheme={setActiveTheme} />
        </div>
        <ThemesSlider className="historical-dates__slider" themes={themes} activeTheme={activeTheme} setActiveTheme={setActiveTheme} />
      </div>
    </section>
  );
}

export default HistoricalDates;