function extractEmails(members) {
    if (!Array.isArray(members)) {
        return [];
    }
    return members.map(member => member.email);
}

function isValidEmail(email) {
    if (typeof email !== 'string') {
        return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function getValidEmails(members) {
    return extractEmails(members).filter(isValidEmail);
}

/**
 * 사용자 배열에서 유효한 이메일만 추출하고 중복을 제거한다.
 * @param {Array<{ email?: string }>} members - 사용자 객체 배열
 * @returns {string[]} 중복이 제거된 유효 이메일 목록
 */
function uniqueValidEmails(members) {
    return [...new Set(getValidEmails(members))];
}

module.exports = { extractEmails, isValidEmail, getValidEmails, uniqueValidEmails };
