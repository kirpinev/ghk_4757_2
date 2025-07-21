import { Typography } from "@alfalab/core-components/typography";

import hero from "./assets/hero.png";
import present from "./assets/present.png";
import { LS, LSKeys } from "./ls";
import { appSt } from "./style.css";
import { ThxLayout } from "./thx/ThxLayout";
import { Gap } from "@alfalab/core-components/gap";
import { useState } from "react";

import { StarMIcon } from "@alfalab/icons-glyph/StarMIcon";
import { BanknotesMIcon } from "@alfalab/icons-glyph/BanknotesMIcon";
import { PercentMediumMIcon } from "@alfalab/icons-glyph/PercentMediumMIcon";
import { ButtonMobile } from "@alfalab/core-components/button/mobile";

export const App = () => {
  const [thxShow, setThx] = useState(LS.getItem(LSKeys.ShowThx, false));

  const advice = () => {
    window.gtag("event", "4757_get_sub", {
      variant_name: "4757_2",
    });
    LS.setItem(LSKeys.ShowThx, true);
    setThx(true);
  };

  if (thxShow) {
    return <ThxLayout />;
  }

  return (
    <>
      <div className={appSt.container}>
        <img
          src={hero}
          style={{ borderRadius: "1rem" }}
          alt="Картинка Альфа-Смарт"
        />

        <Gap size={32} />

        <div className={appSt.products}>
          <Typography.TitleResponsive
            font="system"
            tag="h2"
            weight="bold"
            view="medium"
          >
            Пригласите пенсионера и уменьшите платежи на 10%
          </Typography.TitleResponsive>
          <Typography.Text
            view="primary-medium"
            tag="p"
            className={appSt.productText}
          >
            Объединим ваши кредиты в один и уменьшим платёж, когда близкому
            придёт первая пенсия в Альфа-Банк
          </Typography.Text>

          <Gap size={2} />

          <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
            <img src={present} alt="" width={48} height={48} />
            <div
              style={{
                backgroundColor: "#F2F3F5",
                padding: "1rem",
                borderRadius: "1rem",
              }}
            >
              Если пригласите в июле, подарим вам 3000 ₽
            </div>
          </div>

          <Gap size={2} />

          <Typography.Text
            view="primary-large"
            tag="p"
            weight="bold"
            className={appSt.productText}
          >
            Плюсы для пенсионеров
          </Typography.Text>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              borderRadius: "1rem",
              gap: "1rem",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <div
                style={{
                  backgroundColor: "#F2F3F5",
                  padding: "1rem",
                  borderRadius: "1rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <StarMIcon />
              </div>
              <div>
                <Typography.Text
                  view="primary-medium"
                  tag="p"
                  className={appSt.productText}
                >
                  Карта и уведомления — 0 ₽
                </Typography.Text>
                <Typography.Text
                  view="primary-medium"
                  color="secondary"
                  tag="p"
                  className={appSt.productText}
                >
                  Навсегда и без условий
                </Typography.Text>
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <div
                style={{
                  backgroundColor: "#F2F3F5",
                  padding: "1rem",
                  borderRadius: "1rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <PercentMediumMIcon />
              </div>
              <div>
                <Typography.Text
                  view="primary-medium"
                  tag="p"
                  className={appSt.productText}
                >
                  Высокие ставки по вкладу
                </Typography.Text>
                <Typography.Text
                  view="primary-medium"
                  color="secondary"
                  tag="p"
                  className={appSt.productText}
                >
                  От 10 000 ₽ и от 4 месяцев
                </Typography.Text>
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <div
                style={{
                  backgroundColor: "#F2F3F5",
                  padding: "1rem",
                  borderRadius: "1rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <BanknotesMIcon />
              </div>
              <div>
                <Typography.Text
                  view="primary-medium"
                  tag="p"
                  className={appSt.productText}
                >
                  До 5% кэшбек в аптеках
                </Typography.Text>
                <Typography.Text
                  view="primary-medium"
                  color="secondary"
                  tag="p"
                  className={appSt.productText}
                >
                  Каждый месяц
                </Typography.Text>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Gap size={96} />

      <div className={appSt.bottomBtnThx}>
        <ButtonMobile onClick={advice} block view="primary">
          Советовать
        </ButtonMobile>
      </div>
    </>
  );
};
