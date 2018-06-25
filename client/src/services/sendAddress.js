import Api from '@/services/Api'

export default {
  sendAddres (address) {
    return Api().post('compare', address)
  }
}
