/**
 * Acciones relacionadas con las notificaciones de la aplicación
 */
import notificationsActions from "../constans/actions/notifications";

/**
 * Elimina el mensaje guardado en el estado global
 * @returns {{type: string, message: null, status: null}}
 */
export const clearMessage = () => ({
    type: notificationsActions.CLEAR_MESSAGE,
    message: null,
    status: null
});

/**
 * Envia una notificación hasta la vista
 * @param function enqueueSnackbar
 * @param string message
 * @param boolean status
 * @returns {{type: string, message: null, status: null}}
 */
export const sendNotification = (enqueueSnackbar, message, status) => {
    enqueueSnackbar(message, {variant: status});
    return clearMessage();
};
