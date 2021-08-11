import { Router } from 'express'
import * as eventsCtrl from '../controllers/events.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

// ========= Public Routes ===========

router.get('/getAll', eventsCtrl.getAllEvents)
router.get('/getByPostal/:size/:postalCode', eventsCtrl.getEventsByPostalCode)
router.get('/getEvent/:id', eventsCtrl.getEventById)
router.post("/createEvent/:id", eventsCtrl.create)

// ========= Protected Routes ===========
router.use(decodeUserFromToken)
router.post('/:id', checkAuth, eventsCtrl.createComment)
router.delete('/:event_id/comments/:comment_id', checkAuth, eventsCtrl.deleteComment)


export {
    router
}

