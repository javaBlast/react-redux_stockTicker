import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getTickerData} from "../redux/selectors";
import {updateTicker} from "../redux/tickerAction";
import {connect} from "../services";
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import usePrevious from "../hooks/usePrevious";
import {green, red} from "@material-ui/core/colors";
import moment from "moment";

export const PriceViewer = () => {
    const dispatch = useDispatch();

    const {
        ticker,
        exchange,
        price,
        change,
        change_percent,
        last_trade_time,
        dividend,
        yield: yieldInfo
    } = useSelector(getTickerData);

    const prevPrice = usePrevious(price);
    const prevChange = usePrevious(change);
    const prevChangePercent = usePrevious(change_percent);

    const upDownArrow = (item, prevItem) =>
        !prevItem ? null :
            prevItem > item ?
                <ArrowDownwardIcon style={{color: red[500]}}/> :
                <ArrowUpwardIcon style={{color: green[500]}}/>;


    const formattedLastTradeTime = moment(last_trade_time).format('YYYY:MM:DD hh:mm:ss');

    const handleUpdateTickerData = data => {
        dispatch(updateTicker(data));
    };

    useEffect(() => {
        connect('AAPL', handleUpdateTickerData);
    }, []);

    return <div className='priceViewer'>
        <div className="ticker">
            Ticker : {ticker}
        </div>
        <div className="exchange">
            Exchange : {exchange}
        </div>
        <div className="price">
            Price : {price} {upDownArrow(price, prevPrice)}
        </div>
        <div className="change">
            Change : {change} {upDownArrow(change, prevChange)}
        </div>
        <div className="changePercent">
            Change percent : {change_percent} {upDownArrow(change_percent, prevChangePercent)}
        </div>
        <div className="lastTradeTime">
            Last trade time : {formattedLastTradeTime}
        </div>
        <div className="divident">
            Divident : {dividend}
        </div>
        <div className="yieldInfo">
            Yield : {yieldInfo}
        </div>
    </div>
};
