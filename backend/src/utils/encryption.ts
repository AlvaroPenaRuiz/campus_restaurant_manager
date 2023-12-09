import {sha256} from 'js-sha256'

export const encrypt256 = (string: string) => {
    return sha256(string)
}