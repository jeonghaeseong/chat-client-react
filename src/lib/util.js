import dayjs from 'dayjs';

/**
 * 유틸모음 객체
 * @version 1.0
 * @exports util
 * @namespace util
 * @author 정해성 <briskly0415@rootsoft.kr>
 */
const util = {
    /**
     * 요일명을 반환한다.
     * @param {Number} idx - 요일 인덱스
     * @returns {String} - 요일명
     * @author 정해성 <briskly0415@rootsoft.kr>
     */
    getDayOfWeek: function (idx = dayjs().day()) {
        switch (idx) {
            case 0:
                return '일';
            case 1:
                return '월';
            case 2:
                return '화';
            case 3:
                return '수';
            case 4:
                return '목';
            case 5:
                return '금';
            case 6:
                return '토';
            default:
                return '';
        }
    },
};

/**
 * DatePicker 폼 요소 생성 및 관리
 * @constructor
 * @param {String} selector - 요소 선택자
 * @author 정해성 <briskly0415@rootsoft.kr>
 */
export const DatePicker = function (selector) {
    this.selector = selector;
    this.date = Date.now();
};

/**
 * DatePicker에 바인딩된 날짜를 반환한다.
 * @returns {String} 바인딩된 날짜
 * @author 정해성 <briskly0415@rootsoft.kr>
 */
DatePicker.prototype.getDate = function () {
    return Date.now();
};

/**
 * DatePicker에 날짜를 바인딩한다.
 * @param {Date} - 날짜
 * @author 정해성 <briskly0415@rootsoft.kr>
 */
DatePicker.prototype.setDate = function (date) {
    this.date = date;
};

/**
 * @constant
 * @type {boolean}
 * @default true
 */
export const isDev = true;

/**
 * 두 값 사이의 난수를 생성
 * @param {Number} min 최소값
 * @param {Number} max 최대값
 * @returns {Number} 난수
 * @author 정해성 <briskly0415@rootsoft.kr>
 */
export function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

export default util;
