/**
 * Created by sn01396 on 2017/1/17 0017.
 */
function Move(obj, iTarget, attr, fn) {
    clearInterval(obj['timer' + attr]);
    obj['timer' + attr] = setInterval(function () {
        var cur;
        if (attr == 'opacity') {
            cur = Math.round(parseFloat(getStyle(obj, attr)) * 100);
        } else {
            cur = parseInt(getStyle(obj, attr));
        }

        var speed = (iTarget - cur) / 8;
        speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
        if (cur == iTarget) {
            clearInterval(obj['timer' + attr]);
            if (fn) {
                fn();
            }
        } else {
            if (attr == 'opacity') {
                obj.style.filter = 'alpha(opacity:' + (cur + speed) + ')';
                obj.style.opacity = (cur + speed) / 100;
            } else {
                obj.style[attr] = cur + speed + 'px';
            }
        }
    }, 30);
}

function getStyle(obj, attr) {
    if (obj.currentStyle) {
        return obj.currentStyle[attr];
    } else {
        return getComputedStyle(obj, false)[attr];
    }
}