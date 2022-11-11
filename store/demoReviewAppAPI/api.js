import axios from "axios"
const demoReviewAppAPI = axios.create({
  baseURL: "https://demoreviewapp1-2-prod.herokuapp.com",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function rest_auth_login_create(payload) {
  return demoReviewAppAPI.post(`/rest-auth/login/`, payload.data)
}
function api_v1_product_create(payload) {
  return demoReviewAppAPI.post(`/api/v1/product/`, payload.data)
}
function api_v1_product_list(payload) {
  return demoReviewAppAPI.get(`/api/v1/product/`)
}
function api_v1_product_partial_update(payload) {
  return demoReviewAppAPI.patch(`/api/v1/product/${payload.id}/`, payload.data)
}
function api_v1_product_read(payload) {
  return demoReviewAppAPI.get(`/api/v1/product/${payload.id}/`)
}
function api_v1_product_delete(payload) {
  return demoReviewAppAPI.delete(`/api/v1/product/${payload.id}/`)
}
function api_v1_product_update(payload) {
  return demoReviewAppAPI.put(`/api/v1/product/${payload.id}/`, payload.data)
}
function rest_auth_password_change_create(payload) {
  return demoReviewAppAPI.post(`/rest-auth/password/change/`, payload.data)
}
function rest_auth_logout_create(payload) {
  return demoReviewAppAPI.post(`/rest-auth/logout/`)
}
function rest_auth_logout_list(payload) {
  return demoReviewAppAPI.get(`/rest-auth/logout/`)
}
function rest_auth_password_reset_confirm_create(payload) {
  return demoReviewAppAPI.post(
    `/rest-auth/password/reset/confirm/`,
    payload.data
  )
}
function api_v1_login_create(payload) {
  return demoReviewAppAPI.post(`/api/v1/login/`)
}
function api_v1_signup_create(payload) {
  return demoReviewAppAPI.post(`/api/v1/signup/`, payload.data)
}
function rest_auth_user_partial_update(payload) {
  return demoReviewAppAPI.patch(`/rest-auth/user/`, payload.data)
}
function rest_auth_user_read(payload) {
  return demoReviewAppAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return demoReviewAppAPI.put(`/rest-auth/user/`, payload.data)
}
function rest_auth_registration_verify_email_create(payload) {
  return demoReviewAppAPI.post(
    `/rest-auth/registration/verify-email/`,
    payload.data
  )
}
function rest_auth_password_reset_create(payload) {
  return demoReviewAppAPI.post(`/rest-auth/password/reset/`, payload.data)
}
function rest_auth_registration_create(payload) {
  return demoReviewAppAPI.post(`/rest-auth/registration/`, payload.data)
}
export const apiService = {
  rest_auth_login_create,
  api_v1_product_create,
  api_v1_product_list,
  api_v1_product_partial_update,
  api_v1_product_read,
  api_v1_product_delete,
  api_v1_product_update,
  rest_auth_password_change_create,
  rest_auth_logout_create,
  rest_auth_logout_list,
  rest_auth_password_reset_confirm_create,
  api_v1_login_create,
  api_v1_signup_create,
  rest_auth_user_partial_update,
  rest_auth_user_read,
  rest_auth_user_update,
  rest_auth_registration_verify_email_create,
  rest_auth_password_reset_create,
  rest_auth_registration_create
}
