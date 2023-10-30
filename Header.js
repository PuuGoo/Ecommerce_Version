import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import "../../globalStyles.css";
import logo from "../../images/logoHPT.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComment,
  faShoppingCart,
  faChevronDown,
  faMagnifyingGlass,
  faCircleUser,
  faChevronRight,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import Input from "../../componentsDesignSystem/Inputs/Input";
const Header = () => {
  const hnh_menu = [
    {
      title: "dog",
      content: {
        food: [
          "Dry Food",
          "Wet Food",
          "Veterinary Diets",
          "Premium Food",
          "Fresh & Prepared Meals",
        ],
        treat: [
          "Soft & Chewy Treats",
          "Dental Treats",
          "Biscuits, Cookies ",
          "Bones, Bully Sticks & Natural Chews",
          "Training Treats",
        ],
        supply: [
          "Toys",
          "Healthcare",
          "Vitamins & Supplemnets",
          "Cleaning & Potty",
          "Crates, Pens & Gates",
        ],
      },
    },
    {
      title: "cat",
      content: {},
    },
    {
      title: "fish",
      content: {},
    },
    {
      title: "bird",
      content: {},
    },
    {
      title: "small pet",
      content: {},
    },
    {
      title: "reptile",
      content: {},
    },
    {
      title: "farm animal",
      content: {},
    },
    {
      title: "horse",
      content: {},
    },
    {
      title: "pharmacy",
      content: {},
    },
    {
      title: "pet parents",
      content: {},
    },
  ];
  const [isHoverShop, setIsHoverShop] = useState(false);
  const optionsInput = {
    isIcon: true,
    iconType: <FontAwesomeIcon icon={faSearch} />,
    isLabel: false,
    label: "Label",
    isPlaceholder: true,
    placeholder: "Search",
    fontSize: "body-large",
    size: "M",
  };

  return (
    <Fragment>
      <div class="header">
        <div className="container">
          <div class="header-action">
            <div class="header-action-component-1">
              <div className="header-action-align-justify">
                <svg
                  className="icon-align-justify"
                  width="40"
                  height="41"
                  viewBox="0 0 40 41"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.00016 8.8335C4.07969 8.8335 3.3335 9.57969 3.3335 10.5002C3.3335 11.4206 4.07969 12.1668 5.00016 12.1668H35.0002C35.9206 12.1668 36.6668 11.4206 36.6668 10.5002C36.6668 9.57969 35.9206 8.8335 35.0002 8.8335H5.00016Z"
                    fill="#2D3648"
                  />
                  <path
                    d="M5.00016 15.5002C4.07969 15.5002 3.3335 16.2464 3.3335 17.1668C3.3335 18.0873 4.07969 18.8335 5.00016 18.8335H35.0002C35.9206 18.8335 36.6668 18.0873 36.6668 17.1668C36.6668 16.2464 35.9206 15.5002 35.0002 15.5002H5.00016Z"
                    fill="#2D3648"
                  />
                  <path
                    d="M3.3335 23.8335C3.3335 22.913 4.07969 22.1668 5.00016 22.1668H35.0002C35.9206 22.1668 36.6668 22.913 36.6668 23.8335C36.6668 24.754 35.9206 25.5002 35.0002 25.5002H5.00016C4.07969 25.5002 3.3335 24.754 3.3335 23.8335Z"
                    fill="#2D3648"
                  />
                  <path
                    d="M5.00016 28.8335C4.07969 28.8335 3.3335 29.5797 3.3335 30.5002C3.3335 31.4206 4.07969 32.1668 5.00016 32.1668H35.0002C35.9206 32.1668 36.6668 31.4206 36.6668 30.5002C36.6668 29.5797 35.9206 28.8335 35.0002 28.8335H5.00016Z"
                    fill="#2D3648"
                  />
                </svg>
              </div>
              <div class="header-action-logo">
                <a href="/" class="logo">
                  <img src={logo} alt="" />
                </a>
              </div>
              <div class="header-action-search">
                <Input
                  props={{
                    ...optionsInput,
                    className: "has-input",
                    width: "633px",
                    borderRadius: "8px",
                  }}
                />
              </div>
            </div>
            <div className="header-action-component-2">
              <div class="header-action-user-link haul-help">
                <a href="/help">
                  <FontAwesomeIcon
                    icon={faComment}
                    className="user-link-icon"
                  />
                  <span className="h6">24/7</span>
                  <FontAwesomeIcon icon={faChevronDown} />
                </a>
              </div>
              <div class="header-action-user-link haul-login">
                <a href="/login">
                  <FontAwesomeIcon
                    icon={faCircleUser}
                    className="user-link-icon"
                  />
                  <span className="h6">sign in</span>
                  <FontAwesomeIcon icon={faChevronDown} />
                </a>
              </div>
              <div class="header-action-user-link haul-cart">
                <a href="/cart">
                  <FontAwesomeIcon
                    icon={faShoppingCart}
                    className="user-link-icon"
                  />
                  <span className="h6">cart</span>
                  <FontAwesomeIcon icon={faChevronDown} />
                </a>
              </div>
            </div>
          </div>
          <div class="header-action-search-mobile">
            <Input props={{ ...optionsInput , width: "544px"}} />
          </div>
          <div class="header-navbar">
            <div className="header-navbar-component-1">
              <Link
                className="Link link-shop"
                to="/shop"
                onMouseOver={() => setIsHoverShop(true)}
                onMouseOut={() => setIsHoverShop(false)}
              >
                <div className="h5">shop</div>
                <FontAwesomeIcon icon={faChevronDown} />
                <div className="header-navbar-hover">
                  <div
                    className="hnh-menu"
                    style={{ display: isHoverShop ? "block" : "none" }}
                  >
                    {hnh_menu.map((menu) => {
                      return (
                        <Fragment>
                          <div className="hnh-menu-item">
                            <span>{menu.title}</span>
                            <FontAwesomeIcon icon={faChevronRight} />
                          </div>
                        </Fragment>
                      );
                    })}
                    {/* <div className="hnh-food">{menu.content.food}</div>
              <div className="hnh-treats">{menu.content.treat}</div>
              <div className="hnh-supplies">{menu.content.supply}</div> */}
                  </div>
                </div>
              </Link>
              <Link className="Link" to="/pharmacy">
                <div className="h6">pharmacy</div>
                <FontAwesomeIcon icon={faChevronDown} />
              </Link>
              <Link className="Link" to="/brands">
                <div className="h6">brands</div>
              </Link>
              <Link className="Link" to="/chewy picks">
                <div className="h6">chewy picks</div>
              </Link>
              <Link className="Link" to="/give back">
                <div className="h6">give back</div>
                <FontAwesomeIcon icon={faChevronDown} />
              </Link>
              <Link className="Link" to="/today’s deal">
                <div className="h6">today’s deal</div>
              </Link>
            </div>
            <div className="header-navbar-component-2">
              <Link className="Link freeship" to="/dealship">
                <div
                  className="h6"
                  style={{ color: "var(--secondaryColor-red-900)" }}
                >
                  Free 1-3 day shipping over $49
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
