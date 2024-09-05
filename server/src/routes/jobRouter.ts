import express from 'express';
import { jobController } from '../controllers/jobController';

const router = express.Router();

router.post('/', jobController.createJob);
router.get('/', jobController.fetchJobs);
router.get('/:id', jobController.fetchJobById);
router.put('/:id', jobController.updateJob);
router.delete('/:id', jobController.deleteJob);
// router.get('/employer/:employerId', jobController.getJobsByEmployer);
// router.get('/status/:status', jobController.getJobsByStatus);
// router.post('/:id/apply', jobController.applyForJob);
// router.post('/:id/hire', jobController.hireContractor);

export default router;