import buildFromAbi from './buildFromAbi'
import delete_msg from './delete_msg'
import error from './error'
import query_contract_calls from './query_contract_calls'
import query_contract_for_env from './query_contract_for_env'
import settings from './settings'
import settings_apiKeys from './settings_apiKeys'
import settings_contracts from './settings_contracts'
import settings_networks from './settings_networks'
import settings_save from './settings_save'
import settings_signers from './settings_signers'
import update_msg from './update_msg'

const actions = {
    buildFromAbi,
    delete_msg,
    error,
    query_contract_calls,
    query_contract_for_env,
    settings_apiKeys,
    settings_contracts,
    settings_networks,
    settings_save,
    settings_signers,
    settings,
    update_msg
}

export default actions