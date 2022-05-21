import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { handlers } from 'mocks/handlers';
import { mockOrderList } from 'fixture';
import * as actions from 'reducers/orderList/orderList.actions';
import { getOrderListAsync } from '../orderList.thunks';

const mockDispatch = jest.fn();

jest.mock('react-redux', () => ({
  useDispatch: () => mockDispatch,
}));

const server = setupServer(...handlers);

describe('thunk를 이용하여 외부 API에 잘 연동되는지 확인한다.', () => {
  beforeAll(() => {
    server.listen();
  });

  afterEach(() => server.resetHandlers());

  afterAll(() => server.close());

  test('1. 주문 목록 정보를 불러오는 데 성공하면 주문 목록 정보와 함께 GET_ORDER_LIST_SUCCESS 액션이 dispatch 되어야 한다.', async () => {
    server.use(
      rest.get('/orderList', (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(mockOrderList));
      }),
    );

    await getOrderListAsync(mockDispatch);

    expect(mockDispatch).toBeCalledWith(
      actions.getOrderListSuccess(mockOrderList),
    );
  });

  test('2. 주문 목록 정보를 불러오는 데 실패하면 GET_ORDER_LIST_ERROR 액션이 dispatch 되어야 한다.', async () => {
    server.use(
      rest.get('/orderList', (req, res, ctx) => {
        return res(ctx.status(500));
      }),
    );

    await getOrderListAsync(mockDispatch);

    expect(mockDispatch).toBeCalledWith(actions.getOrderListError());
  });
});
