import { WindowControls } from "@components";
import { techStack } from "@constants";
import WindowWrapper from "@hoc/WindowWrapper";
import { CheckIcon, Flag } from "lucide-react";
import React from "react";

const Terminal = () => {
  return (
    <>
      <div id="window-header">
        <WindowControls target="terminal" />
        <h2>Tech Stack</h2>
      </div>
      <div className="techstack">
        <p>
          <span className="font-bold">@harsh % </span>
          show techstack
        </p>
        <div className="label">
          <p className="w-32">Category</p>
          <p>Technologies</p>
        </div>
        <ul className="content">
          {techStack.map(({ category, items }) => (
            <li className="flex items-center" key={category}>
              <CheckIcon className="check" size={20} />
              <h3>{category}</h3>
              <ul>
                {items.map((item, index) => (
                  <li key={index}>
                    {item} {index < items.length - 1 ? "," : ""}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
        <div className="footnote">
          <p>
            <CheckIcon size={20} /> 5 / 5 stacks loaded successfully
          </p>
          <p>
            <Flag size={15} className="fill-current" />
            Render time. 6ms
          </p>
        </div>
      </div>
    </>
  );
};

const TerminalWindow = WindowWrapper(Terminal, "terminal");
export default TerminalWindow;
