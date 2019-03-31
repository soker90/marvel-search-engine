import service from './ApiCallsMiddleware'

export default function (request, requestAction, successAction, errorAction, timeout) {
  return async (dispatch) => {
    dispatch(requestAction())
    try {
      const response = await service(request, timeout)
      dispatch(successAction(response))
    } catch (error) {
      dispatch(errorAction(error))
    }
  }
}
