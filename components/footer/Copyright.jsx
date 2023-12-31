import {dsnCN} from "../../hooks/helper";

function Copyright({className, ...restProps}) {
    return (
        <h5 className={dsnCN(className)} {...restProps}>
            {new Date().getFullYear()} © Made with <span className="love">♥</span>by
            <a className=""  target="_blank"
               rel="nofollow"
               href="https://themeforest.net/user/design_grid/portfolio/">Algo Sea Biz.</a>
        </h5>
    );
}


export default Copyright;