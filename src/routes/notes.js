import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  res.status(200).json({
    message: 'Retrieved all notes',
  });
});

router.get('/:noteId', (req, res) => {
  const id_param = req.params.noteId;

  res.status(200).json({
    message: `Retrieved note with ID: ${id_param}`,
  });
});

export default router;
