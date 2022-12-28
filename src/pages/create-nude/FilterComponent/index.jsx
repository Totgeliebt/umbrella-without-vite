import React, { useState, useEffect, useRef } from "react";
import scss from "./styles.module.scss";

// images-filter
import Wave from "../../../assets/images/filters/Wave.png";
import Warm from "../../../assets/images/filters/Warm.png";
import Scream from "../../../assets/images/filters/Scream.png";
import Pencil from "../../../assets/images/filters/Pencil.png";
import Mononoke from "../../../assets/images/filters/Mononoke.png";
import Lavender from "../../../assets/images/filters/Lavender.png";
import Gothic from "../../../assets/images/filters/Gothic.png";
import ColorPencil from "../../../assets/images/filters/ColorPencil.png";
import Cartoon from "../../../assets/images/filters/Cartoon.png";
import B_W from "../../../assets/images/filters/B_W.png";

// images-masks
import Emojify from "../../../assets/images/masks/Emojify.png";
import Toonify from "../../../assets/images/masks/Toonify.png";
import Toonifyplus from "../../../assets/images/masks/Toonifyplus.png";
import { useTranslation } from "react-i18next";

const masksArr = [
  { value: "emojify", title: "Emojify", img: Emojify, processingType: 15 },
  { value: "toonify", title: "Toonify", img: Toonify, processingType: 16 },
  {
    value: "toonifyplus",
    title: "Toonifyplus",
    img: Toonifyplus,
    processingType: 14,
  },
];
const filterArr = [
  { value: "wave", title: "Wave", img: Wave, processingType: 5 },
  { value: "warm", title: "Warm", img: Warm, processingType: 4 },
  { value: "scream", title: "Scream", img: Scream, processingType: 8 },
  { value: "pencil", title: "Pencil", img: Pencil, processingType: 2 },
  { value: "mononoke", title: "Mononoke", img: Mononoke, processingType: 7 },
  { value: "lavender", title: "Lavender", img: Lavender, processingType: 6 },
  { value: "gothic", title: "Gothic", img: Gothic, processingType: 9 },
  {
    value: "color_pencil",
    title: "ColorPencil",
    img: ColorPencil,
    processingType: 3,
  },
  { value: "cartoon", title: "Cartoon", img: Cartoon, processingType: 1 },
  { value: "black&white", title: "black & white", img: B_W, processingType: 0 },
];

function ListMasks(events) {
  const { activeMask, setActiveMask } = events;
  return (
    <>
      <ul className={scss.list}>
        {masksArr.map((el, i) => (
          <li
            className={scss.item}
            key={i}
            data-active={i === activeMask}
            onClick={() => setActiveMask(i)}
          >
            <div className={scss.item__img}>
              <img src={el.img} />
            </div>
            <h4 className={scss.item__title}>{el.title}</h4>
          </li>
        ))}
      </ul>
    </>
  );
}

function ListFilter(events) {
  const { activeFilter, setActiveFilter } = events;
  return (
    <>
      <ul className={scss.list}>
        {filterArr.map((el, i) => (
          <li
            className={scss.item}
            key={i}
            data-active={i === activeFilter}
            onClick={() => setActiveFilter(i)}
          >
            <div className={scss.item__img}>
              <img src={el.img} />
            </div>
            <h4 className={scss.item__title}>{el.title}</h4>
          </li>
        ))}
      </ul>
    </>
  );
}

function FilterComponent({ change }) {
  const [headMasksActive, setHeadMasksActive] = useState(true);
  const [activeMask, setActiveMask] = useState(0);
  const [activeFilter, setActiveFilter] = useState(0);
  const list_block = useRef(null);

  useEffect(() => {
    let result = {
      type: headMasksActive ? "mask" : "filter",
      value: headMasksActive
        ? masksArr[activeMask].value
        : filterArr[activeFilter].value,
      activeMask: masksArr[activeMask].value,
      activeFilter: filterArr[activeFilter].value,
      processingType: headMasksActive
        ? masksArr[activeMask].processingType
        : filterArr[activeFilter].processingType,
    };

    if (typeof change == "function") change(result);
  }, [activeMask, activeFilter, headMasksActive]);

  useEffect(() => {
    checkScroll();
  }, [activeMask, activeFilter]);

  function nextItem() {
    if (headMasksActive) {
      setActiveMask((prev) => {
        let result = prev;
        prev < masksArr.length - 1 && result++;
        return result;
      });
    } else {
      setActiveFilter((prev) => {
        let result = prev;
        prev < filterArr.length - 1 && result++;
        return result;
      });
    }
  }
  function prevItem() {
    if (headMasksActive) {
      setActiveMask((prev) => {
        let result = prev;
        prev > 0 && result--;
        return result;
      });
    } else {
      setActiveFilter((prev) => {
        let result = prev;
        prev > 0 && result--;
        return result;
      });
    }
  }

  function checkScroll() {
    let list = list_block.current.querySelector("ul");
    let active_item = list.querySelector('li[data-active="true"]');

    list.scrollTo({
      left: active_item.offsetLeft - 20,
      behavior: "smooth",
    });
  }
  const { t } = useTranslation();
  const lng = t("create nude", { returnObjects: true });

  return (
    <>
      <div className={scss.wrap}>
        <div className={scss.head}>
          <button
            type="button"
            className={scss.head__btn}
            data-active={headMasksActive}
            onClick={(e) => setHeadMasksActive(true)}
          >
            {lng["masks"]}
          </button>
          <button
            type="button"
            className={scss.head__btn}
            data-active={!headMasksActive}
            onClick={(e) => setHeadMasksActive(false)}
          >
            {lng["filters"]}
          </button>
        </div>
        <div className={scss.body} ref={list_block}>
          {headMasksActive ? (
            <ListMasks activeMask={activeMask} setActiveMask={setActiveMask} />
          ) : (
            <ListFilter
              activeFilter={activeFilter}
              setActiveFilter={setActiveFilter}
            />
          )}
        </div>
        <div className={scss.foot}>
          <button type="button" className={scss.foot__arrow} onClick={prevItem}>
            ←
          </button>
          <button type="button" className={scss.foot__arrow} onClick={nextItem}>
            →
          </button>
        </div>
      </div>
    </>
  );
}

export default FilterComponent;
