import {Router, Request, Response} from 'express';

const router: Router = Router();

router.get("/", (req: Request, resp: Response) => {
    resp.send("Hello World");
});

router.get("/:name", (req: Request, resp: Response) =>  {
    
    let {name} = req.params;

    resp.send('Hello : ${name}');

});

export const LoginController: Router = router;