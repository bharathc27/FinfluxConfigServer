import {Router, Request, Response} from 'express';
const router: Router = Router();

router.get("/", (req: Request, resp: Response) => {
    resp.send("Hello Index");
});

export * from './LoginController'

export const IndexController: Router = router;