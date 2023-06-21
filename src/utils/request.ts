import axios from "axios";
import { request } from "./axios";

const requestLogin = (email: String, password: String) => {
  return request.post('/login', {
    'email': email,
    'password': password
})};

const requestRegister = (email: String, password: String, username: String, phone: String) => {
  return request.post('/register', {
    'email': email,
    'password': password,
    'username': username,
    'phone': phone,
})};

const requestRoom = () => {
  return request.get('/room')
};

const requestReservation = (start_date: String, end_date: String, member_id: String, room_id: String) => {
  return request.post('/reservation', {
    'start_date': start_date,
    'end_date': end_date,
    'member_id': member_id,
    'room_id': room_id
})};

const requestReservationInfo = (member_id: String) => {
  return request.get(`/reservation/${member_id}`)
};

export {
  requestLogin,
  requestRegister,
  requestRoom,
  requestReservation,
  requestReservationInfo
};
