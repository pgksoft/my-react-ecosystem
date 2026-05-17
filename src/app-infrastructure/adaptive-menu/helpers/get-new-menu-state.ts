/* eslint-disable @typescript-eslint/no-use-before-define */
export interface TMenu {
  lineItems: JSX.Element[];
  popUpItems: JSX.Element[];
}

export interface INewMenu {
  menu: TMenu;
  isNewMenu: boolean;
}

export function getNewMenuState(
  elements: JSX.Element[],
  container: HTMLDivElement,
  menuKey: string
): INewMenu {
  let newMenu: INewMenu = {
    menu: {
      lineItems: elements,
      popUpItems: []
    },
    isNewMenu: false
  };
  const lineContainerRect: DOMRect = container.getBoundingClientRect();
  const listButtonRight: number[] = getListButtonRight(
    container,
    lineContainerRect.x,
    menuKey
  );
  if (listButtonRight[listButtonRight.length - 1] > lineContainerRect.width) {
    const lineItems: JSX.Element[] = [];
    const popUpItems: JSX.Element[] = [];
    listButtonRight.forEach((buttonRight, index) => {
      if (buttonRight < lineContainerRect.width) {
        lineItems.push(elements[index]);
      } else {
        popUpItems.push(elements[index]);
      }
    });
    newMenu = {
      menu: {
        lineItems,
        popUpItems
      },
      isNewMenu: true
    };
  }
  return newMenu;
}

// Helpers
const getListButtonRight = (
  container: Element,
  containerX: number,
  menuKey: string
): number[] => {
  const temp: number[] = [];
  const listButtons = container.querySelectorAll(`[data-name='${menuKey}']`);
  if (listButtons) {
    Array.from(listButtons.entries()).forEach((item) => {
      temp.push(
        item[1].getBoundingClientRect().x +
          item[1].getBoundingClientRect().width -
          containerX
      );
    });
  }
  return temp;
};
