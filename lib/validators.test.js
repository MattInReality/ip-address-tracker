import {validate, validateIPAddress, validateDomain} from './validators';


describe('validate', () => {
    it('should return a boolean true for a matched regex', () => {
        const str = 'Hello World'
        const regex = /^Hello World$/g
        expect(validate(str, regex)).toBe(true)
    })
    it('should return a boolean false for a unmatched regex', () => {
        const str = 'Hello World'
        const regex = /^Not Hello World$/g
        expect(validate(str, regex)).toBe(false)
    })
    it('should throw an error if passed a non string value', () => {
        const nonStr = 1
        const regex = /^Not passing a string$/g
        expect(() => validate(nonStr, regex)).toThrowError('validation target my be type: string')
    })
})

describe('validateIPAddress', () => {
    it('should return true for valid IP addresses', () => {
        const ip = ['1.1.1.1', '10.111.1.1', '56.10.0.0']
        const checked = ip.map(item => validateIPAddress(item))
        expect(checked.every((e) => e === true)).toBe(true)
    });
    it('should return false for invalid IP addresses', () => {
        const ips = ['notanIp.com', '10.111.1.1', '56.10.0.0']
        const checked = ips.map(item => validateIPAddress(item))
        expect(checked[0]).toBe(false)
        expect(checked.slice(1).every(e => e === true)).toBe(true)
    })
    it('should return true for valid IPV6 address', () => {
        const ip = '21E5:69AA:FFFF:1:E100:B691:1285:F56E'
        expect(validateIPAddress(ip)).toBe(true)
    })
    it('should return false if passed an empty string', () => {
        const ip = '';
        expect(validateIPAddress(ip)).toBe(false)
    })
})

describe('validateDomain', () => {
    it('should return true for valid domains', () => {
        const domains = ['google.com', 'udemy.com', 'anotherdomain.co.uk']
        const checked = domains.map(item => validateDomain(item))
        expect(checked.every(e => e === true)).toBe(true)
    })
    it('should return false for invalid domains', () => {
        const domains = ['123.123.123.123', 'udemy.com', 'anotherdomain.co.uk', 'test.udemy.com']
        const checked = domains.map(item => validateDomain(item))
        expect(checked[0]).toBe(false)
        expect(checked.slice(1).every(e => e === true)).toBe(true)
    })
    it('should return false if passed an empty string', () => {
        const domain = '';
        expect(validateDomain(domain)).toBe(false)
    })
})
